"use client";

import { useRouter } from "next/navigation";
import { PixelButton } from "@/components/PixelButton";
import { clearAnswers } from "@/lib/storage";

type StartQuestButtonProps = {
  children: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function StartQuestButton({ children, className, variant = "primary" }: StartQuestButtonProps) {
  const router = useRouter();

  function startQuest() {
    clearAnswers();
    router.push("/quiz");
  }

  return (
    <PixelButton type="button" className={className} variant={variant} onClick={startQuest}>
      {children}
    </PixelButton>
  );
}
