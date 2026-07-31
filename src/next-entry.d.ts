import type { ReactNode } from "react";
import type { VariationsProviderProps, UrlSyncAdapter } from "variations";

export declare function NextVariationsProvider<TState = unknown>(
  props: VariationsProviderProps<TState>
): ReactNode;

export type { VariationsProviderProps, UrlSyncAdapter };
