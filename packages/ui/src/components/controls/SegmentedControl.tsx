import { forwardRef, useMemo, useRef, type ForwardedRef, type ReactElement } from "react";
import { cn } from "../../utils/cn";

export type SegmentedItem<T extends string> = {
  value: T;
  label: string;
  disabled?: boolean;
};

export type SegmentedControlProps<T extends string> = {
  items: SegmentedItem<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: "sm" | "md";
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

export const SegmentedControl = forwardRef(function SegmentedControlInner<
  T extends string,
>(
  {
    items,
    value,
    onChange,
    size = "sm",
    className,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
  }: SegmentedControlProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeIndex = useMemo(
    () => Math.max(0, items.findIndex((item) => item.value === value)),
    [items, value],
  );

  const itemPadding = size === "sm" ? "px-3 py-1 text-[10px]" : "px-4 py-2 text-xs";

  const move = (indexDelta: number) => {
    if (items.length === 0) {
      return;
    }

    let nextIndex = activeIndex;
    for (let i = 0; i < items.length; i += 1) {
      nextIndex = (nextIndex + indexDelta + items.length) % items.length;
      if (!items[nextIndex].disabled) {
        onChange(items[nextIndex].value);
        itemRefs.current[nextIndex]?.focus();
        return;
      }
    }
  };

  return (
    <div
      ref={ref}
      role="radiogroup"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "inline-flex items-center gap-1 rounded-[var(--rx-radius-md)] border border-border bg-surface p-0.5",
        className,
      )}
    >
      {items.map((item, index) => {
        const checked = item.value === value;
        return (
          <button
            key={item.value}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            type="button"
            role="radio"
            aria-checked={checked}
            aria-disabled={item.disabled ? true : undefined}
            disabled={item.disabled}
            tabIndex={checked ? 0 : -1}
            onClick={() => onChange(item.value)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                move(1);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                move(-1);
              }
              if (event.key === "ArrowDown") {
                event.preventDefault();
                move(1);
              }
              if (event.key === "ArrowUp") {
                event.preventDefault();
                move(-1);
              }
            }}
            className={cn(
              "ui-focus rounded-[var(--rx-radius-sm)] border font-bold uppercase tracking-widest transition",
              itemPadding,
              checked
                ? "border-primary bg-primary text-primary-foreground shadow-[var(--rx-shadow-sm)]"
                : "border-transparent text-muted-foreground hover:border-border-strong hover:text-foreground",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}) as <T extends string>(
  props: SegmentedControlProps<T> & { ref?: ForwardedRef<HTMLDivElement> },
) => ReactElement;
