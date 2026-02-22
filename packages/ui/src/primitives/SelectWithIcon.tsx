import type { SelectHTMLAttributes } from "react";
import { Select } from "./Select";

type SelectWithIconProps = SelectHTMLAttributes<HTMLSelectElement> & {
  icon: string;
  wrapperClassName?: string;
};

export function SelectWithIcon({
  icon,
  className,
  wrapperClassName,
  children,
  ...props
}: SelectWithIconProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border border-border-dark bg-control px-3 py-2 text-xs text-slate-200 ${
        wrapperClassName ?? ""
      }`}
    >
      <span className="material-symbols-outlined text-base">{icon}</span>
      <Select
        className={`border-0 bg-transparent p-0 text-xs text-slate-200 focus:ring-0 ${className ?? ""}`}
        {...props}
      >
        {children}
      </Select>
    </div>
  );
}
