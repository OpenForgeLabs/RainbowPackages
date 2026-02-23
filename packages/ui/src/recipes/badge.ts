import { recipe } from "./recipe";

export const badgeRecipe = recipe({
  base: "inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
  variants: {
    tone: {
      neutral: "border-border-subtle bg-surface-2 text-muted-foreground",
      primary: "border-primary/40 bg-primary/10 text-primary",
      accent: "border-accent/40 bg-accent/10 text-accent",
      success: "border-success/40 bg-success/10 text-success",
      warning: "border-warning/40 bg-warning/10 text-warning",
      danger: "border-danger/40 bg-danger/10 text-danger",
      info: "border-info/40 bg-info/10 text-info",
    },
  },
  defaultVariants: {
    tone: "neutral",
  },
});
