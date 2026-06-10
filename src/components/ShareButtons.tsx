"use client";

import { useEffect, useState } from "react";
import { PixelButton } from "@/components/PixelButton";
import { useLanguage } from "@/components/LanguageProvider";
import { buildShareText, buildShareUrls } from "@/lib/share";
import { uiText } from "@/lib/uiText";
import type { LoveType } from "@/types/diagnosis";

type ShareButtonsProps = {
  type: LoveType;
};

export function ShareButtons({ type }: ShareButtonsProps) {
  const { language } = useLanguage();
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [message, setMessage] = useState("");
  const url = typeof window === "undefined" ? "" : window.location.href;
  const text = buildShareText(type, language);
  const urls = buildShareUrls(type, url, language);
  const ui = uiText[language];

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && Boolean(navigator.share));
  }, []);

  async function shareResult() {
    if (!canNativeShare) {
      window.open(urls.x, "_blank", "noopener,noreferrer");
      return;
    }

    await navigator.share({
      title: "ラブクエスト診断",
      text,
      url,
    });
  }

  async function copyText() {
    if (!navigator.clipboard) {
      setMessage(ui.screenshotHint);
      return;
    }

    await navigator.clipboard.writeText(`${text} ${url}`);
    setMessage(ui.copy);
  }

  return (
    <div className="mx-auto grid max-w-[390px] gap-2">
      {canNativeShare ? (
        <button
          type="button"
          className="pixel-corners inline-flex min-h-12 items-center justify-center border-2 border-[#ffd36b] bg-[#09061f] px-4 py-3 text-center text-sm font-black text-white shadow-[0_5px_0_#050318] active:translate-y-1 active:shadow-none"
          onClick={shareResult}
        >
          {ui.shareNative}
        </button>
      ) : null}

      <a
        className="pixel-corners inline-flex min-h-12 items-center justify-center border-2 border-[#ffd36b] bg-[#ff4f91] px-4 py-3 text-center text-sm font-black text-white shadow-[0_5px_0_#6f173f] active:translate-y-1 active:shadow-none"
        href={urls.x}
        target="_blank"
        rel="noreferrer"
      >
        {ui.shareX}
      </a>

      <div className="grid grid-cols-2 gap-2">
        <a
          className="pixel-corners inline-flex min-h-12 items-center justify-center border-2 border-[#ffd36b] bg-[#2a174f] px-3 py-2 text-xs font-black text-white shadow-[0_4px_0_#050318] active:translate-y-1 active:shadow-none"
          href={urls.threads}
          target="_blank"
          rel="noreferrer"
        >
          {ui.shareThreads}
        </a>
        <PixelButton type="button" variant="ghost" className="min-h-12 px-3 py-2 text-xs" onClick={copyText}>
          {ui.copy}
        </PixelButton>
      </div>

      {message ? <p className="text-center text-xs font-bold leading-5 text-[#ffd36b]">{message}</p> : null}
    </div>
  );
}
