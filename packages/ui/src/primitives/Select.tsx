import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={`appearance-none rounded-lg border border-border-dark bg-control px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-action/50 ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </select>
  );
}
