export type Language = "ja" | "en" | "ko";

export const languages: Array<{
  code: Language;
  label: string;
}> = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "ko", label: "한국어" },
];

export const defaultLanguage: Language = "ja";
