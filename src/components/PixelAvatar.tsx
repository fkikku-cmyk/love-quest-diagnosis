"use client";

import Image from "next/image";
import { useState } from "react";
import type { LoveType } from "@/types/diagnosis";

type PixelAvatarProps = {
  type: LoveType;
  variant?: "card" | "hero";
  className?: string;
};

const sizes = {
  card: "(max-width: 430px) 42vw, 180px",
  hero: "(max-width: 430px) 72vw, 320px",
};

export function PixelAvatar({ type, variant = "card", className = "" }: PixelAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div
      className={`pixel-corners relative aspect-square overflow-hidden border-2 border-[#fff6d5] bg-[#fff1c8] shadow-[inset_0_0_0_3px_rgba(255,155,193,0.35)] ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${type.themeColor} opacity-20`} />
      {hasImageError ? (
        <div className="absolute inset-2 grid place-items-center border-2 border-dashed border-[#ffd36b] bg-[#17113a]/85 text-center text-xs font-black leading-5 text-[#ffd36b]">
          NO IMAGE
          <span className="block text-[#ff9bc1]">{type.code}</span>
        </div>
      ) : (
        <Image
          src={type.imageSrc}
          alt={`${type.jobName}のキャラクター画像`}
          fill
          priority={variant === "hero"}
          sizes={sizes[variant]}
          className="object-contain p-2 [image-rendering:pixelated]"
          onError={() => setHasImageError(true)}
        />
      )}
    </div>
  );
}
