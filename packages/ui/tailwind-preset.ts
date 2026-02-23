import type { Config } from "tailwindcss";

const preset: Config = {
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--rx-color-bg) / <alpha-value>)",
        surface: "rgb(var(--rx-color-surface) / <alpha-value>)",
        "surface-2": "rgb(var(--rx-color-surface-2) / <alpha-value>)",
        "surface-3": "rgb(var(--rx-color-surface-3) / <alpha-value>)",
        control: "rgb(var(--rx-color-control) / <alpha-value>)",
        "control-hover": "rgb(var(--rx-color-control-hover) / <alpha-value>)",
        "control-active": "rgb(var(--rx-color-control-active) / <alpha-value>)",

        foreground: "rgb(var(--rx-color-text) / <alpha-value>)",
        "muted-foreground": "rgb(var(--rx-color-text-muted) / <alpha-value>)",
        subtle: "rgb(var(--rx-color-text-subtle) / <alpha-value>)",
        "primary-foreground": "rgb(var(--rx-color-text-on-primary) / <alpha-value>)",
        "accent-foreground": "rgb(var(--rx-color-text-on-accent) / <alpha-value>)",
        "danger-foreground": "rgb(var(--rx-color-text-on-danger) / <alpha-value>)",
        "success-foreground": "rgb(var(--rx-color-text-on-success) / <alpha-value>)",
        "warning-foreground": "rgb(var(--rx-color-text-on-warning) / <alpha-value>)",

        border: "rgb(var(--rx-color-border) / <alpha-value>)",
        "border-subtle": "rgb(var(--rx-color-border-subtle) / <alpha-value>)",
        "border-strong": "rgb(var(--rx-color-border-strong) / <alpha-value>)",
        divider: "rgb(var(--rx-color-divider) / <alpha-value>)",
        ring: "rgb(var(--rx-color-ring) / <alpha-value>)",
        focus: "rgb(var(--rx-color-focus) / <alpha-value>)",

        primary: "rgb(var(--rx-color-primary) / <alpha-value>)",
        "primary-hover": "rgb(var(--rx-color-primary-hover) / <alpha-value>)",
        "primary-active": "rgb(var(--rx-color-primary-active) / <alpha-value>)",

        accent: "rgb(var(--rx-color-accent) / <alpha-value>)",
        "accent-hover": "rgb(var(--rx-color-accent-hover) / <alpha-value>)",
        "accent-active": "rgb(var(--rx-color-accent-active) / <alpha-value>)",

        success: "rgb(var(--rx-color-success) / <alpha-value>)",
        "success-hover": "rgb(var(--rx-color-success-hover) / <alpha-value>)",
        warning: "rgb(var(--rx-color-warning) / <alpha-value>)",
        "warning-hover": "rgb(var(--rx-color-warning-hover) / <alpha-value>)",
        danger: "rgb(var(--rx-color-danger) / <alpha-value>)",
        "danger-hover": "rgb(var(--rx-color-danger-hover) / <alpha-value>)",
        info: "rgb(var(--rx-color-info) / <alpha-value>)",

        "viz-1": "rgb(var(--rx-color-viz-1) / <alpha-value>)",
        "viz-2": "rgb(var(--rx-color-viz-2) / <alpha-value>)",
        "viz-3": "rgb(var(--rx-color-viz-3) / <alpha-value>)",
        "viz-4": "rgb(var(--rx-color-viz-4) / <alpha-value>)",
        "viz-5": "rgb(var(--rx-color-viz-5) / <alpha-value>)",
        "viz-6": "rgb(var(--rx-color-viz-6) / <alpha-value>)",
        "viz-7": "rgb(var(--rx-color-viz-7) / <alpha-value>)",
        "viz-8": "rgb(var(--rx-color-viz-8) / <alpha-value>)",
      },
    },
  },
};

export default preset;
