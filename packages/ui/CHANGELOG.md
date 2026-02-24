# @openforgelabs/rainbow-ui

## 2.0.5

### Patch Changes

- 42fc40f: Fix modal and switch UX regressions in `rainbow-ui`.

  - Fix `ConfirmActionModal` to pass `children` to `Modal`, resolving TypeScript errors with `ModalProps`.
  - Improve `Switch` visual behavior across themes:
    - Keep track background neutral when active.
    - Center thumb vertically in all states.
    - Improve active thumb contrast and right-edge spacing.
    - Add clearer disabled interaction styling.

## 2.0.4

### Patch Changes

- f780bd5: Fix duplicated description text in `ConfirmActionModal`.

  - Remove duplicate description rendering from modal body.
  - Keep a single source of description content in the modal header.

## 2.0.3

### Patch Changes

- c98fb61: Add theme-aware custom scrollbar styling via semantic tokens.

  - Introduce a `custom-scrollbar` utility in `semantics.css`.
  - Make scrollbar track transparent and reduce scrollbar thickness.
  - Style scrollbar thumb with token-based colors so it adapts to the active theme.

## 2.0.2

### Patch Changes

- b901e84: Fixes and hardening for Design System runtime behavior in host and iframe consumers.

  - Fixed `SegmentedControl` return typing to avoid `Cannot find namespace 'JSX'` in consumer TypeScript builds.
  - Fixed `Modal` layering behavior by rendering through a portal (`document.body`) and moving modal structural styles to semantic CSS classes, so the dialog no longer renders inline when host Tailwind content scanning misses utility classes.
  - Hardened `HostedThemeBridge` message handling:
    - keeps strict origin allowlist behavior
    - validates message shape
    - accepts optional token payloads and sanitizes token keys/values before applying
    - removes stale token overrides when payload changes
  - Simplified package `themes.css` to the base fallback token contract (`:root`) so theme catalogs can be owned by host applications (shell registry) without UI package republishing.

## 2.0.1

### Patch Changes

- dc480cb: Fixes and hardening for the Design System runtime and integrations.

  - Fixed `SegmentedControl` return typing to avoid `Cannot find namespace 'JSX'` in consumer TypeScript builds.
  - Hardened `HostedThemeBridge` message handling:
    - keeps strict origin allowlist behavior
    - validates message shape
    - accepts optional token payloads and sanitizes token keys/values before applying
    - removes stale token overrides when payload changes
  - Simplified `themes.css` in the package to only include the base fallback token contract (`:root`).
    Theme catalogs are now expected to be owned by host applications (for example, shell theme registry), while the UI package remains the stable semantic-token contract.

## 2.0.0

### Major Changes

- 46141a1: Full Design System reset with breaking API and architecture updates.

  ### Breaking changes

  - Reorganized source architecture into `foundations`, `recipes`, `components`, `integrations`, and `utils`.
  - Replaced legacy `Button` variants (`primary|secondary|...`) with recipe-driven API:
    - `variant`: `solid | outline | ghost`
    - `tone`: `primary | accent | neutral | success | warning | danger`
    - `size`: `sm | md | lg`
  - `Modal` now requires `onClose` and enforces dialog accessibility semantics.
  - `HostedThemeBridge` now supports origin allowlist validation via `allowedOrigins`.
  - `Input`, `Textarea`, `Select`, and `SearchInput` now expose normalized `size` and `state` API.

  ### Added

  - Typed `recipe()` helper with support for `base`, `variants`, `defaultVariants`, and `compoundVariants`.
  - Shared recipes (`button`, `control`, `badge`, `surface`, `toast`).
  - Accessible `IconButton` API enforcing accessible name (`aria-label` or `label`).
  - Accessibility upgrades across Modal, ToastProvider, SegmentedControl, and FormField.
  - Hardened theme-bridge message validation and origin checks.

  ### Internal

  - Removed legacy `primitives`, `host`, and previous component layout.
  - Re-export surface updated through `src/index.ts` to match new component paths.

## 1.1.0

### Minor Changes

- 8474d6e: Update theme palettes and preview for Rainbow UI.

## 1.0.3

### Patch Changes

- 6c22125: Replace focus:ring-ring utilities with explicit ring color and remove @apply usage in semantics styles for Tailwind v4.

## 1.0.2

### Patch Changes

- 1815363: Replace focus:ring-ring utilities with explicit ring color to align with Tailwind v4.

## 1.0.1

### Patch Changes

- 0f30f13: Fix tailwind preset ringColor so `focus:ring-ring` utilities compile correctly.

## 1.0.0

### Major Changes

- 8aa9011: Rainbow Design System v1: new token contract, canonical themes, semantic utilities, and tailwind preset rewrite.
