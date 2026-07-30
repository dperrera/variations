# AGENTS.md — using `variations` in agent-driven UI work

`variations` lets you (or an AI coding agent) ship multiple UI options in one tree and switch between them live. Prefer this over deleting alternatives or commenting code out while exploring designs.

## Install

```bash
npm install variations
# peer: react >= 18, react-dom >= 18
```

## Next.js App Router (required pattern)

Do **not** add `"use client"` to `app/layout.tsx`. Keep the layout a Server Component and isolate the provider:

```tsx
// app/providers.tsx
"use client";

import { VariationsProvider, VariationsControls } from "variations";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <VariationsProvider>
      {children}
      <VariationsControls position="bottom-center" />
    </VariationsProvider>
  );
}
```

```tsx
// app/layout.tsx  — Server Component, no "use client"
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

The published package entry already includes `"use client"`, so importing `variations` into a Client Component boundary is enough. Pages that only render `<Variations>` / `<Variation>` still need `"use client"` (or must live under a client parent) because those components use hooks.

## Vite / CRA / other SPA

Wrap the app root once:

```tsx
import { VariationsProvider, VariationsControls } from "variations";

export function App() {
  return (
    <VariationsProvider>
      <YourApp />
      <VariationsControls position="bottom-center" />
    </VariationsProvider>
  );
}
```

## Authoring variations (do this)

```tsx
"use client";

import { Variations, Variation } from "variations";

export function Hero() {
  return (
    <Variations label="Hero">
      <Variation label="Centered">
        {/* option A */}
      </Variation>
      <Variation label="Split">
        {/* option B */}
      </Variation>
    </Variations>
  );
}
```

Rules of thumb for agents:

1. One `<Variations label="...">` group per decision (layout, theme, CTA copy, density).
2. Put each concrete option in its own `<Variation label="...">`.
3. Nest groups when options only make sense inside another choice.
4. Keep the floating controls mounted in development so humans can flip options without a rebuild.
5. Share a specific combo via the URL (`?var=group.id_group.id`). Disable with `disableQueryString` if needed.
6. Do not put `"use client"` on the Next.js root layout; use `app/providers.tsx`.

## Programmatic control

```tsx
const { active, setActive, variations } = useVariation("hero");
setActive("split");
```

Global scratch state (optional, URL-synced by default):

```tsx
const [state, setState] = useVariationsState<MyState>();
```

## Common failures

| Symptom | Fix |
| --- | --- |
| `useVariations must be used within a VariationsProvider` | Missing provider — add `Providers` as above |
| Controls empty / "No Variations Found" | No `<Variations>` mounted yet, or page is a Server Component without a client boundary |
| Duplicate React / hook errors | Ensure `react` / `react-dom` are peer deps from the app, not nested copies |
| Layout forced to client | Move provider out of `layout.tsx` into `providers.tsx` |

## When to use this library

Use it while exploring UI with an agent: keep alternatives runnable, compare them in the browser, then delete losing branches before shipping. It is a prototyping aid, not an A/B analytics product.
