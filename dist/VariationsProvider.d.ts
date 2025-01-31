import { VariationsContextType, VariationsProviderProps } from './internal-types';
export declare const VariationsContext: import('react').Context<VariationsContextType | null>;
export declare const useVariations: () => VariationsContextType;
export declare function VariationsProvider({ children }: VariationsProviderProps): import("react").JSX.Element;
