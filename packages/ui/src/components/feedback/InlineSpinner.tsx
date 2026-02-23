import { type HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type InlineSpinnerProps = HTMLAttributes<HTMLDivElement>;

export function InlineSpinner({ className, ...props }: InlineSpinnerProps) {
  return (
    <div
      className={cn(
        "h-4 w-4 animate-spin rounded-full border-2 border-border-subtle border-t-foreground",
        className,
      )}
      {...props}
    />
  );
}
