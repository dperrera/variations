export function createSafeId(label: string): string {
  return label.toLowerCase().replace(/\s+/g, "-");
}
