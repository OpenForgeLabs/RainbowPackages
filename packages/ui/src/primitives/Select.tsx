import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={`appearance-none rounded-[var(--rx-radius-md)] border border-border bg-control px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </select>
  );
}
