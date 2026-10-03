"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { SupportedLang } from "@/lib/languageCodes";
import type { Region } from "@/lib/countryCodes";
import type { LatestPublishedNewsItem } from "@/lib/server/newsC1";
import founder from "@/lib/translations/founder";
import news from "@/lib/translations/news";
import stories from "@/lib/translations/stories";
import usecases from "@/lib/translations/usecases";

const EXPLORE_URL = "https://app.posted.art/explore";

function renderUseCaseTitle(title: string) {
  const [chapter, ...rest] = title.split(" — ");
  const remainder = rest.join(" — ");

  return `${chapter}${remainder ? ` — ${remainder}` : ""}`;
}

type PageClientProps = {
  region: Region;
  lang: SupportedLang;
  latestNews: LatestPublishedNewsItem | null;
};

export default function PageClient({ region, lang, latestNews }: PageClientProps) {
  const isRTL = lang === "ar";

  return (
    <div
      id="top"
      className="min-h-screen bg-black text-white flex flex-col"
      lang={lang}
    >
      <Header />
      <StoriesSection
        region={region}
        lang={lang}
        isRTL={isRTL}
      />
      <UseCasesSection
        lang={lang}
        isRTL={isRTL}
        latestNews={latestNews}
      />
    </div>
  );
}

interface StoriesSectionProps {
  region: Region;
  lang: SupportedLang;
  isRTL: boolean;
}

const themes = ["birthday", "love", "getwell"] as const;

function StoriesSection({
  region,
  lang,
  isRTL,
}: StoriesSectionProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [readyRegionCode, setReadyRegionCode] = useState<string | null>(null);

  const t = stories[lang];

  const regionCode = region.toLowerCase();
  const storyImageSources = themes.map((storyTheme) => `/stories/${storyTheme}_${regionCode}.webp`);
  const isReady = readyRegionCode === regionCode;
  const theme = themes[index];
  const story = t.stories.find((s) => s.key === theme);
  const { title, text } = story ?? { title: "", text: "" };
  const imageSrc = `/stories/${theme}_${regionCode}.webp`;

  useEffect(() => {
    let cancelled = false;

    const preloadImages = async () => {
      await Promise.all(
        storyImageSources.map(
          (src) =>
            new Promise<void>((resolve) => {
              const image = new window.Image();
              image.onload = () => resolve();
              image.onerror = () => resolve();
              image.src = src;
            }),
        ),
      );

      if (!cancelled) {
        setReadyRegionCode(regionCode);
      }
    };

    void preloadImages();

    return () => {
      cancelled = true;
    };
  }, [regionCode, storyImageSources]);

  useEffect(() => {
    if (isPaused || !isReady) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % themes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, isReady]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      <div
        className="absolute top-0 left-0 w-1/4 h-full z-30 select-none pointer-events-auto"
        style={{ touchAction: "none", WebkitUserSelect: "none", userSelect: "none" }}
        onContextMenu={(e) => e.preventDefault()}
        onPointerDown={(e) => {
          e.preventDefault();
          setIsPaused(true);
        }}
        onPointerUp={() => setIsPaused(false)}
        onPointerLeave={() => setIsPaused(false)}
      />
      {isReady ? (
        <Image
          key={imageSrc}
          src={imageSrc}
          alt={`${theme} story`}
          fill
          loading="eager"
          className="object-cover object-center transition-opacity duration-700 ease-in-out"
        />
      ) : (
        <div className="absolute inset-0 bg-black" aria-hidden />
      )}
      {isPaused && (
        <div className="absolute top-4 right-4 z-40 text-white text-2xl opacity-70" aria-label="Slideshow paused">
          ❚❚
        </div>
      )}
      <div className="absolute inset-0 flex items-end justify-center lg:justify-start lg:items-end">
        <div className="bg-black/10 p-6 lg:p-12 w-full lg:w-1/3 h-fit lg:h-full flex justify-center lg:items-center">
          <div
            className={`max-w-md w-full mx-auto lg:max-w-xl lg:mx-0 ${
                isRTL ? "text-right" : "text-center lg:text-left"
              }`}
              dir={isRTL ? "rtl" : "ltr"}
            >
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">{title}</h2>
            <p className="text-xl lg:text-2xl leading-relaxed whitespace-pre-line">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface UseCasesSectionProps {
  lang: SupportedLang;
  isRTL: boolean;
  latestNews: LatestPublishedNewsItem | null;
}

function UseCasesSection({
  lang,
  isRTL,
  latestNews,
}: UseCasesSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const t = usecases[lang];
  const newsTranslation = news[lang];
  const founderTranslation = founder[lang];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [isPaused]);

  return (
    <section className="w-full flex flex-col">

            {/* Use Case 1 – Explore */}
      <div className="bg-black text-white py-24 lg:py-32">
        <div className="mx-auto px-4 lg:px-12 text-center lg:text-left flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          <div className="w-full lg:w-1/2">
            <div
              className={`${isRTL ? "text-right" : "text-center lg:text-left"}`}
              dir={isRTL ? "rtl" : "ltr"}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold mb-4">
                {renderUseCaseTitle(t.usecases[0].title)}
              </h3>
              <p className="text-xl lg:text-2xl leading-loose max-w-xl mx-auto lg:mx-0 mb-6">
                {t.usecases[0].text}
              </p>
              <a
                href={EXPLORE_URL}
                className="text-xl lg:text-2xl border border-white rounded-full px-8 lg:px-10 py-2 lg:py-2.5 hover:bg-white hover:text-black transition"
              >
                Get Posted
              </a>
            </div>
           </div>
          <div className="w-full lg:w-1/2">
            <Image src="/usecases/usecase_explore.webp" alt="Explore" width={1254} height={1254} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>

      {/* Use Case 2 – Write */}
      <div className="bg-white text-black py-24 lg:py-32">
        <div className="mx-auto px-4 lg:px-12 text-center lg:text-left flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-10">
          <div className="w-full lg:w-1/2">
            <div
              className={`${isRTL ? "text-right" : "text-center lg:text-left"}`}
              dir={isRTL ? "rtl" : "ltr"}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold mb-4">
                {renderUseCaseTitle(t.usecases[1].title)}
              </h3>
              <p className="text-xl lg:text-2xl leading-loose max-w-xl mx-auto lg:mx-0 mb-6">
                {t.usecases[1].text}
              </p>
              <a
                href={EXPLORE_URL}
                className="text-xl lg:text-2xl border border-black rounded-full px-8 lg:px-10 py-2 lg:py-2.5 hover:bg-black hover:text-white transition"
              >
                Get Posted
              </a>
            </div>
           </div>
          <div className="w-full lg:w-1/2">
            <Image src="/usecases/usecase_write.webp" alt="Write" width={1254} height={1254} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>

      {/* Use Case 3 – Gift */}
      <div className="bg-white text-black py-24 lg:py-32">
        <div className="mx-auto px-4 lg:px-12 text-center lg:text-left flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          <div className="w-full lg:w-1/2">
            <div
              className={`${isRTL ? "text-right" : "text-center lg:text-left"}`}
              dir={isRTL ? "rtl" : "ltr"}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold mb-4">
                {renderUseCaseTitle(t.usecases[2].title)}
              </h3>
              <p className="text-xl lg:text-2xl leading-loose max-w-xl mx-auto lg:mx-0 mb-6">
                {t.usecases[2].text}
              </p>
              <a
                href={EXPLORE_URL}
                className="text-xl lg:text-2xl border border-black rounded-full px-8 lg:px-10 py-2 lg:py-2.5 hover:bg-black hover:text-white transition"
              >
                Get Posted
              </a>
            </div>
           </div>
          <div className="w-full lg:w-1/2">
            <Image src="/usecases/usecase_gift.webp" alt="Gift" width={1254} height={1254} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>

      {/* Use Case 4 – Earn */}
      <div className="bg-black text-white py-24 lg:py-32">
        <div className="mx-auto px-4 lg:px-12 text-center lg:text-left flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-10">
          <div className="w-full lg:w-1/2">
            <div
              className={`${isRTL ? "text-right" : "text-center lg:text-left"}`}
              dir={isRTL ? "rtl" : "ltr"}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold mb-4">
                {renderUseCaseTitle(t.usecases[4].title)}
              </h3>
              <p className="text-xl lg:text-2xl leading-loose max-w-xl mx-auto lg:mx-0 mb-6">
                {t.usecases[4].text}
              </p>
              <a
                href={EXPLORE_URL}
                className="text-xl lg:text-2xl border border-white rounded-full px-8 lg:px-10 py-2 lg:py-2.5 hover:bg-white hover:text-black transition"
              >
                Get Posted
              </a>
            </div>
           </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[520px] lg:max-w-[560px] xl:max-w-[620px]">
              <div
                className="absolute top-0 left-0 w-1/4 h-full z-30 select-none pointer-events-auto"
                style={{ touchAction: "none", WebkitUserSelect: "none", userSelect: "none" }}
                onContextMenu={(e) => e.preventDefault()}
                onPointerDown={(e) => {
                  e.preventDefault();
                  setIsPaused(true);
                }}
                onPointerUp={() => setIsPaused(false)}
                onPointerLeave={() => setIsPaused(false)}
              />
              <div className="overflow-hidden rounded-lg shadow-lg aspect-[9/15.5]">
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src="/usecases/usecase_earn.mp4" type="video/mp4" />
                </video>
              </div>
              {isPaused && (
                <div
                  className="absolute top-4 right-10 z-40 text-white text-2xl opacity-70"
                  aria-label="Video paused"
                >
                  ❚❚
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          id="latest-news"
          className={`mx-auto mt-16 w-full max-w-[480px] scroll-mt-24 px-6 lg:max-w-none lg:px-12 ${isRTL ? "text-right" : "text-center lg:text-left"}`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <p
            className={`${latestNews ? "mb-3" : "mb-6"} text-sm font-semibold uppercase tracking-[0.16em] text-white/55`}
          >
            {newsTranslation.latestNewsLabel}
          </p>
          {latestNews && (
            <h3 className="mx-auto mb-6 max-w-sm text-2xl font-semibold leading-snug text-white lg:mx-0 lg:text-3xl">
              {latestNews.title}
            </h3>
          )}
          <Link
            href="/news"
            className="inline-flex rounded-full border border-white px-6 py-1.5 text-base text-white transition hover:bg-white hover:text-black lg:px-7 lg:py-2 lg:text-lg"
          >
            Read News
          </Link>
        </div>
        <div
          id="founder-message"
          className={`mx-auto mt-16 w-full max-w-[480px] scroll-mt-24 px-6 lg:max-w-none lg:px-12 ${isRTL ? "text-right" : "text-center lg:text-left"}`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
            {founderTranslation.eyebrow}
          </p>
          <h3 className="mx-auto mb-6 max-w-sm text-2xl font-semibold leading-snug text-white lg:mx-0 lg:text-3xl">
            {founderTranslation.title}
          </h3>
          <Link
            href={lang === "en" ? "/founder" : `/founder?language=${lang}`}
            className="inline-flex rounded-full border border-white px-6 py-1.5 text-base text-white transition hover:bg-white hover:text-black lg:px-7 lg:py-2 lg:text-lg"
          >
            Read the Message
          </Link>
        </div>
      </div>

      <Footer tagline={t.tagline} />
    </section>
  );
}
