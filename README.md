# Behold feed types

[![Behold](https://img.shields.io/badge/Behold-e8ebd7.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI1IDI1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNSAyNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGZpbGw9IiMzY2E1NjYiIGQ9Ik0xMi41LDYuOGMwLjgsMCwxLjgsMC4xLDIuOCwwLjNjMS4zLDAuMywyLjQsMS4zLDIuNiwyLjZjMC4yLDEsMC4zLDEuOSwwLjMsMi44YzAsMC45LTAuMSwxLjktMC4zLDIuOQoJYy0wLjMsMS4zLTEuMywyLjMtMi42LDIuNmMtMSwwLjItMiwwLjQtMi44LDAuNGMtMC45LDAtMS45LTAuMS0zLTAuNGMtMS4xLTAuMy0yLTEuMi0yLjMtMi4zYy0wLjMtMS4xLTAuNC0yLjEtMC40LTMKCWMwLTAuOCwwLjEtMS44LDAuMy0yLjhjMC4zLTEuMywxLjMtMi40LDIuNi0yLjZDMTAuNyw2LjksMTEuNyw2LjgsMTIuNSw2LjggTTEyLjUsMC41Yy0xLjQsMC0yLjgsMC4yLTQsMC41QzQuNywxLjcsMS44LDQuNiwxLDguNAoJYy0wLjMsMS4zLTAuNSwyLjctMC41LDQuMWMwLDEuNiwwLjIsMy4xLDAuNiw0LjVjMC44LDMuNCwzLjUsNi4xLDYuOSw3YzEuNCwwLjMsMi45LDAuNiw0LjUsMC42YzEuNSwwLDIuOS0wLjIsNC4yLTAuNQoJYzMuNy0wLjgsNi41LTMuNyw3LjMtNy40YzAuMy0xLjMsMC41LTIuNywwLjUtNC4yYzAtMS40LTAuMi0yLjgtMC40LTRjLTAuOC0zLjgtMy43LTYuNi03LjUtNy40QzE1LjMsMC43LDEzLjksMC41LDEyLjUsMC41CglMMTIuNSwwLjV6Ii8+Cjwvc3ZnPgo=)](https://behold.so)
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
