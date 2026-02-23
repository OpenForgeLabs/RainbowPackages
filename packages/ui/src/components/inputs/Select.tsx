import { type SelectHTMLAttributes, forwardRef } from "react";
import {
  controlRecipe,
  type ControlSize,
  type ControlState,
} from "../../recipes/control";
import { cn } from "../../utils/cn";

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
  size?: ControlSize;
  state?: ControlState;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, size = "md", state = "default", children, ...props },
  ref,
) {
  const ariaInvalid = state === "invalid" ? true : props["aria-invalid"];

  return (
    <select
      ref={ref}
      className={cn(controlRecipe({ size, state }), "appearance-none", className)}
      aria-invalid={ariaInvalid}
      {...props}
    >
      {children}
    </select>
  );
});
