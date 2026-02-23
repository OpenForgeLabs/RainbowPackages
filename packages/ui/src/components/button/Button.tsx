import {
  type ButtonHTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";
import {
  buttonRecipe,
  type ButtonSize,
  type ButtonTone,
  type ButtonVariant,
} from "../../recipes/button";
import { cn } from "../../utils/cn";
import { InlineSpinner } from "../feedback/InlineSpinner";

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> & {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "solid",
    tone = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    className,
    disabled,
    children,
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(buttonRecipe({ variant, tone, size }), className)}
      aria-busy={isLoading ? true : undefined}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <InlineSpinner className="h-4 w-4" aria-hidden="true" /> : leftIcon}
      <span>{children}</span>
      {!isLoading ? rightIcon : null}
    </button>
  );
});
