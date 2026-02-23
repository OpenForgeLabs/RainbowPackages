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
      className={`flex items-center gap-2 rounded-[var(--rx-radius-md)] border border-border bg-control px-3 py-2 text-xs text-foreground ${
        wrapperClassName ?? ""
      }`}
    >
      <span className="material-symbols-outlined text-base text-muted-foreground">{icon}</span>
      <Select
        className={`border-0 bg-transparent p-0 text-xs text-foreground focus:ring-0 ${className ?? ""}`}
        {...props}
      >
        {children}
      </Select>
    </div>
  );
}
