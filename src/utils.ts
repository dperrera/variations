export function createSafeId(label: string): string {
  return label
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "");
}

export function isDevEnvironment(): boolean {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const env = (globalThis as any)?.process?.env?.NODE_ENV;
    if (typeof env === "string") return env !== "production";
  } catch {
    // ignore
  }
  return true;
}

/** Encode active variation map to the `var` query value. */
export function serializeVariationsParam(
  activeIds: Map<string, string> | Iterable<[string, string]>
): string {
  return Array.from(activeIds)
    .map(([group, id]) => `${group}.${id}`)
    .join("_");
}

/** Parse the `var` query value into a Map. */
export function parseVariationsParam(
  value: string | null | undefined
): Map<string, string> {
  if (!value) return new Map();
  try {
    const pairs = value.split("_").map((pair) => {
      const [group, id] = pair.split(".");
      if (!group || !id) throw new Error("Invalid format");
      return [group, id] as [string, string];
    });
    return new Map(pairs);
  } catch {
    return new Map();
  }
}

export function encodeStateParam(state: unknown): string | null {
  if (state === undefined) return null;
  try {
    return btoa(JSON.stringify(state));
  } catch {
    return null;
  }
}

export function decodeStateParam<TState>(value: string | null): TState | null {
  if (!value) return null;
  try {
    return JSON.parse(atob(value)) as TState;
  } catch {
    return null;
  }
}

export function toSearchParams(
  input: string | URLSearchParams
): URLSearchParams {
  return typeof input === "string" ? new URLSearchParams(input) : input;
}

/** Build a shareable URL for the current variation combo (and optional state). */
export function buildShareUrl(options: {
  activeIds: Map<string, string>;
  state?: unknown;
  includeState?: boolean;
  baseUrl?: string;
}): string {
  const {
    activeIds,
    state,
    includeState = true,
    baseUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}`
        : "",
  } = options;

  const params = new URLSearchParams();
  const varValue = serializeVariationsParam(activeIds);
  if (varValue) params.set("var", varValue);

  if (includeState && state !== undefined) {
    const encoded = encodeStateParam(state);
    if (encoded) params.set("s", encoded);
  }

  const query = params.toString();
  return query ? `${baseUrl}?${query}` : baseUrl;
}
