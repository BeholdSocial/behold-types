# Behold feed types

[![Behold](https://img.shields.io/badge/Behold-ccf5a3.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM0IDI0Ij48cGF0aCBkPSJNMzMuNywxMC43QzMwLjcsNC40LDI0LjQsMCwxNywwLDkuNiwwLDMuMiw0LjQuMywxMC44Yy0uNC44LS40LDEuNywwLDIuNSwzLDYuMyw5LjQsMTAuNywxNi44LDEwLjcsNy40LDAsMTMuOC00LjQsMTYuNy0xMC44LjQtLjguNC0xLjcsMC0yLjVoMFpNMjMuNiwxMi41bC00LDIuMi0yLjIsNGMtLjIuNC0uNy40LS45LDBsLTIuMi00LTQtMi4yYy0uNC0uMi0uNC0uNywwLTFsNC0yLjIsMi4yLTRjLjItLjQuNy0uNC45LDBsMi4yLDQsNCwyLjJjLjQuMi40LjcsMCwxWiIgZmlsbD0iIzE5MTkxOSIvPjwvc3ZnPg==)](https://behold.so)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

This package contains types for Behold JSON feeds

## Installation

```bash
# Install
npm install @behold/types

# or
pnpm add @behold/types

# or
yarn add @behold/types
```

## Usage

### Individual Imports

```tsx
import type {
  Feed,
  Post,
  ChildPost,
  PostSizes,
  PostSize,
  ColorPalette,
  RGBString,
} from "@behold/types"

const instaFeed: Feed = ...
```

### Namespaced

```tsx
import type * as Behold from "@behold/types"

const instaFeed: Behold.Feed = ...
```
