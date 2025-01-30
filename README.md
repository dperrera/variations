# Variations

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Dan Perrera
