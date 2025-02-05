import { VariationsContextType, VariationsStateContextType } from './types';
export declare const VariationsContext: import('react').Context<VariationsContextType<string, string> | null>;
export declare const VariationsStateContext: import('react').Context<VariationsStateContextType<any> | null>;
export declare function useVariations<TGroup extends string = string, TId extends string = string>(): VariationsContextType<TGroup, TId>;
export declare function useVariationsState<TState = unknown>(): [
    TState,
    (valueOrUpdater: TState | ((prev: TState) => TState)) => void
];
export declare function useVariation(group: string): {
    /** The currently active variation */
    active: {
        id: string;
        label: string;
    } | null;
    /** Set the active variation by ID */
    setActive: (id: string) => void;
    /** All available variations for this group */
    variations: {
        id: string;
        label: string;
    }[];
};
export interface VariationsProviderProps<TState = unknown> {
    children: React.ReactNode;
    /** Disables the URL query string functionality when true */
    disableQueryString?: boolean;
    /** Initial state for the global state context */
    initialState?: TState;
}
export declare function VariationsProvider<TState = unknown>({ children, disableQueryString, initialState, }: VariationsProviderProps<TState>): import("react").JSX.Element;
