type MetricStatProps = {
  label: string;
  value: string | number;
  className?: string;
};

export function MetricStat({ label, value, className }: MetricStatProps) {
  return (
    <div
      className={`rounded-[var(--rx-radius-md)] border border-border-subtle/70 bg-surface/40 p-2 ${className ?? ""}`}
    >
      <p className="mb-1 text-[10px] font-bold uppercase tracking-tighter text-subtle">
        {label}
      </p>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}
