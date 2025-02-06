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
export interface VariationsControlsProps {
    position?: VariationsPosition;
    minimizedByDefault?: boolean;
}
export interface VariationNode<TGroup extends string = string, TId extends string = string> {
    id: TId;
    group: TGroup;
    children: Map<TGroup, VariationNode<TGroup, TId>>;
}
export interface VariationsContextType<TGroup extends string = string, TId extends string = string> {
    /** Map of group IDs to their active variation IDs */
    activeIds: Map<TGroup, TId>;
    /** Set the active variation ID for a group */
    setActiveId: (group: TGroup, variationId: TId) => void;
    /** Internal method to register a variation */
    registerVariation: (group: TGroup, id: TId, label: string, groupLabel: string, parentId?: TId) => void;
    /** Map of variation IDs to their metadata */
    variations: Map<TId, {
        group: TGroup;
        label: string;
        groupLabel: string;
        parentId?: TId;
    }>;
    /** Tree representation of active variations */
    activeTree: VariationNode<TGroup, TId> | null;
    disableQueryString: boolean;
}
export interface VariationsStateContextType<TState = unknown> {
    /** Get the current state */
    state: TState;
    /** Update the state */
    setState: (updater: (prev: TState) => TState) => void;
}
