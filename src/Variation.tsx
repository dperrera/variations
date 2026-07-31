"use client";
import { useEffect, useMemo } from "react";
import { useVariations } from "./VariationsProvider";
import { createSafeId } from "./utils";
import { VARIATION_TYPE } from "./markers";
import type { VariationProps } from "./types";

type InternalProps = {
  group?: string;
  groupLabel?: string;
  parentId?: string;
};

type VariationComponent = ((
  props: VariationProps & InternalProps
) => React.ReactNode) & {
  __variationsType: typeof VARIATION_TYPE;
};

export const Variation: VariationComponent = Object.assign(
  function Variation({
    label,
    id,
    children,
    group = "",
    groupLabel,
    parentId,
  }: VariationProps & InternalProps) {
    const generatedId = useMemo(() => id || createSafeId(label), [id, label]);
    const { activeIds, registerVariation } = useVariations();
    const isActive = activeIds.get(group) === generatedId;

    useEffect(() => {
      if (!group) {
        console.error(
          `Variation Component Error: No group provided for variation "${label}"\n\n` +
            "Wrap <Variation> in <Variations> inside a <VariationsProvider>.\n" +
            "Next.js: use app/providers.tsx (or NextVariationsProvider from \"variations/next\")."
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
