import { ReactNode } from 'react';
import { VariationProps, VariationsProps } from './types';
export interface VariationsContextType {
    activeIds: Map<string, string>;
    setActiveId: (group: string, variationId: string) => void;
    registerVariation: (group: string, id: string, label: string, groupLabel: string, parentId?: string) => void;
    variations: Map<string, {
        group: string;
        label: string;
        groupLabel: string;
        parentId?: string;
    }>;
    activeTree: VariationNode | null;
}
export interface VariationsProviderProps {
    children: ReactNode;
    /** Disables the URL query string functionality when true */
    disableQueryString?: boolean;
}
export interface VariationNode {
    id: string;
    group: string;
    children: Map<string, VariationNode>;
}
export interface InternalVariationProps extends VariationProps {
    group?: string;
    groupLabel?: string;
    parentId?: string;
    id?: string;
}
export interface InternalVariationsProps extends VariationsProps {
    parentId?: string;
    group?: string;
}
