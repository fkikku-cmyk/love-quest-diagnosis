export type AxisKey = "PS" | "LF" | "RG" | "EI";

export type AxisLetter = "P" | "S" | "L" | "F" | "R" | "G" | "E" | "I";

export type TypeCode = `${"P" | "S"}${"L" | "F"}${"R" | "G"}${"E" | "I"}`;

export type AnswerValue = 1 | 2 | 3 | 4 | 5;

export type Question = {
  id: number;
  axis: AxisKey;
  positiveType: AxisLetter;
  text: string;
  leftLabel: string;
  rightLabel: string;
};

export type AnswerMap = Record<number, AnswerValue>;

export type AxisScores = Record<AxisLetter, number>;

export type DiagnosisResult = {
  code: TypeCode;
  scores: AxisScores;
  letters: {
    PS: "P" | "S";
    LF: "L" | "F";
    RG: "R" | "G";
    EI: "E" | "I";
  };
};

export type Rarity = "N" | "R" | "SR" | "SSR";

export type LoveStats = {
  passion: number;
  loyalty: number;
  sweetness: number;
  stability: number;
  romance: number;
  strategy: number;
};

export type CompatibleType = {
  code: TypeCode;
  reason: string;
};

export type LoveType = {
  code: TypeCode;
  jobName: string;
  title: string;
  description: string;
  longDescription: string;
  personality: string;
  loveStyle: string;
  communicationStyle: string;
  appealPoint: string;
  weakPointDetail: string;
  advice: string;
  rarity: Rarity;
  shareCatch: string;
  viralComment: string;
  stats: LoveStats;
  strengths: string[];
  weaknesses: string[];
  compatibleTypes: CompatibleType[];
  imageSrc: string;
  themeColor: string;
};
