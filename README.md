# Variations

![Variations](variations.png)

A React component library that enables rapid prototyping and exploration of UI variations.

## Installation

```bash
npm install variations
# or
yarn add variations
# or
pnpm add variations
```

## Setup

### Provider and Controls Setup

Wrap your application with the `VariationsProvider` at the root level. The `VariationControls` component provides a UI for switching between different variations in your app. You can style it or position it as needed.:

```tsx
"use client";
import { VariationsProvider, VariationsControls } from "variations";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <VariationsProvider>
      {children}
      <VariationsControls position="bottom-center" />
    </VariationsProvider>
  );
}
```

By default, variations are saved to and loaded from the URL query string so that you can share variations with others. You can disable this behavior by setting `disableQueryString` to `true`:

```tsx
<VariationsProvider disableQueryString={true}>
  {children}
  <VariationsControls position="bottom-center" />
</VariationsProvider>
```

The URL query string uses a clean, readable format:

```
http://localhost:3000/?var=group.id_group.id_group.id
```

For example:

```
http://localhost:3000/?var=root.login-page_login-form.option-2_email-form.show
```

Where:

- `.` separates a group from its ID (e.g., `login-form.option-2`)
- `_` separates different variations (e.g., `login-form.option-2_email-form.show`)

This format is URL-safe (no encoding needed) and makes it easy to share specific variation combinations with others.

Note for Next.js users: Variations requires the `"use client"` directive to be present in the root component.

## Usage

### Basic Example

```tsx
"use client";

import { Variations, Variation } from "variations";

export default function MyComponent() {
  return (
    <Variations label="Button Styles">
      <Variation label="Primary">
        <button className="bg-blue-500 text-white">Click me</button>
      </Variation>

      <Variation label="Secondary">
        <button className="bg-gray-500 text-white">Click me</button>
      </Variation>
    </Variations>
  );
}
```

### Nested Variations

You can create nested variations to explore combinations of different components:

```tsx
<Variations label="Layout">
  <Variation label="Sidebar">
    <div className="flex">
      <Variations label="Theme">
        <Variation label="Light">
          <div className="bg-white">{/* Content */}</div>
        </Variation>
        <Variation label="Dark">
          <div className="bg-gray-900">{/* Content */}</div>
        </Variation>
      </Variations>
    </div>
  </Variation>

  <Variation label="Top Nav">
    <div className="flex flex-col">{/* Similar nested variations */}</div>
  </Variation>
</Variations>
```

## API Reference

### VariationsProvider

The root component that manages a set of variations.

Props:

- `children`: React nodes containing Variation components
- `disableQueryString` (boolean, optional): When true, disables the URL query string functionality. This prevents variations from being saved to or loaded from the URL. Defaults to `false`

### Variations Component

The root component that manages a set of variations.

Props:

- `label` (string): The label for this set of variations
- `isRoot` (boolean, optional): When true, indicates this is the root variations component. Only one root component should exist in the tree. Defaults to `false`
- `children`: React nodes containing Variation components

### Variation Component

The component that wraps each variation.

Props:

- `label` (string): The display name for this variation
- `children`: React nodes to render when this variation is active

### Controls Component

A pre-built UI component that provides a control panel for managing variations.

Props:

- `position` (string, optional): The position of the control panel. Possible values are `bottom-center`, `bottom-left`, `bottom-right`, `middle-left`, `middle-right`, `top-center`, `top-left`, `top-right`. Defaults to `bottom-center`

The Controls component automatically displays all registered variations and allows users to switch between them. It updates in real-time as variations are added or removed from your app. You can show and hide the controls by clicking on the Variations icon or by using the keyboard shortcut `Option + v`. The controls support keyboard navigation or clicking on the controls to switch between variations.

### Hooks

#### useVariation

A hook for managing a single variation group. This is the recommended way to programmatically interact with variations.

```tsx
const { active, setActive, variations } = useVariation("theme");

// active: { id: string; label: string } | null
// The currently active variation or null if none is selected
console.log(active?.label); // e.g. "Light Theme"

// variations: Array<{ id: string; label: string }>
// All available variations for this group
console.log(variations); // e.g. [{ id: 'light', label: 'Light Theme' }, ...]

// setActive: (id: string) => void
// Function to change the active variation
setActive("dark");
```

Example usage with a select element:

```tsx
function ThemeSelector() {
  const { active, setActive, variations } = useVariation("theme");

  return (
    <select
      value={active?.id || ""}
      onChange={(e) => setActive(e.target.value)}
    >
      {variations.map(({ id, label }) => (
        <option
          key={id}
          value={id}
        >
          {label}
        </option>
      ))}
    </select>
  );
}
```

#### useVariations

A lower-level hook that provides full access to the variations context. Use this if you need more control over variations or need to work with multiple groups at once.

```tsx
const {
  // Map of group IDs to their active variation IDs
  activeIds,

  // Function to set the active variation for a group
  setActiveId,

  // Map of all registered variations
  variations,

  // Tree representation of active variations
  activeTree,
} = useVariations();

// Example: Get active variation for a group
const activeThemeId = activeIds.get("theme");

// Example: Set active variation
setActiveId("theme", "dark");

// Example: Get all variations for a group
const themeVariations = Array.from(variations.entries()).filter(
  ([, variation]) => variation.group === "theme"
);
```

For TypeScript users, you can make the hook type-safe by providing group and ID types:

```tsx
type Groups = "theme" | "layout" | "typography";
type Ids = "light" | "dark" | "sidebar" | "topnav";

const { activeIds, setActiveId } = useVariations<Groups, Ids>();
// Now TypeScript will ensure you only use valid group and variation IDs
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Dan Perrera
