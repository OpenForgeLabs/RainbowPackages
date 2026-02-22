import type { ReactNode } from "react";
import { Button } from "../primitives/Button";

type EmptyStateProps = {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: ReactNode;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border-dark/70 bg-background/40 px-6 py-10 text-center">
      <div className="text-2xl text-slate-400">{icon}</div>
      <div className="text-sm font-semibold text-slate-100">{title}</div>
      {description ? (
        <p className="max-w-sm text-xs text-slate-400">{description}</p>
      ) : null}
      {actionLabel && onAction ? (
        <Button variant="navigate" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
