import type { InputHTMLAttributes } from "react";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: string;
};

export function SearchInput({ className, icon = "search", ...props }: SearchInputProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-[var(--rx-radius-md)] border border-border bg-control px-3 py-2 text-sm text-foreground focus-within:border-border-strong focus-within:ring-2 focus-within:ring-[color:rgb(var(--rx-color-ring)/0.4)] ${
        className ?? ""
      }`}
    >
      <span className="material-symbols-outlined text-[18px] text-muted-foreground">
        {icon}
      </span>
      <input
        className="w-full bg-transparent text-sm text-foreground placeholder:text-subtle focus:outline-none"
        {...props}
      />
    </div>
  );
}
