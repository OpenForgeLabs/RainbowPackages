import { type HTMLAttributes } from "react";

type InlineSpinnerProps = HTMLAttributes<HTMLDivElement>;

export function InlineSpinner({ className = "", ...props }: InlineSpinnerProps) {
  return (
    <div
      className={`h-4 w-4 animate-spin rounded-full border-2 border-slate-600 border-t-slate-200 ${className}`}
      {...props}
    />
  );
}
