interface EmptyTaskSlotProps {
  className?: string;
}

export function EmptyTaskSlot({ className = '' }: EmptyTaskSlotProps) {
  return (
    <div
      className={`p-4 mb-4 rounded-xl border-1 border-dashed border-grayLight min-h-[216px] ${className}`}
    />
  );
}
