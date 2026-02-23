import { type TextareaHTMLAttributes, forwardRef } from "react";
import {
  controlRecipe,
  type ControlSize,
  type ControlState,
} from "../../recipes/control";
import { cn } from "../../utils/cn";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  size?: ControlSize;
  state?: ControlState;
};

const SIZE_CLASS: Record<ControlSize, string> = {
  sm: "min-h-20",
  md: "min-h-24",
  lg: "min-h-28",
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { className, size = "md", state = "default", ...props },
    ref,
  ) {
    const ariaInvalid = state === "invalid" ? true : props["aria-invalid"];

    return (
      <textarea
        ref={ref}
        className={cn(controlRecipe({ size, state }), "w-full", SIZE_CLASS[size], "py-2", className)}
        aria-invalid={ariaInvalid}
        {...props}
      />
    );
  },
);
