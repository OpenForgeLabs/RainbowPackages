---
"@openforgelabs/rainbow-ui": patch
---

Fixes and hardening for Design System runtime behavior in host and iframe consumers.

- Fixed `SegmentedControl` return typing to avoid `Cannot find namespace 'JSX'` in consumer TypeScript builds.
- Fixed `Modal` layering behavior by rendering through a portal (`document.body`) and moving modal structural styles to semantic CSS classes, so the dialog no longer renders inline when host Tailwind content scanning misses utility classes.
- Hardened `HostedThemeBridge` message handling:
  - keeps strict origin allowlist behavior
  - validates message shape
  - accepts optional token payloads and sanitizes token keys/values before applying
  - removes stale token overrides when payload changes
- Simplified package `themes.css` to the base fallback token contract (`:root`) so theme catalogs can be owned by host applications (shell registry) without UI package republishing.
