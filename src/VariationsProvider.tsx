"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type {
  UrlSyncAdapter,
  VariationNode,
  VariationsContextType,
  VariationsStateContextType,
} from "./types";
import {
  decodeStateParam,
  encodeStateParam,
  isDevEnvironment,
  parseVariationsParam,
  serializeVariationsParam,
  toSearchParams,
} from "./utils";

export const VariationsContext = createContext<VariationsContextType<
  string,
  string
> | null>(null);

export const VariationsStateContext =
  createContext<VariationsStateContextType<any> | null>(null);

export function useVariations<
  TGroup extends string = string,
  TId extends string = string
>(): VariationsContextType<TGroup, TId> {
  const context = useContext(VariationsContext);
  if (!context) {
    throw new Error(
      "useVariations must be used within a VariationsProvider.\n" +
        'Next.js: put VariationsProvider (or NextVariationsProvider) in a Client Component.'
    );
  }
  return context as unknown as VariationsContextType<TGroup, TId>;
}

export function useVariationsState<TState = unknown>(): [
  TState,
  (valueOrUpdater: TState | ((prev: TState) => TState)) => void
] {
  const context = useContext(VariationsStateContext);
  if (!context) {
    throw new Error(
      "useVariationsState must be used within a VariationsProvider"
    );
  }
  return [context.state, context.setState] as [
    TState,
    (valueOrUpdater: TState | ((prev: TState) => TState)) => void
  ];
}

export function useVariation(group: string) {
  const { activeIds, setActiveId, variations } = useVariations();
  const activeId = activeIds.get(group);

  const groupVariations = useMemo(() => {
    return Array.from(variations.entries())
      .filter(([, variation]) => variation.group === group)
      .map(([id, { label }]) => ({
        id,
        label,
      }));
  }, [variations, group]);

  const active = useMemo(() => {
    if (!activeId) return null;
    const variation = variations.get(activeId);
    return variation ? { id: activeId, label: variation.label } : null;
  }, [activeId, variations]);

  return {
    active,
    setActive: (id: string) => setActiveId(group, id),
    variations: groupVariations,
  };
}

export interface VariationsProviderProps<TState = unknown> {
  children: React.ReactNode;
  /** Disables URL query string sync when true */
  disableQueryString?: boolean;
  /**
   * Master switch for URL sync and default controls visibility.
   * Defaults to `true` in development and `false` in production.
   */
  enabled?: boolean;
  /** Initial state for the global state context */
  initialState?: TState;
  /**
   * Custom URL sync adapter. Use `NextVariationsProvider` from `variations/next`
   * for App Router, or pass your own adapter.
   */
  urlSync?: UrlSyncAdapter;
}

function applyQueryToState<TState>(
  query: string | URLSearchParams,
  setActiveIds: (map: Map<string, string>) => void,
  setState: (state: TState) => void
) {
  const params = toSearchParams(query);
  setActiveIds(parseVariationsParam(params.get("var")));
  const decoded = decodeStateParam<TState>(params.get("s"));
  if (decoded !== null) setState(decoded);
}

export function VariationsProvider<TState = unknown>({
  children,
  disableQueryString = false,
  enabled,
  initialState,
  urlSync,
}: VariationsProviderProps<TState>) {
  const isEnabled = enabled ?? isDevEnvironment();
  const syncUrl = isEnabled && !disableQueryString;
  const writingRef = useRef(false);
  // Gate URL writes until we've hydrated from the current query once.
  // Prevents default variation selection from overwriting share links on load.
  const [urlReady, setUrlReady] = useState(!syncUrl);

  const [localActiveIds, setLocalActiveIds] = useState<Map<string, string>>(
    new Map()
  );
  const [localVariations, setLocalVariations] = useState<
    Map<
      string,
      { parentId?: string; group: string; label: string; groupLabel: string }
    >
  >(new Map());
  const [globalState, setGlobalState] = useState<TState>(
    () => initialState as TState
  );

  const externalQuery = syncUrl && urlSync ? String(urlSync.getQuery()) : null;

  // Hydrate from URL before paint / before child useEffects that set defaults.
  useLayoutEffect(() => {
    if (!syncUrl || typeof window === "undefined") {
      setUrlReady(true);
      return;
    }
    if (writingRef.current) return;

    const query = urlSync ? urlSync.getQuery() : window.location.search;
    applyQueryToState(query, setLocalActiveIds, setGlobalState);
    setUrlReady(true);
  }, [syncUrl, urlSync, externalQuery]);

  // Write URL when variations or state change — only after hydration.
  useEffect(() => {
    if (!syncUrl || !urlReady || typeof window === "undefined") return;

    const params = new URLSearchParams();
    const varValue = serializeVariationsParam(localActiveIds);
    if (varValue) params.set("var", varValue);

    if (globalState !== undefined) {
      const encoded = encodeStateParam(globalState);
      if (encoded) params.set("s", encoded);
    }

    const nextQuery = params.toString();

    if (urlSync) {
      const current = toSearchParams(urlSync.getQuery()).toString();
      if (current === nextQuery) return;
      writingRef.current = true;
      urlSync.setQuery(nextQuery);
      queueMicrotask(() => {
        writingRef.current = false;
      });
      return;
    }

    const current = new URLSearchParams(window.location.search).toString();
    if (current === nextQuery) return;

    const newUrl = nextQuery
      ? `${window.location.pathname}?${nextQuery}`
      : window.location.pathname;
    window.history.replaceState({}, "", newUrl);
  }, [localActiveIds, globalState, syncUrl, urlSync, urlReady]);

  // Browser back/forward (default adapter only)
  useEffect(() => {
    if (!syncUrl || urlSync || typeof window === "undefined") return;
    const handlePopState = () => {
      applyQueryToState(
        window.location.search,
        setLocalActiveIds,
        setGlobalState
      );
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [syncUrl, urlSync]);

  const activeTree = useMemo(() => {
    const rootId = localActiveIds.get("root");
    if (!rootId) return null;

    const buildNode = (id: string, group: string): VariationNode => {
      const node: VariationNode = {
        id,
        group,
        children: new Map(),
      };

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

    return buildNode(rootId, "root");
  }, [localActiveIds, localVariations]);

  const setActiveId = useCallback(
    (group: string, id: string) => {
      setLocalActiveIds((prev) => {
        const next = new Map(prev);
        next.set(group, id);
        if (group === "root") {
          Array.from(prev.keys()).forEach((key) => {
            if (key !== "root") next.delete(key);
          });
        } else {
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

  const variationsValue = useMemo(
    () => ({
      activeIds: localActiveIds,
      setActiveId,
      registerVariation,
      variations: localVariations,
      activeTree,
      disableQueryString,
      enabled: isEnabled,
    }),
    [
      localActiveIds,
      setActiveId,
      registerVariation,
      localVariations,
      activeTree,
      disableQueryString,
      isEnabled,
    ]
  );

  const stateValue = useMemo(
    () => ({
      state: globalState,
      setState: (valueOrUpdater: TState | ((prev: TState) => TState)) => {
        if (typeof valueOrUpdater === "function") {
          setGlobalState(valueOrUpdater as (prev: TState) => TState);
        } else {
          setGlobalState(valueOrUpdater);
        }
      },
    }),
    [globalState]
  );

  return (
    <VariationsContext.Provider value={variationsValue}>
      <VariationsStateContext.Provider value={stateValue}>
        {children}
      </VariationsStateContext.Provider>
    </VariationsContext.Provider>
  );
}
