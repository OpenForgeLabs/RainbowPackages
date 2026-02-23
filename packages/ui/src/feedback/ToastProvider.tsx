"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ToastEvent, ToastVariant, toastBus } from "./toastBus";

type ToastItem = {
  id: string;
  title: string;
  message?: string;
  variant: ToastVariant;
  durationMs: number;
};

type ToastContextValue = {
  pushToast: (toast: Omit<ToastItem, "id" | "durationMs"> & { durationMs?: number }) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const pushToast = useCallback(
    (toast: Omit<ToastItem, "id" | "durationMs"> & { durationMs?: number }) => {
      const id = `toast-${Math.random().toString(36).slice(2, 10)}`;
      const durationMs = toast.durationMs ?? 4000;
      setToasts((current) => [...current, { ...toast, id, durationMs }]);
      setTimeout(() => {
        setToasts((current) => current.filter((item) => item.id !== id));
      }, durationMs);
    },
    [],
  );

  useEffect(() => {
    const unsubscribe = toastBus.subscribe((toast: ToastEvent) => {
      pushToast(toast);
    });
    return () => {
      unsubscribe();
    };
  }, [pushToast]);

  const value = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex w-full max-w-sm flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto relative rounded-lg border px-4 py-3 text-sm shadow-[var(--rx-shadow-sm)] transition-all ${
              toast.variant === "success"
                ? "border-success/40 bg-success/10 text-success"
                : toast.variant === "error"
                  ? "border-danger/40 bg-danger/10 text-danger"
                  : "border-border bg-surface text-foreground"
            }`}
          >
            <div className="font-semibold">{toast.title}</div>
            {toast.message ? (
              <div className="mt-1 text-xs text-muted-foreground">{toast.message}</div>
            ) : null}
            <button
              className="absolute right-2 top-2 rounded p-1 text-muted-foreground hover:text-foreground"
              type="button"
              onClick={() =>
                setToasts((current) => current.filter((item) => item.id !== toast.id))
              }
              aria-label="Dismiss notification"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
