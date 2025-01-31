"use client";
import { useEffect, useMemo } from "react";
import { useVariations } from "./VariationsProvider";
import { InternalVariationProps } from "./internal-types";
import { createSafeId } from "./utils";

export function Variation({
  group = "",
  label,
  id,
  groupLabel,
  parentId,
  children,
}: InternalVariationProps) {
  const generatedId = useMemo(() => id || createSafeId(label), [id, label]);
  const { activeIds, registerVariation } = useVariations();
  const isActive = activeIds.get(group) === generatedId;

  useEffect(() => {
    if (!group) {
      console.error(
        `Variation Component Error: No group provided for variation "${label}"\n\n` +
          "This usually means one of two things:\n" +
          '1. You forgot to add "use client" at the top of your page component\n' +
          "2. The Variation component is not wrapped in a Variations component\n\n" +
          "To fix this:\n" +
          '1. Add "use client" as the first line of your page component:\n' +
          '   "use client";\n' +
          "   export default function Page() { ... }\n\n" +
          "2. Make sure your Variation is wrapped in a Variations component:\n" +
          `   <Variations label="My Variations">\n` +
          `     <Variation label="${label}">\n` +
          "       {children}\n" +
          "     </Variation>\n" +
          "   </Variations>"
      );
      return;
    }

    registerVariation(group, generatedId, label, groupLabel || group, parentId);
  }, [group, generatedId, label, groupLabel, parentId, registerVariation]);

  if (!isActive) return null;
  return <>{children}</>;
}
