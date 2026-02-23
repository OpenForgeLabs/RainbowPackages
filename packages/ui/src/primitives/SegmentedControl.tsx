type SegmentedItem<T extends string> = {
  value: T;
  label: string;
};

type SegmentedControlProps<T extends string> = {
  items: SegmentedItem<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: "sm" | "md";
  className?: string;
};

export function SegmentedControl<T extends string>({
  items,
  value,
  onChange,
  size = "sm",
  className,
}: SegmentedControlProps<T>) {
  const padding = size === "sm" ? "px-3 py-1 text-[10px]" : "px-4 py-2 text-xs";
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-[var(--rx-radius-md)] border border-border bg-surface p-0.5 ${className ?? ""}`}
    >
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={`rounded-[var(--rx-radius-sm)] ${padding} font-bold uppercase tracking-widest transition ${
              active
                ? "border border-primary/50 bg-primary text-primary-foreground shadow-[var(--rx-shadow-sm)]"
                : "border border-transparent text-muted-foreground hover:border-border-strong hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
