"use client";

import { useMemo, useRef } from "react";

type JsonSyntaxTextareaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  minRows?: number;
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const highlightJson = (value: string) => {
  const escaped = escapeHtml(value);
  return escaped.replace(
    /(\"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\\"])*\"(?=\s*:)?|\"(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\\"])*\"|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      if (match === "true" || match === "false") {
        return `<span class="text-viz-4">${match}</span>`;
      }
      if (match === "null") {
        return `<span class="text-viz-5">${match}</span>`;
      }
      if (match[0] === '"') {
        return `<span class="text-viz-3">${match}</span>`;
      }
      return `<span class="text-viz-2">${match}</span>`;
    },
  );
};

export function JsonSyntaxTextarea({
  value,
  onChange,
  placeholder,
  className,
  minRows = 6,
}: JsonSyntaxTextareaProps) {
  const preRef = useRef<HTMLPreElement | null>(null);
  const highlighted = useMemo(() => highlightJson(value), [value]);

  return (
    <div className={`relative ${className ?? ""}`}>
      <pre
        ref={preRef}
        className="pointer-events-none whitespace-pre-wrap break-words px-3 py-3 font-mono text-xs leading-5 text-foreground"
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: highlighted + (value.endsWith("\n") ? " " : ""),
        }}
      />
      <textarea
        className="ui-focus absolute inset-0 h-full w-full resize-none bg-transparent px-3 py-3 font-mono text-xs leading-5 text-transparent caret-foreground"
        value={value}
        rows={minRows}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
