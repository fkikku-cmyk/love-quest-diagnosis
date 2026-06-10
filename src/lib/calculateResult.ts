import { questions } from "@/data/questions";
import type {
  AnswerMap,
  AxisLetter,
  AxisScores,
  DiagnosisResult,
  Question,
  TypeCode,
} from "@/types/diagnosis";

const initialScores: AxisScores = {
  P: 0,
  S: 0,
  L: 0,
  F: 0,
  R: 0,
  G: 0,
  E: 0,
  I: 0,
};

const oppositeMap: Record<AxisLetter, AxisLetter> = {
  P: "S",
  S: "P",
  L: "F",
  F: "L",
  R: "G",
  G: "R",
  E: "I",
  I: "E",
};

function scoreQuestion(scores: AxisScores, question: Question, answer: number) {
  const positive = question.positiveType;
  const negative = oppositeMap[positive];

  scores[positive] += answer - 3;
  scores[negative] += 3 - answer;
}

export function calculateResult(answers: AnswerMap): DiagnosisResult {
  const scores: AxisScores = { ...initialScores };

  questions.forEach((question) => {
    const answer = answers[question.id];
    if (answer) {
      scoreQuestion(scores, question, answer);
    }
  });

  const ps = scores.P > scores.S ? "P" : "S";
  const lf = scores.L > scores.F ? "L" : "F";
  const rg = scores.R > scores.G ? "R" : "G";
  const ei = scores.E > scores.I ? "E" : "I";
  const code = `${ps}${lf}${rg}${ei}` as TypeCode;

  return {
    code,
    scores,
    letters: {
      PS: ps,
      LF: lf,
      RG: rg,
      EI: ei,
    },
  };
}

export function isQuizComplete(answers: AnswerMap) {
  return questions.every((question) => answers[question.id]);
}
