"use client";

import { useEffect, useState } from "react";
import { TypeCard } from "@/components/TypeCard";
import { loveTypes } from "@/data/types";
import { loadResult } from "@/lib/storage";
import type { TypeCode } from "@/types/diagnosis";

export function TypeGallery() {
  const [currentCode, setCurrentCode] = useState<TypeCode | null>(null);

  useEffect(() => {
    const result = loadResult();
    setCurrentCode(result?.code ?? null);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3">
      {loveTypes.map((type) => (
        <TypeCard key={type.code} type={type} isCurrent={type.code === currentCode} />
      ))}
    </div>
  );
}
