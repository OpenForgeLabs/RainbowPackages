import { recipe } from "./recipe";

export type ButtonVariant = "solid" | "outline" | "ghost";
export type ButtonTone =
  | "primary"
  | "accent"
  | "neutral"
  | "success"
  | "warning"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export const buttonRecipe = recipe({
  base: "ui-focus inline-flex items-center justify-center gap-2 rounded-[var(--rx-radius-md)] border font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 [&_.material-symbols-outlined]:align-middle [&_.material-symbols-outlined]:leading-none",
  variants: {
    variant: {
      solid: "",
      outline: "bg-transparent",
      ghost: "border-transparent bg-transparent shadow-none",
    },
    tone: {
      primary: "",
      accent: "",
      neutral: "",
      success: "",
      warning: "",
      danger: "",
    },
    size: {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-5 text-base",
    },
  },
  defaultVariants: {
    variant: "solid",
    tone: "primary",
    size: "md",
  },
  compoundVariants: [
    {
      variant: "solid",
      tone: "primary",
      className:
        "border-transparent bg-primary text-primary-foreground shadow-[var(--rx-shadow-sm)] hover:bg-primary-hover active:bg-primary-active",
    },
    {
      variant: "solid",
      tone: "accent",
      className:
        "border-transparent bg-accent text-accent-foreground shadow-[var(--rx-shadow-sm)] hover:bg-accent-hover active:bg-accent-active",
    },
    {
      variant: "solid",
      tone: "neutral",
      className:
        "border-transparent bg-surface-3 text-foreground shadow-[var(--rx-shadow-sm)] hover:bg-control-hover active:bg-control-active",
    },
    {
      variant: "solid",
      tone: "success",
      className:
        "border-transparent bg-success text-success-foreground shadow-[var(--rx-shadow-sm)] hover:bg-success-hover",
    },
    {
      variant: "solid",
      tone: "warning",
      className:
        "border-transparent bg-warning text-warning-foreground shadow-[var(--rx-shadow-sm)] hover:bg-warning-hover",
    },
    {
      variant: "solid",
      tone: "danger",
      className:
        "border-transparent bg-danger text-danger-foreground shadow-[var(--rx-shadow-sm)] hover:bg-danger-hover",
    },

    {
      variant: "outline",
      tone: "primary",
      className: "border-primary text-primary hover:bg-primary/10 active:bg-primary/20",
    },
    {
      variant: "outline",
      tone: "accent",
      className: "border-accent text-accent hover:bg-accent/10 active:bg-accent/20",
    },
    {
      variant: "outline",
      tone: "neutral",
      className:
        "border-border bg-surface-2 text-foreground hover:border-border-strong hover:bg-surface-3",
    },
    {
      variant: "outline",
      tone: "success",
      className: "border-success text-success hover:bg-success/10 active:bg-success/20",
    },
    {
      variant: "outline",
      tone: "warning",
      className: "border-warning text-warning hover:bg-warning/10 active:bg-warning/20",
    },
    {
      variant: "outline",
      tone: "danger",
      className: "border-danger text-danger hover:bg-danger/10 active:bg-danger/20",
    },

    {
      variant: "ghost",
      tone: "primary",
      className: "text-primary hover:bg-primary/10 active:bg-primary/20",
    },
    {
      variant: "ghost",
      tone: "accent",
      className: "text-accent hover:bg-accent/10 active:bg-accent/20",
    },
    {
      variant: "ghost",
      tone: "neutral",
      className: "text-foreground hover:bg-surface-2 active:bg-surface-3",
    },
    {
      variant: "ghost",
      tone: "success",
      className: "text-success hover:bg-success/10 active:bg-success/20",
    },
    {
      variant: "ghost",
      tone: "warning",
      className: "text-warning hover:bg-warning/10 active:bg-warning/20",
    },
    {
      variant: "ghost",
      tone: "danger",
      className: "text-danger hover:bg-danger/10 active:bg-danger/20",
    },
  ],
});
