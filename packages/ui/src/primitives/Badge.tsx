import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "primary" | "accent" | "success" | "warning" | "danger" | "info";
};

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  const styles =
    variant === "primary"
      ? "border-primary/40 bg-primary/10 text-primary"
      : variant === "accent"
        ? "border-accent/40 bg-accent/10 text-accent"
        : variant === "success"
          ? "border-success/40 bg-success/10 text-success"
          : variant === "warning"
            ? "border-warning/40 bg-warning/10 text-warning"
            : variant === "danger"
              ? "border-danger/40 bg-danger/10 text-danger"
              : variant === "info"
                ? "border-info/40 bg-info/10 text-info"
                : "border-border-subtle bg-surface-2 text-muted-foreground";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${styles} ${
        className ?? ""
      }`}
      {...props}
    />
  );
}
