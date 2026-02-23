export type ToastVariant = "success" | "error" | "info";

export type ToastEvent = {
  title: string;
  message?: string;
  variant: ToastVariant;
  durationMs?: number;
};

type Listener = (toast: ToastEvent) => void;

class ToastBus {
  private listeners = new Set<Listener>();

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  emit(toast: ToastEvent) {
    for (const listener of this.listeners) {
      listener(toast);
    }
  }
}

export const toastBus = new ToastBus();
