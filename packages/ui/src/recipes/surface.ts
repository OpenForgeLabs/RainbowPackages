import { recipe } from "./recipe";

export const surfaceRecipe = recipe({
  base: "rounded-[var(--rx-radius-lg)] border border-border bg-surface text-foreground",
  variants: {
    elevation: {
      low: "shadow-[var(--rx-shadow-xs)]",
      md: "shadow-[var(--rx-shadow-md)]",
      high: "shadow-[var(--rx-shadow-lg)]",
    },
  },
  defaultVariants: {
    elevation: "md",
  },
});
