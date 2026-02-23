import { type HTMLAttributes } from "react";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-[var(--rx-radius-lg)] border border-border bg-surface p-6 shadow-[var(--rx-shadow-md)] transition-all hover:border-border-strong hover:bg-surface-2 ${className}`}
      {...props}
    />
  );
}
