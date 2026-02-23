import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { className, label, ...props },
  ref,
) {
  const checkbox = (
    <input
      ref={ref}
      type="checkbox"
      className={cn(
        "ui-focus size-4 rounded border border-border bg-control text-primary",
        className,
      )}
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
});
