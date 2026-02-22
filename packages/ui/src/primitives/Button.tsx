import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "action" | "navigate" | "confirm" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60";
  const resolved = variant === "primary" ? "action" : variant;
  const styles =
    resolved === "action"
      ? "border-transparent bg-gradient-to-r from-action to-action-strong text-white shadow-[0_10px_18px_rgba(15,23,42,0.35)] hover:from-action-strong hover:to-confirm"
      : resolved === "confirm"
        ? "border-transparent bg-gradient-to-r from-confirm to-confirm-strong text-white shadow-[0_10px_18px_rgba(15,23,42,0.35)] hover:from-confirm-strong hover:to-action"
        : resolved === "navigate"
          ? "border-transparent bg-gradient-to-r from-navigate to-navigate-strong text-white shadow-[0_10px_18px_rgba(15,23,42,0.35)] hover:from-navigate-strong hover:to-action"
          : resolved === "secondary"
            ? "border-action/30 bg-action/10 text-action hover:border-action/60 hover:bg-action/20"
            : "border-transparent bg-transparent text-action hover:bg-action/10";

  return <button className={`${base} ${styles} ${className ?? ""}`} {...props} />;
}
