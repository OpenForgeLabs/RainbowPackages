import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";
import {
  buttonRecipe,
  type ButtonTone,
  type ButtonVariant,
} from "../../recipes/button";
import { cn } from "../../utils/cn";

type IconButtonA11yName =
  | { "aria-label": string; label?: never }
  | { label: string; "aria-label"?: never };

export type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "size"
> &
  IconButtonA11yName & {
    icon: ReactNode;
    variant?: ButtonVariant;
    tone?: ButtonTone;
    size?: "sm" | "md" | "lg";
  };

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      icon,
      label,
      className,
      variant = "ghost",
      tone = "neutral",
      size = "md",
      ...props
    },
    ref,
  ) {
    const ariaLabel = props["aria-label"] ?? label;
    const sizeClassMap = {
      sm: "h-8 w-8 p-0",
      md: "h-10 w-10 p-0",
      lg: "h-12 w-12 p-0",
    } as const;
    const iconSizeClass = sizeClassMap[size];

    return (
      <button
        ref={ref}
        className={cn(buttonRecipe({ variant, tone, size }), iconSizeClass, className)}
        aria-label={ariaLabel}
        {...props}
      >
        <span aria-hidden="true" className="inline-flex items-center justify-center">
          {icon}
        </span>
        {label ? <span className="sr-only">{label}</span> : null}
      </button>
    );
  },
);
