import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type PixelButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "border-[#ffd36b] bg-[#ff4f91] text-white shadow-[0_5px_0_#6f173f]",
  secondary: "border-[#ffd36b] bg-[#5f4aa8] text-[#fff6d5] shadow-[0_5px_0_#20123f]",
  ghost: "border-[#f7c85f] bg-[#17113a] text-[#fff6d5] shadow-[0_5px_0_#050318]",
};

export function PixelButton({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: PixelButtonProps) {
  const classes = `pixel-corners inline-flex min-h-12 items-center justify-center border-2 px-4 py-3 text-center text-sm font-black uppercase tracking-normal transition hover:brightness-110 active:translate-y-1 active:shadow-none ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
