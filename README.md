![Variations](variations.png)

Rapid UI prototyping for React — keep multiple design options in the tree and switch between them live. Works with **Next.js App Router**, Vite, and other React apps. See [AGENTS.md](./AGENTS.md) for agent-oriented setup, or [examples/next](./examples/next) for a runnable App Router demo.

## Install

```bash
npm install variations
# peerDependencies: react >= 18, react-dom >= 18
# optional: next >= 13 when using variations/next
```

## Quick start (Next.js App Router)

Keep `app/layout.tsx` as a Server Component. Use `NextVariationsProvider` so query sync goes through the App Router:

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
// app/layout.tsx
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

Author options with **stable ids** (labels can change later without breaking share links):

```tsx
"use client";

import { Variations, Variation } from "variations";

export default function Hero() {
  return (
    <Variations label="Hero" id="hero">
      <Variation label="Centered" id="centered">
        <section>…</section>
      </Variation>
      <Variation label="Split" id="split">
        <section>…</section>
      </Variation>
    </Variations>
  );
}
```

### Dev-only by default

`enabled` defaults to **on in development** and **off in production**. When off, URL sync pauses and `VariationsControls` renders nothing. Override with `enabled` / `enabled={false}` on the provider or controls.

### Keyboard

| Shortcut | Action |
| --- | --- |
| ⌥V | Toggle controls |
| 1–9 | Select nth option in focused group |
| `[` / `]` | Focus previous / next group |
| ← / → | Cycle focused group |
| ⌥S | Shuffle all groups |
| ⌥C | Copy shareable combo URL |

### Vite / SPA

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

## URL sharing

Active variations (and optional global state) sync to the query string when enabled:

```
/?var=hero.centered_cta.solid&s=base64_encoded_state
```

- `.` separates group from variation id
- `_` separates groups
- `s` is base64 JSON for `useVariationsState`

Copy always works from the panel (⌥C), even when URL sync is disabled. Disable sync with `disableQueryString` or by turning `enabled` off.

Custom sync (any router):

```tsx
<VariationsProvider
  urlSync={{
    getQuery: () => window.location.search,
    setQuery: (query) => {
      const url = query ? `${pathname}?${query}` : pathname;
      window.history.replaceState({}, "", url);
    },
  }}
>
  {children}
</VariationsProvider>
```

## Nested variations

```tsx
<Variations label="Layout" id="layout" isRoot>
  <Variation label="Sidebar" id="sidebar">
    <Variations label="Theme" id="theme">
      <Variation label="Light" id="light">…</Variation>
      <Variation label="Dark" id="dark">…</Variation>
    </Variations>
  </Variation>
  <Variation label="Top Nav" id="topnav">…</Variation>
</Variations>
```

## API

### `VariationsProvider` / `NextVariationsProvider`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | — | App tree |
| `enabled` | `boolean` | `NODE_ENV !== "production"` | Master switch for URL sync + default controls visibility |
| `disableQueryString` | `boolean` | `false` | Disable URL sync while leaving the rest on |
| `initialState` | `TState` | — | Seed for `useVariationsState` |
| `urlSync` | `UrlSyncAdapter` | `history` | Custom query read/write (App Router: use `variations/next`) |

### `Variations`

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | — | Group label in the controls |
| `id` | `string` | slug of `label` (or `"root"`) | Stable group id for URLs / hooks |
| `isRoot` | `boolean` | `false` | Mark the top-level group |
| `children` | `ReactNode` | — | `Variation` nodes (and nested `Variations`) |

### `Variation`

| Prop | Type | Description |
| --- | --- | --- |
| `label` | `string` | Option label |
| `id` | `string` | Stable variation id (defaults to slug of `label`) |
| `children` | `ReactNode` | Rendered when active |

### `VariationsControls`

| Prop | Type | Default |
| --- | --- | --- |
| `position` | `"bottom-center"` \| … | `"bottom-right"` |
| `minimizedByDefault` | `boolean` | `false` |
| `enabled` | `boolean` | provider `enabled` |

Styles are scoped under `.varx-*` to avoid colliding with app CSS.

### Hooks & helpers

- `useVariation(group)` — `{ active, setActive, variations }`
- `useVariations()` — full context
- `useVariationsState<T>()` — global state tuple
- `buildShareUrl({ activeIds, state })` — build a combo link programmatically

## License

MIT © Dan Perrera
