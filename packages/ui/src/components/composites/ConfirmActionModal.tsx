import { Button } from "../button/Button";
import { Modal } from "../modal/Modal";

type ConfirmActionModalProps = {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmTone?: "primary" | "danger" | "neutral";
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
  confirmTone = "primary",
  isLoading,
  onCancel,
  onConfirm,
}: ConfirmActionModalProps) {
  return (
    <Modal
      open={open}
      title={title}
      description={description}
      onClose={onCancel}
      footer={
        <div className="flex flex-wrap justify-end gap-3">
          <Button variant="ghost" tone="neutral" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button tone={confirmTone} onClick={onConfirm} isLoading={isLoading}>
            {confirmLabel}
          </Button>
        </div>
      }
    />
  );
}
