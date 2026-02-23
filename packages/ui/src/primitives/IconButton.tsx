import type { ButtonHTMLAttributes } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "accent" | "success" | "warning" | "danger" | "ghost" | "secondary";
  size?: "sm" | "md";
};

export function IconButton({
  variant = "secondary",
  size = "md",
  className,
  ...props
}: IconButtonProps) {
  const sizeClass = size === "sm" ? "h-8 w-8 text-[16px]" : "h-10 w-10 text-[18px]";
  const base =
    "inline-flex items-center justify-center rounded-[var(--rx-radius-md)] border transition disabled:cursor-not-allowed disabled:opacity-60";
  const styles =
    variant === "primary"
      ? "border-transparent bg-primary text-primary-foreground shadow-[var(--rx-shadow-xs)] hover:bg-primary-hover active:bg-primary-active"
      : variant === "accent"
        ? "border-transparent bg-accent text-accent-foreground shadow-[var(--rx-shadow-xs)] hover:bg-accent-hover active:bg-accent-active"
        : variant === "success"
          ? "border-transparent bg-success text-success-foreground shadow-[var(--rx-shadow-xs)] hover:bg-success-hover"
          : variant === "warning"
            ? "border-transparent bg-warning text-warning-foreground shadow-[var(--rx-shadow-xs)] hover:bg-warning-hover"
            : variant === "danger"
              ? "border-danger/40 bg-danger/10 text-danger hover:border-danger/70 hover:bg-danger/20"
              : variant === "ghost"
                ? "border-transparent bg-transparent text-foreground hover:bg-surface-2"
                : "border-border bg-surface-2 text-foreground hover:border-border-strong hover:bg-surface-3";

  return (
    <button className={`${base} ${sizeClass} ${styles} ${className ?? ""}`} {...props} />
  );
}
