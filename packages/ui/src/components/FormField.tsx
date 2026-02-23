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
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
      {helperText ? (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      ) : null}
      {error ? <span className="text-xs text-danger">{error}</span> : null}
    </div>
  );
}
