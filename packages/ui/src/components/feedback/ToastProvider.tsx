"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { toastRecipe } from "../../recipes/toast";
import { toastBus, type ToastEvent, type ToastVariant } from "./toastBus";

type ToastItem = {
  id: string;
  title: string;
  message?: string;
  variant: ToastVariant;
  durationMs: number;
};

type ToastContextValue = {
  pushToast: (
    toast: Omit<ToastItem, "id" | "durationMs"> & { durationMs?: number },
  ) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const toastLiveMode: Record<ToastVariant, "assertive" | "polite"> = {
  success: "polite",
  info: "polite",
  error: "assertive",
};

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

function createToastId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `toast-${Math.random().toString(36).slice(2, 10)}`;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const clearDismissTimer = useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (!timer) {
      return;
    }
    clearTimeout(timer);
    timersRef.current.delete(id);
  }, []);

  const dismissToast = useCallback(
    (id: string) => {
      clearDismissTimer(id);
      setToasts((current) => current.filter((item) => item.id !== id));
    },
    [clearDismissTimer],
  );

  const scheduleDismiss = useCallback(
    (id: string, durationMs: number) => {
      clearDismissTimer(id);
      const timer = setTimeout(() => dismissToast(id), durationMs);
      timersRef.current.set(id, timer);
    },
    [clearDismissTimer, dismissToast],
  );

  const pushToast = useCallback(
    (toast: Omit<ToastItem, "id" | "durationMs"> & { durationMs?: number }) => {
      const id = createToastId();
      const durationMs = toast.durationMs ?? 4000;
      setToasts((current) => [...current, { ...toast, id, durationMs }]);
      scheduleDismiss(id, durationMs);
    },
    [scheduleDismiss],
  );

  useEffect(() => {
    const unsubscribe = toastBus.subscribe((event: ToastEvent) => {
      pushToast(event);
    });

    return () => {
      unsubscribe();
      for (const timer of timersRef.current.values()) {
        clearTimeout(timer);
      }
      timersRef.current.clear();
    };
  }, [pushToast]);

  const value = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        className="pointer-events-none fixed bottom-6 right-6 z-[var(--rx-z-toast)] flex w-full max-w-sm flex-col gap-2"
        aria-label="Notifications"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={toastRecipe({ tone: toast.variant })}
            role={toast.variant === "error" ? "alert" : "status"}
            aria-live={toastLiveMode[toast.variant]}
            onMouseEnter={() => clearDismissTimer(toast.id)}
            onMouseLeave={() => scheduleDismiss(toast.id, toast.durationMs)}
          >
            <div className="pr-8 font-semibold">{toast.title}</div>
            {toast.message ? (
              <div className="mt-1 pr-8 text-xs text-muted-foreground">{toast.message}</div>
            ) : null}
            <button
              type="button"
              className="ui-focus absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-[var(--rx-radius-sm)] text-muted-foreground hover:bg-surface-2 hover:text-foreground"
              onClick={() => dismissToast(toast.id)}
              aria-label="Dismiss notification"
            >
              <span aria-hidden="true">x</span>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
