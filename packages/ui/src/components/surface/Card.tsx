import { type HTMLAttributes } from "react";
import { surfaceRecipe } from "../../recipes/surface";
import { cn } from "../../utils/cn";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        surfaceRecipe({ elevation: "md" }),
        "p-6 transition-all hover:border-border-strong hover:bg-surface-2",
        className,
      )}
      {...props}
    />
  );
}
