"use client";
import React, { useContext, useEffect, useMemo } from "react";
import { VariationsContext } from "./VariationsProvider";
import { getVariationsType, VARIATIONS_TYPE } from "./markers";
import type { VariationProps, VariationsProps } from "./types";
import { createSafeId } from "./utils";

const ROOT_GROUP_ID = "root";

type InternalVariationProps = VariationProps & {
  group?: string;
  groupLabel?: string;
  parentId?: string;
  id?: string;
};

type InternalVariationsProps = VariationsProps & {
  parentId?: string;
  group?: string;
};

function isVariationElement(
  child: React.ReactNode
): child is React.ReactElement<VariationProps> {
  return (
    React.isValidElement<VariationProps>(child) &&
    getVariationsType(child.type) === "Variation" &&
    typeof child.props.label === "string"
  );
}

function isVariationsElement(
  child: React.ReactNode
): child is React.ReactElement<VariationsProps> {
  return (
    React.isValidElement<VariationsProps>(child) &&
    getVariationsType(child.type) === "Variations" &&
    typeof child.props.label === "string"
  );
}

type VariationsComponent = ((
  props: VariationsProps & {
    parentId?: string;
    group?: string;
  }
) => React.ReactNode) & {
  __variationsType: typeof VARIATIONS_TYPE;
};

export const Variations: VariationsComponent = Object.assign(
  function Variations({
    isRoot = false,
    label,
    children,
    ...internalProps
  }: VariationsProps & {
    parentId?: string;
    group?: string;
  }) {
    const { parentId, group: providedGroup } = internalProps;
    const context = useContext(VariationsContext);
    if (!context) {
      throw new Error(
        "Variations component error: No VariationsContext found.\n\n" +
          "Wrap your tree in <VariationsProvider>.\n\n" +
          "Next.js App Router example:\n" +
          '  // app/providers.tsx\n' +
          '  "use client";\n' +
          '  import { VariationsProvider, VariationsControls } from "variations";\n' +
          "  export function Providers({ children }) {\n" +
          "    return (\n" +
          "      <VariationsProvider>\n" +
          "        {children}\n" +
          '        <VariationsControls position="bottom-center" />\n' +
          "      </VariationsProvider>\n" +
          "    );\n" +
          "  }\n\n" +
          "  // app/layout.tsx (Server Component — no \"use client\" needed)\n" +
          '  import { Providers } from "./providers";\n' +
          "  export default function RootLayout({ children }) {\n" +
          "    return <html><body><Providers>{children}</Providers></body></html>;\n" +
          "  }"
      );
    }

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

    const processedChildren = useMemo(() => {
      return React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        if (isVariationElement(child)) {
          const variationId = createSafeId(child.props.label);

          return React.cloneElement<InternalVariationProps>(child, {
            ...child.props,
            group: groupId,
            groupLabel: label,
            id: variationId,
            parentId,
          });
        }

        if (isVariationsElement(child)) {
          const activeVariationId = activeIds.get(groupId);
          const nestedGroupId = createSafeId(child.props.label);

          return React.cloneElement<InternalVariationsProps>(child, {
            ...child.props,
            parentId: activeVariationId,
            group: nestedGroupId,
          });
        }

        return child;
      });
    }, [children, groupId, label, activeIds, parentId]);

    useEffect(() => {
      if (!activeIds.has(groupId)) {
        const groupVariations = variationGroups.get(groupId);
        if (groupVariations && groupVariations.length > 0) {
          const [id] = groupVariations[0];
          setActiveId(groupId, id);
        }
      }
    }, [groupId, variationGroups, activeIds, setActiveId]);

    return <>{processedChildren}</>;
  },
  { __variationsType: VARIATIONS_TYPE }
);
