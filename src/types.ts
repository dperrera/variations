import { ReactNode } from "react";

export type VariationsPosition =
  | "bottom-right"
  | "bottom-left"
  | "bottom-center"
  | "top-right"
  | "top-left"
  | "top-center"
  | "middle-right"
  | "middle-left";

export interface VariationsProps {
  label: string;
  /** Stable group id. Defaults to a slug of `label` (or `"root"` when `isRoot`). */
  id?: string;
  children: ReactNode;
  isRoot?: boolean;
}

export interface VariationProps {
  label: string;
  /** Stable variation id. Defaults to a slug of `label`. Prefer this for shareable URLs. */
  id?: string;
  children: ReactNode;
}

export interface VariationsControlsProps {
  position?: VariationsPosition;
  minimizedByDefault?: boolean;
  /**
   * Force controls on/off. Defaults to the provider `enabled` flag
   * (on in development, off in production).
   */
  enabled?: boolean;
}

/**
 * Pluggable URL sync (e.g. Next.js App Router via `variations/next`).
 * When omitted, the provider uses `history.replaceState` + `popstate`.
 */
export interface UrlSyncAdapter {
  /** Current query string (with or without `?`) or URLSearchParams */
  getQuery: () => string | URLSearchParams;
  /** Replace the query string (no leading `?`). Empty string clears it. */
  setQuery: (query: string) => void;
}

export interface VariationNode<
  TGroup extends string = string,
  TId extends string = string
> {
  id: TId;
  group: TGroup;
  children: Map<TGroup, VariationNode<TGroup, TId>>;
}

export interface VariationsContextType<
  TGroup extends string = string,
  TId extends string = string
> {
  activeIds: Map<TGroup, TId>;
  setActiveId: (group: TGroup, variationId: TId) => void;
  registerVariation: (
    group: TGroup,
    id: TId,
    label: string,
    groupLabel: string,
    parentId?: TId
  ) => void;
  variations: Map<
    TId,
    { group: TGroup; label: string; groupLabel: string; parentId?: TId }
  >;
  activeTree: VariationNode<TGroup, TId> | null;
  disableQueryString: boolean;
  /** False in production by default — controls should hide and URL sync pauses. */
  enabled: boolean;
}

export interface VariationsStateContextType<TState = unknown> {
  state: TState;
  setState: (valueOrUpdater: TState | ((prev: TState) => TState)) => void;
}
