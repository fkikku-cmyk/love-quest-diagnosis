import type { LoveType } from "@/types/diagnosis";
import type { Language } from "@/lib/language";
import { uiText } from "@/lib/uiText";

export function buildShareText(type: LoveType, language: Language = "ja") {
  const ui = uiText[language];

  if (language === "en") {
    return `I got "${type.jobName}" in Love Quest Diagnosis.\n${type.shareCatch}\n${ui.shareQuestion} ${ui.shareHash}`;
  }

  if (language === "ko") {
    return `저는 「${type.jobName}」 타입이었어요.\n${type.shareCatch}\n${ui.shareQuestion} ${ui.shareHash}`;
  }

  return `私は「${type.jobName}」タイプでした！\n${type.shareCatch}\n${ui.shareQuestion} ${ui.shareHash}`;
}

export function buildShareUrls(type: LoveType, url: string, language: Language = "ja") {
  const text = buildShareText(type, language);
  const textWithUrl = url ? `${text}\n${url}` : text;
  const encodedTextWithUrl = encodeURIComponent(textWithUrl);

  return {
    x: `https://twitter.com/intent/tweet?text=${encodedTextWithUrl}`,
    threads: `https://www.threads.net/intent/post?text=${encodedTextWithUrl}`,
    line: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`,
  };
}
