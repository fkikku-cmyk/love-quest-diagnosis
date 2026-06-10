import type { LoveType } from "@/types/diagnosis";
import type { Language } from "@/lib/language";

const firstAxis = {
  P: "あなたの情熱",
  S: "あなたの落ち着き",
} as const;

const secondAxis = {
  L: "関係を進める力",
  F: "相手に寄り添う力",
} as const;

const thirdAxis = {
  R: "ときめきを大切にする感性",
  G: "現実を整える視点",
} as const;

const fourthAxis = {
  E: "気持ちを伝える明るさ",
  I: "静かに想いを深める慎重さ",
} as const;

export function describeCompatibility(type: LoveType, compatible: LoveType, language: Language = "ja") {
  if (language === "en") {
    return `${compatible.jobName} balances ${type.jobName} well. Similar parts make the pace feel natural, while different parts help cover blind spots in love.`;
  }

  if (language === "ko") {
    return `${compatible.jobName}은 ${type.jobName}과 균형이 잘 맞아요. 비슷한 부분은 편안함을 만들고, 다른 부분은 연애의 빈틈을 자연스럽게 채워줍니다.`;
  }

  const [a1, a2, a3, a4] = type.code;
  const [b1, b2, b3, b4] = compatible.code;
  const shared: string[] = [];
  const complements: string[] = [];

  if (a1 === b1) {
    shared.push(firstAxis[a1 as keyof typeof firstAxis]);
  } else {
    complements.push("恋の速度に緩急が生まれる");
  }

  if (a2 === b2) {
    shared.push(secondAxis[a2 as keyof typeof secondAxis]);
  } else {
    complements.push("引っぱる力と支える力が噛み合う");
  }

  if (a3 === b3) {
    shared.push(thirdAxis[a3 as keyof typeof thirdAxis]);
  } else {
    complements.push("夢を見る力と暮らしを整える力が補い合う");
  }

  if (a4 === b4) {
    shared.push(fourthAxis[a4 as keyof typeof fourthAxis]);
  } else {
    complements.push("言葉にする力と深く受け止める力がバランスを取る");
  }

  if (shared.length >= 2) {
    return `${shared.slice(0, 2).join("と")}が近く、無理なく同じテンポで恋を育てられます。違う部分は${complements[0] ?? "お互いの視野を広げる"}ので、安心感と新鮮さの両方が生まれます。`;
  }

  return `${complements.slice(0, 2).join("うえ、")}ため、足りないところを自然に助け合える組み合わせです。${type.jobName}の魅力を${compatible.jobName}がやさしく受け止めてくれます。`;
}
