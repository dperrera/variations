import { default as React } from 'react';
import { VariationsPosition } from './types';
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    position?: VariationsPosition;
    minimizedByDefault?: boolean;
    className?: string;
}
export declare function VariationsControls({ position, minimizedByDefault, className, ...props }: Props): React.JSX.Element;
export {};
