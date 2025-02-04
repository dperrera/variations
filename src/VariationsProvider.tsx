"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { VariationNode, VariationsContextType } from "./types";
import type { VariationsProviderProps } from "./internal-types";

export const VariationsContext = createContext<VariationsContextType<
  string,
  string
> | null>(null);

export function useVariations<
  TGroup extends string = string,
  TId extends string = string
>(): VariationsContextType<TGroup, TId> {
  const context = useContext(VariationsContext);
  if (!context) {
    throw new Error("useVariations must be used within a VariationsProvider");
  }
  return context as unknown as VariationsContextType<TGroup, TId>;
}

export function useVariation(group: string) {
  const { activeIds, setActiveId, variations } = useVariations();
  const activeId = activeIds.get(group);

  // Get all variations for this group
  const groupVariations = useMemo(() => {
    return Array.from(variations.entries())
      .filter(([, variation]) => variation.group === group)
      .map(([id, { label }]) => ({
        id,
        label,
      }));
  }, [variations, group]);

  // Get the currently active variation
  const active = useMemo(() => {
    if (!activeId) return null;
    const variation = variations.get(activeId);
    return variation ? { id: activeId, label: variation.label } : null;
  }, [activeId, variations]);

  return {
    /** The currently active variation */
    active,
    /** Set the active variation by ID */
    setActive: (id: string) => setActiveId(group, id),
    /** All available variations for this group */
    variations: groupVariations,
  };
}

export function VariationsProvider({
  children,
  disableQueryString = false,
}: VariationsProviderProps) {
  const [localActiveIds, setLocalActiveIds] = useState<Map<string, string>>(
    new Map()
  );
  const [localVariations, setLocalVariations] = useState<
    Map<
      string,
      { parentId?: string; group: string; label: string; groupLabel: string }
    >
  >(new Map());

  // Initialize from URL if present
  useEffect(() => {
    if (disableQueryString || typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const variations = params.get("var");
    if (!variations) return;
    try {
      // Parse the URL-friendly format "group.id_group.id_group.id"
      const pairs = variations.split("_").map((pair) => {
        const [group, id] = pair.split(".");
        if (!group || !id) throw new Error("Invalid format");
        return [group, id] as [string, string];
      });
      setLocalActiveIds(new Map(pairs));
    } catch (e) {
      // Invalid format, ignore
      setLocalActiveIds(new Map());
    }
  }, [disableQueryString]);

  // Update URL when variations change
  useEffect(() => {
    if (disableQueryString || typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const variations = Array.from(localActiveIds.entries());
    if (variations.length === 0) {
      params.delete("var");
    } else {
      // Convert to URL-friendly format "group.id_group.id_group.id"
      const urlValue = variations
        .map(([group, id]) => `${group}.${id}`)
        .join("_");
      params.set("var", urlValue);
    }
    const newSearch = params.toString();
    const newUrl = newSearch
      ? `${window.location.pathname}?${newSearch}`
      : window.location.pathname;
    window.history.replaceState({}, "", newUrl);
  }, [localActiveIds, disableQueryString]);

  // Listen for URL changes
  useEffect(() => {
    if (disableQueryString || typeof window === "undefined") return;
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const variations = params.get("var");
      if (variations) {
        try {
          // Parse the URL-friendly format "group.id_group.id_group.id"
          const pairs = variations.split("_").map((pair) => {
            const [group, id] = pair.split(".");
            if (!group || !id) throw new Error("Invalid format");
            return [group, id] as [string, string];
          });
          setLocalActiveIds(new Map(pairs));
        } catch (e) {
          // Invalid format, ignore
          setLocalActiveIds(new Map());
        }
      } else {
        setLocalActiveIds(new Map());
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [disableQueryString]);

  // Build the active variations tree
  const activeTree = useMemo(() => {
    const rootId = localActiveIds.get("root");
    if (!rootId) return null;

    const buildNode = (id: string, group: string): VariationNode => {
      const node: VariationNode = {
        id,
        group,
        children: new Map(),
      };

      // Find all variations that have this node's id as their parent
      Array.from(localVariations.entries()).forEach(([, variation]) => {
        if (variation.parentId === id) {
          const activeId = localActiveIds.get(variation.group);
          if (activeId) {
            node.children.set(
              variation.group,
              buildNode(activeId, variation.group)
            );
          }
        }
      });

      return node;
    };

    const root = buildNode(rootId, "root");
    return root;
  }, [localActiveIds, localVariations]);

  const setActiveId = useCallback(
    (group: string, id: string) => {
      setLocalActiveIds((prev) => {
        const next = new Map(prev);
        next.set(group, id);
        // Clear all child variations when changing layout
        if (group === "root") {
          Array.from(prev.keys()).forEach((key) => {
            if (key !== "root") next.delete(key);
          });
        } else {
          // Clear child variations of the changed group
          const variation = Array.from(localVariations.entries()).find(
            ([id_]) => id_ === id
          );
          if (variation) {
            Array.from(prev.keys()).forEach((key) => {
              const keyVariation = Array.from(localVariations.entries()).find(
                ([, v]) => v.group === key
              );
              if (keyVariation && keyVariation[1].parentId === id) {
                next.delete(key);
              }
            });
          }
        }
        return next;
      });
    },
    [localVariations]
  );

  const registerVariation = useCallback(
    (
      group: string,
      id: string,
      label: string,
      groupLabel: string,
      parentId?: string
    ) => {
      setLocalVariations((prev) => {
        const existing = prev.get(id);
        if (
          existing?.group === group &&
          existing?.label === label &&
          existing?.groupLabel === groupLabel &&
          existing?.parentId === parentId
        ) {
          return prev;
        }
        const next = new Map(prev);
        next.set(id, { group, label, groupLabel, parentId });
        return next;
      });
    },
    []
  );

  const value = useMemo(
    () => ({
      activeIds: localActiveIds,
      setActiveId,
      registerVariation,
      variations: localVariations,
      activeTree,
    }),
    [
      localActiveIds,
      setActiveId,
      registerVariation,
      localVariations,
      activeTree,
    ]
  );

  return (
    <VariationsContext.Provider value={value}>
      {children}
    </VariationsContext.Provider>
  );
}
