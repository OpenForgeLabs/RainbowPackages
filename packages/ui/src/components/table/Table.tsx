import type {
  HTMLAttributes,
  TableHTMLAttributes,
  ThHTMLAttributes,
  TdHTMLAttributes,
} from "react";
import { cn } from "../../utils/cn";

export function Table(props: TableHTMLAttributes<HTMLTableElement>) {
  return <table className={cn("w-full text-left text-sm", props.className)} {...props} />;
}

export function TableHead(props: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cn(
        "sticky top-0 border-b border-border bg-background text-[10px] font-bold uppercase tracking-wider text-subtle",
        props.className,
      )}
      {...props}
    />
  );
}

export function TableBody(props: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn("divide-y divide-divider", props.className)} {...props} />;
}

export function TableRow(props: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn("transition-colors hover:bg-surface-2/60", props.className)} {...props} />;
}

export function TableHeaderCell(props: ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className={cn("px-6 py-3", props.className)} {...props} />;
}

export function TableCell(props: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn("px-6 py-3", props.className)} {...props} />;
}
