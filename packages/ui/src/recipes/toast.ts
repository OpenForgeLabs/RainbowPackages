import { recipe } from "./recipe";

export const toastRecipe = recipe({
  base: "pointer-events-auto relative rounded-[var(--rx-radius-md)] border px-4 py-3 text-sm shadow-[var(--rx-shadow-sm)]",
  variants: {
    tone: {
      success: "border-success bg-success/10 text-success",
      error: "border-danger bg-danger/10 text-danger",
      info: "border-border bg-surface text-foreground",
    },
  },
  defaultVariants: {
    tone: "info",
  },
});
