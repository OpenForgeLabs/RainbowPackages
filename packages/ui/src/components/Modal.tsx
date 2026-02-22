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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: "16px",
      }}
      onClick={onClose}
      role="presentation"
    >
      <div
        className="flex max-h-[90dvh] w-full max-w-xl flex-col overflow-hidden rounded-xl border border-border-dark bg-background shadow-2xl"
        style={{
          width: "100%",
          maxWidth: "640px",
          maxHeight: "90dvh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          borderRadius: "16px",
          border: "1px solid rgba(148,163,184,0.25)",
          backgroundColor: "rgb(var(--rx-background))",
          boxShadow: "0 24px 48px rgba(0,0,0,0.45)",
        }}
        onClick={(event) => event.stopPropagation()}
        role="presentation"
      >
        <div className="border-b border-border-dark px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
              {description ? (
                <p className="mt-1 text-sm text-slate-400">{description}</p>
              ) : null}
            </div>
            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-border-dark bg-surface-dark px-2 py-1 text-xs text-slate-300 hover:border-border-strong hover:bg-surface-2"
                aria-label="Close"
              >
                ✕
              </button>
            ) : null}
          </div>
        </div>
        <div
          className="overflow-y-auto px-6 py-5 text-slate-100"
        >
          {children}
        </div>
        {footer ? (
          <div
            className="border-t border-border-dark bg-background px-6 py-4"
          >
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
