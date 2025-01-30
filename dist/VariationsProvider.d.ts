import { ReactNode } from 'react';
interface VariationNode {
    id: string;
    group: string;
    children: Map<string, VariationNode>;
}
export type { VariationNode };
export declare const VariationsContext: any;
export declare const useVariations: () => any;
interface VariationsProviderProps {
    children: ReactNode;
}
export declare function VariationsProvider({ children }: VariationsProviderProps): import("react/jsx-runtime").JSX.Element;
