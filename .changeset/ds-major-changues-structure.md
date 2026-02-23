---
"@openforgelabs/rainbow-ui": major
---

Full Design System reset with breaking API and architecture updates.

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
