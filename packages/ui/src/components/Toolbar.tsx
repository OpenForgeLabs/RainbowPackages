import type { HTMLAttributes } from "react";

type ToolbarProps = HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "end" | "between";
};

export function Toolbar({ align = "between", className, ...props }: ToolbarProps) {
  const alignClass =
    align === "start"
      ? "justify-start"
      : align === "end"
        ? "justify-end"
        : "justify-between";

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${alignClass} ${className ?? ""}`}
      {...props}
    />
  );
}
