import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "プライバシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[430px] px-4 pb-8 pt-2">
      <div className="pixel-corners border-2 border-[#5f4aa8] bg-[#09061f]/80 px-4 py-3 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-black text-[#ffd36b]">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#ff9bc1]">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-2 text-[10px] font-bold text-[#eadcff]">© ラブクエスト診断</p>
      </div>
    </footer>
  );
}
