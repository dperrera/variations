"use client";
import React, { useContext, useEffect, useMemo } from "react";
import { VariationsContext } from "./VariationsProvider";
import { Variation } from "./Variation";
import { createSafeId } from "./utils";
import type { VariationsProps, VariationProps } from "./types";

const ROOT_GROUP_ID = "root-variations";

function isVariationElement(
  child: React.ReactNode
): child is React.ReactElement<VariationProps> {
  return (
    React.isValidElement<VariationProps>(child) &&
    child.type === Variation &&
    typeof child.props.label === "string"
  );
}

export function Variations({
  isRoot = false,
  label,
  children,
  parentId,
  group: providedGroup,
}: VariationsProps) {
  const context = useContext(VariationsContext);
  if (!context) {
    throw new Error(
      "Variations component error: No VariationsContext found.\n\n" +
        "This usually means one of two things:\n" +
        '1. You forgot to add "use client" at the top of your page component\n' +
        "2. The Variations component is not wrapped in a VariationsProvider\n\n" +
        "To fix this:\n" +
        '1. Add "use client" as the first line of your page component:\n' +
        '   "use client";\n' +
        "   export default function Page() { ... }\n\n" +
        "2. Or check that VariationsProvider exists in your app layout"
    );
  }

  // Validate that isRoot is not used in nested variations
  if (isRoot && parentId) {
    throw new Error(
      "Variations component error: Cannot use isRoot in a nested Variations component.\n\n" +
        "The isRoot prop can only be used on the top-level Variations component.\n" +
        "Remove the isRoot prop from any nested Variations components."
    );
  }

  const groupId =
    providedGroup || (isRoot ? ROOT_GROUP_ID : createSafeId(label));

  const { activeIds, setActiveId, variations } = context;

  // Group variations by group
  const variationGroups = useMemo(() => {
    const groups = new Map<
      string,
      Array<[string, { label: string; groupLabel: string }]>
    >();

    Array.from(variations.entries()).forEach(([id, variation]) => {
      const { group, label: variationLabel, groupLabel } = variation;
      if (!groups.has(group)) {
        groups.set(group, []);
      }
      groups.get(group)!.push([id, { label: variationLabel, groupLabel }]);
    });
    return groups;
  }, [variations]);

  // Process children to inject group prop
  const processedChildren = useMemo(() => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        if (child.type === Variation) {
          if (!isVariationElement(child)) {
            throw new Error("Invalid Variation component");
          }

          const variationId = child.props.id || createSafeId(child.props.label);

          return React.cloneElement(child, {
            ...child.props,
            group: groupId,
            groupLabel: label,
            id: variationId,
            parentId,
          });
        } else if (child.type === Variations) {
          const variationsChild = child as React.ReactElement<VariationsProps>;
          const activeVariationId = activeIds.get(groupId);
          const nestedGroupId = createSafeId(variationsChild.props.label);

          return React.cloneElement(variationsChild, {
            ...variationsChild.props,
            parentId: activeVariationId,
            group: nestedGroupId,
          });
        }
      }
      return child;
    });
  }, [children, groupId, label, activeIds, parentId]);

  // Set initial active IDs if needed
  useEffect(() => {
    if (!activeIds.has(groupId)) {
      const variations = variationGroups.get(groupId);
      if (variations && variations.length > 0) {
        const [id] = variations[0];
        setActiveId(groupId, id);
      }
    }
  }, [groupId, variationGroups, activeIds, setActiveId]);

  return <>{processedChildren}</>;
}
