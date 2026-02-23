# Rainbow Packages

[![Design System](https://img.shields.io/badge/Design%20System-rainbow--ui-0ea5e9)](./packages/ui)
[![Donate](https://img.shields.io/badge/Donate-PayPal-00457C?logo=paypal&logoColor=white)](https://paypal.me/JuanTellezRojas)

Shared packages powering the Rainbow ecosystem.

This repo contains the reusable building blocks used by:
- `RainbowExplorer` (shell host)
- `rainbow-redis` (Redis plugin)

## What is here
- `@openforgelabs/rainbow-ui`: design system (tokens, recipes, a11y components).
- `@openforgelabs/rainbow-contracts`: shared contracts and types.
- `@openforgelabs/rainbow-connections`: connection registry primitives.

## Why use it
- Token-first theming and consistent UI behavior.
- Strong typing across shell + plugins.
- Production-ready primitives for plugin ecosystems.

## Development
```bash
pnpm install
pnpm build
pnpm test
```

## Release model
Package publishing is handled with Changesets + GitHub workflows.

```bash
pnpm changeset
```

## Ecosystem
- Shell host: `../RainbowExplorer`
- Redis plugin: `../rainbow-redis`

## Licensing
This project is **source-available** under the PolyForm Noncommercial 1.0.0 license.

That means:
- Free use for personal, educational, and internal non-commercial scenarios.
- Commercial use or resale is not allowed without a separate commercial agreement.

See `LICENSE` for details.

## Support
If this software saves you time, donations are welcome:

[![PayPal](https://img.shields.io/badge/Donate%20via%20PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/JuanTellezRojas)
