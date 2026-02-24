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
  const disabled = Boolean(props.disabled);

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "ui-focus inline-flex items-center gap-2 text-sm",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full border transition-colors",
          checked ? "border-primary bg-control" : "border-border bg-control",
        )}
      >
        <span
          className={cn(
            "absolute left-0.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border transition-transform transition-colors",
            checked
              ? "translate-x-[19px] border-primary bg-primary"
              : "translate-x-0 border-border-strong bg-foreground",
          )}
        />
      </span>
      {label ? <span className="text-foreground">{label}</span> : null}
    </button>
  );
});
