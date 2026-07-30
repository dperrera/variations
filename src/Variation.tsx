"use client";
import { useEffect, useMemo } from "react";
import { useVariations } from "./VariationsProvider";
import { createSafeId } from "./utils";
import { VARIATION_TYPE } from "./markers";
import type { VariationProps } from "./types";

type VariationComponent = ((
  props: VariationProps & {
    group?: string;
    groupLabel?: string;
    parentId?: string;
    id?: string;
  }
) => React.ReactNode) & {
  __variationsType: typeof VARIATION_TYPE;
};

export const Variation: VariationComponent = Object.assign(
  function Variation({
    label,
    children,
    ...internalProps
  }: VariationProps & {
    group?: string;
    groupLabel?: string;
    parentId?: string;
    id?: string;
  }) {
    const { group = "", id, groupLabel, parentId } = internalProps;
    const generatedId = useMemo(() => id || createSafeId(label), [id, label]);
    const { activeIds, registerVariation } = useVariations();
    const isActive = activeIds.get(group) === generatedId;

    useEffect(() => {
      if (!group) {
        console.error(
          `Variation Component Error: No group provided for variation "${label}"\n\n` +
            "This usually means one of two things:\n" +
            "1. The Variation is not wrapped in a <Variations> component\n" +
            "2. VariationsProvider is missing from your app tree\n\n" +
            "To fix this, wrap Variation in Variations inside a VariationsProvider:\n" +
            `   <VariationsProvider>\n` +
            `     <Variations label="My Variations">\n` +
            `       <Variation label="${label}">\n` +
            "         {children}\n" +
            "       </Variation>\n" +
            "     </Variations>\n" +
            "   </VariationsProvider>\n\n" +
            "In Next.js App Router, put VariationsProvider in a Client Component\n" +
            '(e.g. app/providers.tsx with "use client") and wrap your layout children.'
        );
        return;
      }

      registerVariation(
        group,
        generatedId,
        label,
        groupLabel || group,
        parentId
      );
    }, [group, generatedId, label, groupLabel, parentId, registerVariation]);

    if (!isActive) return null;
    return <>{children}</>;
  },
  { __variationsType: VARIATION_TYPE }
);
