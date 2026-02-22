import type { InputHTMLAttributes } from "react";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: string;
};

export function SearchInput({ className, icon = "search", ...props }: SearchInputProps) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border border-border-dark bg-control px-3 py-2 text-sm text-slate-200 focus-within:border-action ${
        className ?? ""
      }`}
    >
      <span className="material-symbols-outlined text-[18px] text-slate-500">
        {icon}
      </span>
      <input
        className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
        {...props}
      />
    </div>
  );
}
