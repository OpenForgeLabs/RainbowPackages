import type { InputHTMLAttributes } from "react";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export function Checkbox({ className, label, ...props }: CheckboxProps) {
  const checkbox = (
    <input
      type="checkbox"
      className={`size-4 rounded border-border-dark bg-control text-action focus:ring-2 focus:ring-action/50 ${
        className ?? ""
      }`}
      {...props}
    />
  );

  if (!label) {
    return checkbox;
  }

  return (
    <label className="flex items-center gap-2 text-sm text-slate-200">
      {checkbox}
      {label}
    </label>
  );
}
