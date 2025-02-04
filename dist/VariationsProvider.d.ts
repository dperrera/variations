import { VariationsContextType } from './types';
import { VariationsProviderProps } from './internal-types';
export declare const VariationsContext: import('react').Context<VariationsContextType<string, string> | null>;
export declare function useVariations<TGroup extends string = string, TId extends string = string>(): VariationsContextType<TGroup, TId>;
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
export declare function VariationsProvider({ children, disableQueryString, }: VariationsProviderProps): import("react").JSX.Element;
