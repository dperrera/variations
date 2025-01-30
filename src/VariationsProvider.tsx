"use client";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface VariationNode {
  id: string;
  group: string;
  children: Map<string, VariationNode>;
}

export type { VariationNode };

interface VariationsContextType {
  activeIds: Map<string, string>;
  setActiveId: (group: string, variationId: string) => void;
  registerVariation: (
    group: string,
    id: string,
    label: string,
    groupLabel: string,
    parentId?: string
  ) => void;
  variations: Map<
    string,
    { group: string; label: string; groupLabel: string; parentId?: string }
  >;
  activeTree: VariationNode | null;
}

export const VariationsContext = createContext<VariationsContextType | null>(
  null
);

export const useVariations = () => {
  const context = useContext(VariationsContext);
  if (!context) {
    throw new Error("useVariations must be used within a VariationsProvider");
  }
  return context;
};

interface VariationsProviderProps {
  children: ReactNode;
}

export function VariationsProvider({ children }: VariationsProviderProps) {
  const [localActiveIds, setLocalActiveIds] = useState<Map<string, string>>(
    new Map()
  );
  const [localVariations, setLocalVariations] = useState<
    Map<
      string,
      { parentId?: string; group: string; label: string; groupLabel: string }
    >
  >(new Map());

  // Build the active variations tree
  const activeTree = useMemo(() => {
    const rootId = localActiveIds.get("root-variations");
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

    const root = buildNode(rootId, "root-variations");
    return root;
  }, [localActiveIds, localVariations]);

  const setActiveId = useCallback(
    (group: string, id: string) => {
      setLocalActiveIds((prev) => {
        const next = new Map(prev);
        next.set(group, id);
        // Clear all child variations when changing layout
        if (group === "root-variations") {
          Array.from(prev.keys()).forEach((key) => {
            if (key !== "root-variations") next.delete(key);
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
