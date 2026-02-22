import { Button } from "../primitives/Button";
import { Modal } from "../components/Modal";

type ConfirmActionModalProps = {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmVariant?: "confirm" | "action" | "ghost";
  isLoading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export function ConfirmActionModal({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  confirmVariant = "confirm",
  isLoading,
  onCancel,
  onConfirm,
}: ConfirmActionModalProps) {
  return (
    <Modal
      open={open}
      title={title}
      description={description}
      footer={
        <div className="flex flex-wrap justify-end gap-3">
          <Button variant="ghost" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button variant={confirmVariant} onClick={onConfirm} disabled={isLoading}>
            {isLoading ? "Working..." : confirmLabel}
          </Button>
        </div>
      }
    >
      <p className="text-sm text-slate-300">{description}</p>
    </Modal>
  );
}
