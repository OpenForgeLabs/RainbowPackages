import type { InputHTMLAttributes } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export function Checkbox({ className, label, ...props }: CheckboxProps) {
  const checkbox = (
    <input
      type="checkbox"
      className={`size-4 rounded border-border bg-control text-primary focus:ring-2 focus:ring-ring/40 ${
        className ?? ""
      }`}
      {...props}
    />
  );

  if (!label) {
    return checkbox;
  }

  return (
    <label className="flex items-center gap-2 text-sm text-foreground">
      {checkbox}
      {label}
    </label>
  );
}
