type QuizProgressProps = {
  current: number;
  total: number;
};

export function QuizProgress({ current, total }: QuizProgressProps) {
  const width = `${Math.round((current / total) * 100)}%`;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-black text-[#ffd36b]">
        <span>QUEST {current}</span>
        <span>{total}</span>
      </div>
      <div className="h-4 border-2 border-[#f7c85f] bg-[#09061f] p-0.5">
        <div className="h-full bg-[#ff4f91]" style={{ width }} />
      </div>
    </div>
  );
}
