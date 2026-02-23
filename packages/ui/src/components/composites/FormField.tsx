import {
  type ReactElement,
  cloneElement,
  isValidElement,
  useId,
} from "react";
import { cn } from "../../utils/cn";

type ControlLikeProps = {
  id?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
};

export type FormFieldProps = {
  label: string;
  helperText?: string;
  error?: string | null;
  id?: string;
  className?: string;
  children: ReactElement<ControlLikeProps>;
};

export function FormField({
  label,
  helperText,
  error,
  id,
  className,
  children,
}: FormFieldProps) {
  const generatedId = useId();
  const controlId = id ?? `${generatedId}-control`;
  const helperId = helperText ? `${generatedId}-helper` : undefined;
  const errorId = error ? `${generatedId}-error` : undefined;

  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;
  const invalid = Boolean(error);

  let control = children;
  if (isValidElement<ControlLikeProps>(children)) {
    control = cloneElement(children, {
      id: children.props.id ?? controlId,
      "aria-describedby": [children.props["aria-describedby"], describedBy]
        .filter(Boolean)
        .join(" ") || undefined,
      "aria-invalid": invalid || children.props["aria-invalid"] ? true : undefined,
    });
  }

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={controlId} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {control}
      {helperText ? (
        <span id={helperId} className="text-xs text-muted-foreground">
          {helperText}
        </span>
      ) : null}
      {error ? (
        <span id={errorId} className="text-xs text-danger">
          {error}
        </span>
      ) : null}
    </div>
  );
}
