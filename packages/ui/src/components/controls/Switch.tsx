import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";

type SwitchProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
  label?: string;
};

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { checked, onCheckedChange, label, className, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={cn("ui-focus inline-flex items-center gap-2 text-sm", className)}
      {...props}
    >
      <span
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full border transition",
          checked ? "border-success bg-success/20" : "border-border bg-control",
        )}
      >
        <span
          className={cn(
            "absolute left-0.5 top-0.5 h-5 w-5 rounded-full transition",
            checked ? "translate-x-5 bg-success" : "translate-x-0 bg-border-strong",
          )}
        />
      </span>
      {label ? <span className="text-foreground">{label}</span> : null}
    </button>
  );
});
