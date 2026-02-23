import { recipe } from "./recipe";

export type ControlSize = "sm" | "md" | "lg";
export type ControlState = "default" | "invalid";

export const controlRecipe = recipe({
  base: "ui-focus w-full rounded-[var(--rx-radius-md)] border bg-control text-foreground placeholder:text-subtle disabled:cursor-not-allowed disabled:opacity-60",
  variants: {
    size: {
      sm: "h-8 px-2 text-xs",
      md: "h-10 px-3 text-sm",
      lg: "h-12 px-4 text-base",
    },
    state: {
      default: "border-border",
      invalid: "border-danger",
    },
  },
  defaultVariants: {
    size: "md",
    state: "default",
  },
});
