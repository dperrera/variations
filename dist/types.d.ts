import { ReactNode } from 'react';
export type VariationsPosition = "bottom-right" | "bottom-left" | "bottom-center" | "top-right" | "top-left" | "top-center" | "middle-right" | "middle-left";
export interface VariationsProps {
    label: string;
    children: ReactNode;
    parentId?: string;
    group?: string;
    isRoot?: boolean;
}
export interface VariationProps {
    group?: string;
    label: string;
    id?: string;
    groupLabel?: string;
    parentId?: string;
    children: ReactNode;
}
