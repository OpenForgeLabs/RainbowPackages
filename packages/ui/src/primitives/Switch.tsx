import type { ButtonHTMLAttributes } from "react";

type SwitchProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
  label?: string;
};

export function Switch({ checked, onCheckedChange, label, className, ...props }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={`inline-flex items-center gap-2 text-sm ${className ?? ""}`}
      {...props}
    >
      <span
        className={`relative inline-flex h-6 w-11 items-center rounded-full border transition ${
          checked
            ? "border-confirm/50 bg-confirm/20"
            : "border-border-dark bg-control"
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full transition ${
            checked
              ? "translate-x-5 bg-confirm"
              : "translate-x-0 bg-slate-500"
          }`}
        />
      </span>
      {label ? <span className="text-slate-200">{label}</span> : null}
    </button>
  );
}
