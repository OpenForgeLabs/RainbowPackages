import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-[var(--rx-radius-md)] border border-border bg-control px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-ring/40 ${
        className ?? ""
      }`}
      {...props}
    />
  );
}
