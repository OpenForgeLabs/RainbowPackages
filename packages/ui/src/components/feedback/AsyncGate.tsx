import type { ReactNode } from "react";

type AsyncGateProps = {
  isLoading: boolean;
  error?: string;
  empty?: boolean;
  children: ReactNode;
};

export function AsyncGate({ isLoading, error, empty, children }: AsyncGateProps) {
  if (isLoading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center text-sm text-muted-foreground">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-[var(--rx-radius-md)] border border-border bg-surface/60 p-6 text-sm text-danger">
        {error}
      </div>
    );
  }

  if (empty) {
    return (
      <div className="rounded-[var(--rx-radius-md)] border border-border bg-surface/60 p-6 text-sm text-muted-foreground">
        Nothing to show yet.
      </div>
    );
  }

  return <>{children}</>;
}
