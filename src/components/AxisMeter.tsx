import type { AxisLetter, AxisScores } from "@/types/diagnosis";

type AxisMeterProps = {
  scores: AxisScores;
  left: AxisLetter;
  right: AxisLetter;
  leftText: string;
  rightText: string;
};

export function AxisMeter({ scores, left, right, leftText, rightText }: AxisMeterProps) {
  const diff = scores[left] - scores[right];
  const leftPercent = Math.max(0, Math.min(100, Math.round(((diff + 24) / 48) * 100)));
  const rightPercent = 100 - leftPercent;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-black text-[#eadcff]">
        <span>
          {left} {leftText}
        </span>
        <span>
          {right} {rightText}
        </span>
      </div>
      <div className="flex h-4 border-2 border-[#f7c85f] bg-[#09061f]">
        <div className="h-full bg-[#ff4f91]" style={{ width: `${leftPercent}%` }} />
        <div className="h-full bg-[#5f4aa8]" style={{ width: `${rightPercent}%` }} />
      </div>
    </div>
  );
}
