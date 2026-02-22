import type { Config } from "tailwindcss";

const preset: Config = {
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--rx-background) / <alpha-value>)",
        foreground: "rgb(var(--rx-foreground) / <alpha-value>)",
        "surface-dark": "rgb(var(--rx-surface) / <alpha-value>)",
        "surface-2": "rgb(var(--rx-surface-2) / <alpha-value>)",
        "border-dark": "rgb(var(--rx-border) / <alpha-value>)",
        "border-strong": "rgb(var(--rx-border-strong) / <alpha-value>)",
        control: "rgb(var(--rx-control) / <alpha-value>)",
        "control-hover": "rgb(var(--rx-control-hover) / <alpha-value>)",
        primary: "rgb(var(--rx-primary) / <alpha-value>)",
        "primary-strong": "rgb(var(--rx-primary-strong) / <alpha-value>)",
        accent: "rgb(var(--rx-accent) / <alpha-value>)",
        info: "rgb(var(--rx-info) / <alpha-value>)",
        violet: "rgb(var(--rx-violet) / <alpha-value>)",
        pink: "rgb(var(--rx-pink) / <alpha-value>)",
        amber: "rgb(var(--rx-amber) / <alpha-value>)",
        success: "rgb(var(--rx-success) / <alpha-value>)",
        warning: "rgb(var(--rx-warning) / <alpha-value>)",
        danger: "rgb(var(--rx-danger) / <alpha-value>)",
        muted: "rgb(var(--rx-muted) / <alpha-value>)",
        action: "rgb(var(--rx-action) / <alpha-value>)",
        "action-strong": "rgb(var(--rx-action-strong) / <alpha-value>)",
        navigate: "rgb(var(--rx-navigate) / <alpha-value>)",
        "navigate-strong": "rgb(var(--rx-navigate-strong) / <alpha-value>)",
        confirm: "rgb(var(--rx-confirm) / <alpha-value>)",
        "confirm-strong": "rgb(var(--rx-confirm-strong) / <alpha-value>)",
        tag: "rgb(var(--rx-tag) / <alpha-value>)",
      },
    },
  },
};

export default preset;
