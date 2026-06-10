type StatBarProps = {
  label: string;
  value: number;
  variant?: "bar" | "stars";
};

function clampStat(value: number) {
  return Math.max(1, Math.min(5, value));
}

export function StatBar({ label, value, variant = "bar" }: StatBarProps) {
  const safeValue = clampStat(value);

  if (variant === "stars") {
    return (
      <div className="grid grid-cols-[4.5rem_1fr] items-center gap-2 text-xs font-black">
        <span className="text-[#fff6d5]">{label}</span>
        <span className="tracking-[0.16em] text-[#ffd36b]">
          {"★".repeat(safeValue)}
          {"☆".repeat(5 - safeValue)}
        </span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[4.5rem_1fr_1.5rem] items-center gap-2">
      <span className="text-xs font-black text-[#ffd36b]">{label}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={`${label}-${index}`}
            className={`h-3 flex-1 border border-[#fff6d5] ${
              index < safeValue ? "bg-[#ff9bc1]" : "bg-[#09061f]"
            }`}
          />
        ))}
      </div>
      <span className="text-right text-xs font-black text-[#fff6d5]">{safeValue}</span>
    </div>
  );
}
