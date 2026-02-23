import type { ReactNode } from "react";
import { Button } from "../button/Button";

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
    <div className="flex flex-col items-center justify-center gap-3 rounded-[var(--rx-radius-lg)] border border-dashed border-border-subtle/80 bg-surface-2 px-6 py-10 text-center shadow-[var(--rx-shadow-xs)]">
      <div className="text-2xl text-muted-foreground">{icon}</div>
      <div className="text-sm font-semibold text-foreground">{title}</div>
      {description ? <p className="max-w-sm text-xs text-muted-foreground">{description}</p> : null}
      {actionLabel && onAction ? (
        <Button variant="solid" tone="accent" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
