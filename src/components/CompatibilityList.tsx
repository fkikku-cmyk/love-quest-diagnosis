"use client";

import Link from "next/link";
import { PixelAvatar } from "@/components/PixelAvatar";
import { loveTypeMap } from "@/data/types";
import type { LoveType } from "@/types/diagnosis";

type CompatibilityListProps = {
  type: LoveType;
  compact?: boolean;
};

export function CompatibilityList({ type, compact = false }: CompatibilityListProps) {
  const compatibleTypes = type.compatibleTypes.slice(0, 2).map((compatible) => ({
    ...compatible,
    type: loveTypeMap[compatible.code],
  }));

  return (
    <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
      {compatibleTypes.map((compatible, index) => (
        <Link
          key={compatible.code}
          href={`/types/${compatible.code}`}
          className={`pixel-corners grid gap-3 border-2 border-[#ffd36b] bg-[#27174f] p-2 shadow-[0_4px_0_#050318] transition hover:-translate-y-0.5 hover:brightness-110 active:translate-y-1 active:shadow-none ${
            compact ? "grid-cols-[4.25rem_1fr]" : "grid-cols-[4.75rem_1fr] sm:grid-cols-1"
          }`}
        >
          <PixelAvatar type={compatible.type} />
          <div className="min-w-0">
            <p className="text-[10px] font-black tracking-[0.12em] text-[#ffd36b]">
              {index + 1}. {compatible.code}
            </p>
            <p className="mt-1 text-sm font-black leading-5 text-[#fff6d5]">{compatible.type.jobName}</p>
            <p className="mt-2 text-[11px] font-bold leading-5 text-[#eadcff]">{compatible.reason}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
