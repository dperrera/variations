/** Stable markers so Variation/Variations identity survives Next.js bundling. */
export const VARIATION_TYPE = "Variation" as const;
export const VARIATIONS_TYPE = "Variations" as const;

export type VariationsComponentType =
  | typeof VARIATION_TYPE
  | typeof VARIATIONS_TYPE;

export function getVariationsType(
  type: unknown
): VariationsComponentType | null {
  if (typeof type !== "function" && (typeof type !== "object" || type === null)) {
    return null;
  }
  const marker = (type as { __variationsType?: VariationsComponentType })
    .__variationsType;
  return marker === VARIATION_TYPE || marker === VARIATIONS_TYPE ? marker : null;
}
