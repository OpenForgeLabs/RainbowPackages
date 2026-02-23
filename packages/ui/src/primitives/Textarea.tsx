import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full rounded-[var(--rx-radius-md)] border border-border bg-control px-3 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-ring/40 ${
        className ?? ""
      }`}
      {...props}
    />
  );
}
