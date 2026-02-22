import type { ButtonHTMLAttributes } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "action" | "navigate" | "confirm" | "danger" | "ghost" | "secondary";
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
    "inline-flex items-center justify-center rounded-lg border transition disabled:cursor-not-allowed disabled:opacity-60";
  const styles =
    variant === "action"
      ? "border-transparent bg-gradient-to-r from-action to-action-strong text-white shadow-[0_10px_18px_rgba(15,23,42,0.35)] hover:from-action-strong hover:to-confirm"
      : variant === "confirm"
        ? "border-transparent bg-gradient-to-r from-confirm to-confirm-strong text-white shadow-[0_10px_18px_rgba(15,23,42,0.35)] hover:from-confirm-strong hover:to-action"
        : variant === "navigate"
          ? "border-transparent bg-gradient-to-r from-navigate to-navigate-strong text-white shadow-[0_10px_18px_rgba(15,23,42,0.35)] hover:from-navigate-strong hover:to-action"
          : variant === "danger"
            ? "border-danger/40 bg-danger/10 text-danger hover:border-danger/70 hover:bg-danger/20"
            : variant === "ghost"
              ? "border-transparent bg-transparent text-action hover:bg-action/10"
              : "border-action/30 bg-action/10 text-action hover:border-action/60 hover:bg-action/20";

  return (
    <button className={`${base} ${sizeClass} ${styles} ${className ?? ""}`} {...props} />
  );
}
