# AGENTS.md — using `variations` in agent-driven UI work

`variations` lets you (or an AI coding agent) ship multiple UI options in one tree and switch between them live. Prefer this over deleting alternatives or commenting code out while exploring designs.

## Install

```bash
npm install variations
# peer: react >= 18, react-dom >= 18
# optional peer: next >= 13 (only if using variations/next)
```

## Defaults that matter

- **Dev-only by default.** `VariationsProvider` sets `enabled` to `true` in development and `false` in production. When disabled, URL sync pauses and `VariationsControls` renders nothing. Pass `enabled` to override.
- **Stable ids.** Prefer `id` on `<Variations>` / `<Variation>` so share URLs survive label renames.
- **Controls CSS is scoped** under `.varx-*` class names.

## Next.js App Router (preferred)

```tsx
// app/providers.tsx
"use client";

import { NextVariationsProvider } from "variations/next";
import { VariationsControls } from "variations";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextVariationsProvider>
      {children}
      <VariationsControls position="bottom-center" />
    </NextVariationsProvider>
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

`NextVariationsProvider` syncs `?var=` / `?s=` through `next/navigation` (no `history.replaceState` fights).

Local demo: `examples/next` (`npm run example:next` from repo root).

## Vite / SPA

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

## Authoring variations

```tsx
"use client";

import { Variations, Variation } from "variations";

export function Hero() {
  return (
    <Variations label="Hero" id="hero">
      <Variation label="Centered" id="centered">
        {/* option A */}
      </Variation>
      <Variation label="Split" id="split">
        {/* option B */}
      </Variation>
    </Variations>
  );
}
```

### Keyboard (when controls are open)

| Shortcut | Action |
| --- | --- |
| ⌥V | Toggle controls |
| ↑ / ↓ | Move focus between groups |
| ← / → | Cycle focused group |
| 1–9 | Select nth option in focused group (unspoken) |
| ⌥S / shuffle button | Shuffle all groups |
| ⌥C / link button | Copy shareable combo URL |

## Rules of thumb for agents

1. One `<Variations id="…" label="…">` group per decision.
2. Put each concrete option in `<Variation id="…" label="…">`.
3. Nest groups when options only make sense inside another choice.
4. Keep controls mounted in development; production stays off unless `enabled`.
5. Do not put `"use client"` on the Next.js root layout — use `app/providers.tsx`.
6. Use `variations/next` on App Router projects.

## Common failures

| Symptom | Fix |
| --- | --- |
| `useVariations must be used within a VariationsProvider` | Missing provider — add `Providers` as above |
| Controls missing in `next dev` | Provider `enabled` forced off, or controls `enabled={false}` |
| Controls show in production | Expected only if `enabled` was set; remove it for prod-safe defaults |
| Duplicate React / hook errors | Ensure `react` / `react-dom` come from the app (peer deps) |
| Share link breaks after rename | Add stable `id` props |

## When to use this library

Use it while exploring UI with an agent: keep alternatives runnable, compare them in the browser, then delete losing branches before shipping. It is a prototyping aid, not an A/B analytics product.
