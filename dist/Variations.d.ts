import { default as React } from 'react';
import { VariationsProps } from './types';
export declare function Variations({ isRoot, label, children, ...internalProps }: VariationsProps & {
    parentId?: string;
    group?: string;
}): React.JSX.Element;
