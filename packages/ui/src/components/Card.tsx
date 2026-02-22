import { type HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border-dark bg-surface-dark p-6 shadow-[0_12px_32px_rgba(10,14,24,0.35)] transition-all hover:border-border-strong hover:bg-surface-2 hover:ring-2 hover:ring-primary/30 ${className}`}
      {...props}
    />
  );
}
