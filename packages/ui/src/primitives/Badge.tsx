import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "action" | "navigate" | "confirm" | "danger" | "warning" | "success";
};

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  const styles =
    variant === "action"
      ? "border-action/40 bg-action/10 text-action"
      : variant === "navigate"
        ? "border-navigate/40 bg-navigate/10 text-navigate"
        : variant === "confirm"
          ? "border-confirm/40 bg-confirm/10 text-confirm"
          : variant === "danger"
            ? "border-danger/40 bg-danger/10 text-danger"
            : variant === "warning"
              ? "border-warning/40 bg-warning/10 text-warning"
              : variant === "success"
                ? "border-success/40 bg-success/10 text-success"
                : "border-border-dark/60 bg-surface-dark/50 text-slate-300";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${styles} ${
        className ?? ""
      }`}
      {...props}
    />
  );
}
