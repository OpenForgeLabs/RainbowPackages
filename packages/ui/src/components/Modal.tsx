import { type ReactNode } from "react";

type ModalProps = {
  open: boolean;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
};

export function Modal({
  open,
  title,
  description,
  children,
  footer,
  onClose,
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[var(--rx-z-modal)] flex items-center justify-center bg-background/80 p-4 sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="flex max-h-[90dvh] w-full max-w-xl flex-col overflow-hidden rounded-[var(--rx-radius-lg)] border border-border bg-surface shadow-[var(--rx-shadow-lg)]"
        onClick={(event) => event.stopPropagation()}
        role="presentation"
      >
        <div className="border-b border-border px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              {description ? (
                <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              ) : null}
            </div>
            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                className="rounded-[var(--rx-radius-md)] border border-border bg-surface-2 px-2 py-1 text-xs text-muted-foreground hover:border-border-strong hover:text-foreground"
                aria-label="Close"
              >
                ✕
              </button>
            ) : null}
          </div>
        </div>
        <div className="overflow-y-auto px-6 py-5 text-foreground">
          {children}
        </div>
        {footer ? (
          <div
            className="border-t border-border bg-surface px-6 py-4"
          >
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
