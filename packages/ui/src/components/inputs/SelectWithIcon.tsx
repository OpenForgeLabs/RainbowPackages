import { type SelectHTMLAttributes, forwardRef } from "react";
import {
  controlRecipe,
  type ControlSize,
  type ControlState,
} from "../../recipes/control";
import { cn } from "../../utils/cn";

type SelectWithIconA11y =
  | { "aria-label": string; label?: never }
  | { label: string; "aria-label"?: never };

export type SelectWithIconProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> &
  SelectWithIconA11y & {
    icon: string;
    size?: ControlSize;
    state?: ControlState;
    wrapperClassName?: string;
  };

export const SelectWithIcon = forwardRef<HTMLSelectElement, SelectWithIconProps>(
  function SelectWithIcon(
    {
      icon,
      className,
      wrapperClassName,
      children,
      size = "md",
      state = "default",
      label,
      ...props
    },
    ref,
  ) {
    const ariaLabel = props["aria-label"] ?? label;
    const ariaInvalid = state === "invalid" ? true : props["aria-invalid"];

    return (
      <div
        className={cn(
          controlRecipe({ size, state }),
          "flex items-center gap-2 focus-within:border-border-strong",
          wrapperClassName,
        )}
      >
        <span
          aria-hidden="true"
          className="material-symbols-outlined shrink-0 leading-none text-base text-muted-foreground"
        >
          {icon}
        </span>
        <select
          ref={ref}
          aria-label={ariaLabel}
          aria-invalid={ariaInvalid}
          className={cn(
            "ui-focus min-w-0 w-full appearance-none border-0 bg-transparent p-0 text-sm text-foreground",
            className,
          )}
          {...props}
        >
          {children}
        </select>
      </div>
    );
  },
);
