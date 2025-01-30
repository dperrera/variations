import { ReactNode } from 'react';
export type VariationsPosition = "bottom-right" | "bottom-left" | "bottom-center" | "top-right" | "top-left" | "top-center" | "middle-right" | "middle-left";
export interface VariationsProps {
    label: string;
    children: ReactNode;
    isRoot?: boolean;
}
export interface VariationProps {
    label: string;
    children: ReactNode;
}
