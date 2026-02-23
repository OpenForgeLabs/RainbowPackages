import { type InputHTMLAttributes, forwardRef } from "react";
import {
  controlRecipe,
  type ControlSize,
  type ControlState,
} from "../../recipes/control";
import { cn } from "../../utils/cn";

type SearchInputA11y =
  | { "aria-label": string; label?: never }
  | { label: string; "aria-label"?: never };

export type SearchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  SearchInputA11y & {
    icon?: string;
    size?: ControlSize;
    state?: ControlState;
  };

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(
    {
      className,
      icon = "search",
      size = "md",
      state = "default",
      label,
      ...props
    },
    ref,
  ) {
    const ariaInvalid = state === "invalid" ? true : props["aria-invalid"];
    const ariaLabel = props["aria-label"] ?? label;

    return (
      <div
        className={cn(
          controlRecipe({ size, state }),
          "flex w-full items-center gap-2 focus-within:border-border-strong",
          className,
        )}
      >
        <span
          aria-hidden="true"
          className="material-symbols-outlined shrink-0 leading-none text-[18px] text-muted-foreground"
        >
          {icon}
        </span>
        <input
          ref={ref}
          aria-label={ariaLabel}
          aria-invalid={ariaInvalid}
          className="min-w-0 w-full bg-transparent text-sm text-foreground placeholder:text-subtle focus:outline-none"
          {...props}
        />
      </div>
    );
  },
);
