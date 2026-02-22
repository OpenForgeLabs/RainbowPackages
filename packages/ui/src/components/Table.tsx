import type { HTMLAttributes } from "react";

export function Table(props: HTMLAttributes<HTMLTableElement>) {
  return <table className={`w-full text-left text-sm ${props.className ?? ""}`} {...props} />;
}

export function TableHead(props: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={`sticky top-0 border-b border-border-dark bg-background text-[10px] font-bold uppercase tracking-wider text-slate-500 ${
        props.className ?? ""
      }`}
      {...props}
    />
  );
}

export function TableBody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={`divide-y divide-border-dark ${props.className ?? ""}`} {...props} />
  );
}

export function TableRow(props: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={`transition-colors hover:bg-surface-dark/60 ${props.className ?? ""}`} {...props} />;
}

export function TableHeaderCell(props: HTMLAttributes<HTMLTableCellElement>) {
  return <th className={`px-6 py-3 ${props.className ?? ""}`} {...props} />;
}

export function TableCell(props: HTMLAttributes<HTMLTableCellElement>) {
  return <td className={`px-6 py-3 ${props.className ?? ""}`} {...props} />;
}
