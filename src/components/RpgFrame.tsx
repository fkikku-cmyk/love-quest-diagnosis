import type { ReactNode } from "react";

type RpgFrameProps = {
  children: ReactNode;
  className?: string;
};

export function RpgFrame({ children, className = "" }: RpgFrameProps) {
  return (
    <div
      className={`pixel-corners border-4 border-[#ffd36b] bg-[#ff9bc1] p-1 shadow-[0_8px_0_#050318,0_0_24px_rgba(255,155,193,0.28)] ${className}`}
    >
      <div className="pixel-corners border-2 border-[#7d5bd6] bg-[#17113a]/95 p-4">
        {children}
      </div>
    </div>
  );
}
