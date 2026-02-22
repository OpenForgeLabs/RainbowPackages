import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  helperText?: string;
  error?: string | null;
  children: ReactNode;
};

export function FormField({ label, helperText, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-200">{label}</label>
      {children}
      {helperText ? (
        <span className="text-xs text-slate-400">{helperText}</span>
      ) : null}
      {error ? <span className="text-xs text-rose-300">{error}</span> : null}
    </div>
  );
}
