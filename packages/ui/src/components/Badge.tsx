import type { HTMLAttributes } from "react";
import { badgeRecipe } from "../recipes/badge";
import { cn } from "../utils/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "primary" | "accent" | "success" | "warning" | "danger" | "info";
};

const variantToTone = {
  default: "neutral",
  primary: "primary",
  accent: "accent",
  success: "success",
  warning: "warning",
  danger: "danger",
  info: "info",
} as const;

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  return <span className={cn(badgeRecipe({ tone: variantToTone[variant] }), className)} {...props} />;
}
