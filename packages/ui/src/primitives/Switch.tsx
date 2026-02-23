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
            ? "border-success/50 bg-success/20"
            : "border-border bg-control"
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full transition ${
            checked
              ? "translate-x-5 bg-success"
              : "translate-x-0 bg-border-strong"
          }`}
        />
      </span>
      {label ? <span className="text-foreground">{label}</span> : null}
    </button>
  );
}
