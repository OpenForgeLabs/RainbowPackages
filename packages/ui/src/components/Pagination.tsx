import { Button } from "../primitives/Button";

type PaginationProps = {
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export function Pagination({ hasPrevious, hasNext, onPrevious, onNext }: PaginationProps) {
  return (
    <div className="flex items-center gap-2">
      <Button variant="secondary" onClick={onPrevious} disabled={!hasPrevious}>
        Prev
      </Button>
      <Button variant="accent" onClick={onNext} disabled={!hasNext}>
        Next
      </Button>
    </div>
  );
}
