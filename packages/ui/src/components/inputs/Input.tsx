import { type InputHTMLAttributes, forwardRef } from "react";
import {
  controlRecipe,
  type ControlSize,
  type ControlState,
} from "../../recipes/control";
import { cn } from "../../utils/cn";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: ControlSize;
  state?: ControlState;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, size = "md", state = "default", ...props },
  ref,
) {
  const ariaInvalid = state === "invalid" ? true : props["aria-invalid"];

  return (
    <input
      ref={ref}
      className={cn(controlRecipe({ size, state }), "w-full", className)}
      aria-invalid={ariaInvalid}
      {...props}
    />
  );
});
