---
"@openforgelabs/rainbow-ui": patch
---

Fixes and hardening for the Design System runtime and integrations.

- Fixed `SegmentedControl` return typing to avoid `Cannot find namespace 'JSX'` in consumer TypeScript builds.
- Hardened `HostedThemeBridge` message handling:
  - keeps strict origin allowlist behavior
  - validates message shape
  - accepts optional token payloads and sanitizes token keys/values before applying
  - removes stale token overrides when payload changes
- Simplified `themes.css` in the package to only include the base fallback token contract (`:root`).
  Theme catalogs are now expected to be owned by host applications (for example, shell theme registry), while the UI package remains the stable semantic-token contract.
