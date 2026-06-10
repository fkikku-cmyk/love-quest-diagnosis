type QuestHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function QuestHeader({ eyebrow, title, description }: QuestHeaderProps) {
  return (
    <header className="space-y-3 text-center">
      <p className="text-xs font-black tracking-[0.18em] text-[#ffd36b]">{eyebrow}</p>
      <h1 className="text-4xl font-black leading-tight text-[#fff6d5] drop-shadow-[0_3px_0_#6f173f]">
        {title}
      </h1>
      {description ? <p className="text-sm font-bold leading-7 text-[#eadcff]">{description}</p> : null}
    </header>
  );
}
