import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "accent" | "success" | "warning" | "danger" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[var(--rx-radius-md)] border px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60";
  const styles =
    variant === "primary"
      ? "border-transparent bg-primary text-primary-foreground shadow-[var(--rx-shadow-sm)] hover:bg-primary-hover active:bg-primary-active"
      : variant === "accent"
        ? "border-transparent bg-accent text-accent-foreground shadow-[var(--rx-shadow-sm)] hover:bg-accent-hover active:bg-accent-active"
        : variant === "success"
          ? "border-transparent bg-success text-success-foreground shadow-[var(--rx-shadow-sm)] hover:bg-success-hover"
          : variant === "warning"
            ? "border-transparent bg-warning text-warning-foreground shadow-[var(--rx-shadow-sm)] hover:bg-warning-hover"
            : variant === "danger"
              ? "border-transparent bg-danger text-danger-foreground shadow-[var(--rx-shadow-sm)] hover:bg-danger-hover"
              : variant === "secondary"
                ? "border-border bg-surface-2 text-foreground hover:border-border-strong hover:bg-surface-3"
                : "border-transparent bg-transparent text-foreground hover:bg-surface-2";

  return <button className={`${base} ${styles} ${className ?? ""}`} {...props} />;
}
