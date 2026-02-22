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
      className={`inline-flex items-center gap-1 rounded-lg border border-border-dark bg-background p-0.5 ${className ?? ""}`}
    >
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={`rounded ${padding} font-bold uppercase tracking-widest transition ${
              active
                ? "border border-action/40 bg-gradient-to-r from-action to-action-strong text-white shadow-[0_8px_16px_rgba(15,23,42,0.35)]"
                : "border border-transparent text-slate-400 hover:border-action/50 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
