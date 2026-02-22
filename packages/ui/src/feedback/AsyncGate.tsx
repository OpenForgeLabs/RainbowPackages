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
      <div className="flex min-h-[200px] items-center justify-center text-sm text-slate-300">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-border-dark bg-surface-dark/60 p-6 text-sm text-rose-300">
        {error}
      </div>
    );
  }

  if (empty) {
    return (
      <div className="rounded-lg border border-border-dark bg-surface-dark/60 p-6 text-sm text-slate-300">
        Nothing to show yet.
      </div>
    );
  }

  return <>{children}</>;
}
