import { default as React } from 'react';
import { VariationsControlsProps } from './types';
interface Props extends React.HTMLAttributes<HTMLDivElement>, VariationsControlsProps {
}
export declare function VariationsControls({ position, minimizedByDefault, className, ...props }: Props): React.JSX.Element;
export {};
