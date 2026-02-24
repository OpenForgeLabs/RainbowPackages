import {
  type ReactNode,
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";

export type ModalProps = {
  open: boolean;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  className?: string;
};

const FOCUSABLE_SELECTOR =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  { open, title, description, children, footer, onClose, className },
  ref,
) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const onCloseRef = useRef(onClose);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  useImperativeHandle(ref, () => panelRef.current as HTMLDivElement);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const getFocusable = useMemo(
    () => (panel: HTMLDivElement) =>
      Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (node) => !node.hasAttribute("disabled"),
      ),
    [],
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    if (!panel) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = getFocusable(panel);
    const initialFocusable =
      focusable.find((node) => node.getAttribute("data-autofocus") === "true") ??
      focusable.find((node) => !node.classList.contains("ui-modal-close")) ??
      focusable[0];
    (initialFocusable ?? panel).focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = getFocusable(panel);
      if (focusable.length === 0) {
        event.preventDefault();
        panel.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    };
  }, [open, getFocusable]);

  if (!open || !mounted) {
    return null;
  }

  return createPortal(
    <div
      className="ui-modal-overlay"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        className={cn("ui-focus ui-modal-panel", className)}
      >
        <div className="ui-modal-header">
          <div className="ui-modal-header-row">
            <div className="ui-modal-title-wrap">
              <h2 id={titleId} className="ui-modal-title">
                {title}
              </h2>
              {description ? (
                <p id={descriptionId} className="ui-modal-description">
                  {description}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="ui-focus ui-modal-close"
              aria-label="Close dialog"
            >
              <span aria-hidden="true">x</span>
            </button>
          </div>
        </div>

        <div className="ui-modal-body">{children}</div>

        {footer ? <div className="ui-modal-footer">{footer}</div> : null}
      </div>
    </div>,
    document.body,
  );
});
