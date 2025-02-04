import { VariationProps } from './types';
export declare function Variation({ label, children, ...internalProps }: VariationProps & {
    group?: string;
    groupLabel?: string;
    parentId?: string;
    id?: string;
}): import("react").JSX.Element | null;
