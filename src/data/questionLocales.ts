import type { Language } from "@/lib/language";
import type { Question } from "@/types/diagnosis";

type QuestionLocale = Pick<Question, "text" | "leftLabel" | "rightLabel">;

const en: Record<number, QuestionLocale> = {
  1: { text: "When I think I might like someone, my feelings start moving pretty quickly.", leftLabel: "Slowly", rightLabel: "All in" },
  2: { text: "At the start of romance, I want to trust momentum and intuition.", leftLabel: "Trust first", rightLabel: "Intuition first" },
  3: { text: "I prefer relationships to grow at a pace that feels safe, not rushed.", leftLabel: "Momentum", rightLabel: "Safety" },
  4: { text: "Before becoming partners, I want to understand what kind of person they are.", leftLabel: "Jump in", rightLabel: "Observe" },
  5: { text: "When I want to see someone, I take action to make plans.", leftLabel: "Wait and see", rightLabel: "Take action" },
  6: { text: "In love, a calming atmosphere matters more to me than constant excitement.", leftLabel: "Excitement", rightLabel: "Calm" },
  7: { text: "For dates, I am more likely to suggest places myself.", leftLabel: "Go along", rightLabel: "Suggest" },
  8: { text: "If the mood is good, I can bring up the next plan myself.", leftLabel: "Wait", rightLabel: "Invite" },
  9: { text: "I often move while checking whether the other person is enjoying themselves.", leftLabel: "Lead", rightLabel: "Support" },
  10: { text: "When we disagree, I want to hear their thoughts first.", leftLabel: "Decide", rightLabel: "Listen" },
  11: { text: "Even in romance, I clearly say what I want.", leftLabel: "Read the room", rightLabel: "Say it" },
  12: { text: "I am good at noticing small changes and supporting someone.", leftLabel: "Guide", rightLabel: "Support" },
  13: { text: "I want romance to have butterflies and a special story-like feeling.", leftLabel: "Realistic", rightLabel: "Story-like" },
  14: { text: "Chance meetings and fate-like moments move my heart.", leftLabel: "Conditions", rightLabel: "Fate" },
  15: { text: "When checking compatibility, daily rhythm and money values matter too.", leftLabel: "Spark", rightLabel: "Lifestyle" },
  16: { text: "For a long relationship, I want to know if our future views align.", leftLabel: "Now", rightLabel: "Future" },
  17: { text: "Anniversaries and surprises make me pretty happy.", leftLabel: "Natural", rightLabel: "Special" },
  18: { text: "I think not only about liking someone, but whether it can continue without strain.", leftLabel: "Feelings", rightLabel: "Sustainable" },
  19: { text: "My affection tends to show clearly through words or actions.", leftLabel: "Keep inside", rightLabel: "Show it" },
  20: { text: "When I am happy or lonely, I want to tell the other person properly.", leftLabel: "After sorting", rightLabel: "Right away" },
  21: { text: "The more important a feeling is, the harder it is to say immediately.", leftLabel: "Say it quickly", rightLabel: "Careful" },
  22: { text: "Even while dating, I need time alone to sort out my feelings.", leftLabel: "Share", rightLabel: "Reflect" },
  23: { text: "I am good at giving compliments and showing appreciation.", leftLabel: "Shy", rightLabel: "Express" },
  24: { text: "Around someone I like, I get a little shy and careful.", leftLabel: "Open", rightLabel: "Shy" },
};

const ko: Record<number, QuestionLocale> = {
  1: { text: "좋아할지도 모른다고 느끼면 마음이 비교적 빨리 움직인다.", leftLabel: "천천히", rightLabel: "직진" },
  2: { text: "연애의 시작은 흐름과 직감을 믿고 싶다.", leftLabel: "신뢰 먼저", rightLabel: "직감 먼저" },
  3: { text: "관계는 서두르지 않고 안심되는 속도로 키우고 싶다.", leftLabel: "기세", rightLabel: "안심" },
  4: { text: "연인이 되기 전, 상대가 어떤 사람인지 충분히 알고 싶다.", leftLabel: "뛰어들기", rightLabel: "지켜보기" },
  5: { text: "보고 싶다고 느끼면 약속을 만들기 위해 움직인다.", leftLabel: "상황 보기", rightLabel: "움직이기" },
  6: { text: "연애에서는 자극보다 편안한 분위기가 더 중요하다.", leftLabel: "자극", rightLabel: "편안함" },
  7: { text: "데이트 장소는 내가 먼저 후보를 내는 편이다.", leftLabel: "맞추기", rightLabel: "제안하기" },
  8: { text: "분위기가 좋으면 다음 약속을 내가 먼저 꺼낼 수 있다.", leftLabel: "기다리기", rightLabel: "권하기" },
  9: { text: "상대가 즐거운지 살피며 행동하는 일이 많다.", leftLabel: "이끌기", rightLabel: "배려하기" },
  10: { text: "의견이 다를 때는 먼저 상대의 생각을 듣고 싶다.", leftLabel: "정하기", rightLabel: "듣기" },
  11: { text: "연애에서도 내가 원하는 것을 분명히 말한다.", leftLabel: "분위기 읽기", rightLabel: "말하기" },
  12: { text: "상대의 작은 변화를 알아차리고 챙겨주는 편이다.", leftLabel: "이끌기", rightLabel: "챙기기" },
  13: { text: "연애에는 설렘과 이야기 같은 특별함이 있었으면 한다.", leftLabel: "현실감", rightLabel: "스토리" },
  14: { text: "우연한 만남이나 운명 같은 순간에 마음이 움직인다.", leftLabel: "조건", rightLabel: "운명" },
  15: { text: "궁합을 볼 때 생활 리듬이나 돈에 대한 감각도 중요하다.", leftLabel: "설렘", rightLabel: "생활감" },
  16: { text: "오래 만나려면 미래에 대한 생각이 맞는지 보고 싶다.", leftLabel: "지금의 감정", rightLabel: "미래" },
  17: { text: "기념일이나 서프라이즈에 꽤 마음이 설렌다.", leftLabel: "자연스럽게", rightLabel: "특별하게" },
  18: { text: "좋아하는 마음뿐 아니라 무리 없이 이어질지도 생각한다.", leftLabel: "감정 우선", rightLabel: "지속성" },
  19: { text: "좋아하는 마음은 말이나 행동으로 비교적 잘 드러난다.", leftLabel: "마음속에", rightLabel: "표현하기" },
  20: { text: "기쁘거나 외로울 때는 상대에게 제대로 전하고 싶다.", leftLabel: "정리 후", rightLabel: "바로 말하기" },
  21: { text: "정말 중요한 마음일수록 바로 말로 꺼내기 어렵다.", leftLabel: "바로 말함", rightLabel: "신중함" },
  22: { text: "연애 중에도 혼자 마음을 정리할 시간이 필요하다.", leftLabel: "공유하고 싶음", rightLabel: "생각하고 싶음" },
  23: { text: "상대를 칭찬하거나 고마움을 전하는 것이 어렵지 않다.", leftLabel: "쑥스러움", rightLabel: "표현함" },
  24: { text: "좋아하는 사람 앞에서는 조금 쑥스럽고 신중해진다.", leftLabel: "솔직히 표현", rightLabel: "쑥스러움" },
};

export function getQuestionLocale(question: Question, language: Language): QuestionLocale {
  if (language === "en") {
    return en[question.id];
  }

  if (language === "ko") {
    return ko[question.id];
  }

  return {
    text: question.text,
    leftLabel: question.leftLabel,
    rightLabel: question.rightLabel,
  };
}
