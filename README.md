# Variations

A React component library that enables rapid prototyping and exploration of UI variations. This library makes it easy to create and manage multiple versions of your UI components, perfect for prototyping.

## Installation

```bash
npm install variations
# or
yarn add variations
# or
pnpm add variations
```

## Features

- 🎨 Create multiple variations of UI components
- 🔄 Easy switching between variations
- 📱 Perfect for prototyping responsive designs
- ⚡️ Built with React and TypeScript
- 🎯 Zero configuration required
- 🌳 Hierarchical variation support

## Usage

### Basic Example

```tsx
"use client"; // Required for Next.js app router
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

### Using Groups

You can organize variations into groups for better organization:

```tsx
<Variations label="Components">
  <Variation
    group="buttons"
    groupLabel="Button Styles"
    label="Primary"
  >
    <button>Primary Button</button>
  </Variation>

  <Variation
    group="buttons"
    groupLabel="Button Styles"
    label="Secondary"
  >
    <button>Secondary Button</button>
  </Variation>
</Variations>
```

## API Reference

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
- `group` (string, optional): Group identifier for related variations
- `groupLabel` (string, optional): Display name for the group
- `id` (string, optional): Custom identifier for the variation
- `parentId` (string, optional): ID of the parent variation for nested variations
- `children`: React nodes to render when this variation is active

### useVariations Hook

A hook to programmatically interact with variations.

```tsx
const { activeIds, setActiveId, variations, activeTree } = useVariations();
```

Returns:

- `activeIds`: Map of active variation IDs by group
- `setActiveId`: Function to programmatically set the active variation
- `variations`: Map of all registered variations
- `activeTree`: Current tree structure of active variations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Dan Perrera
