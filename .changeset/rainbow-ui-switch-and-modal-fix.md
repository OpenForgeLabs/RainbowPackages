---
"@openforgelabs/rainbow-ui": patch
---

Fix modal and switch UX regressions in `rainbow-ui`.

- Fix `ConfirmActionModal` to pass `children` to `Modal`, resolving TypeScript errors with `ModalProps`.
- Improve `Switch` visual behavior across themes:
  - Keep track background neutral when active.
  - Center thumb vertically in all states.
  - Improve active thumb contrast and right-edge spacing.
  - Add clearer disabled interaction styling.
