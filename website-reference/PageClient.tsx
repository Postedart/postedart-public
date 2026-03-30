"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { type SupportedLang } from "@/lib/languageCodes";
import type { Region } from "@/lib/countryCodes";
import stories from "@/lib/stories";
import usecases from "@/lib/usecases";
import { FaXTwitter, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa6";
import { SiEthereum, SiSolana } from "react-icons/si";

export default function PageClient({ region, lang }: { region: Region; lang: SupportedLang }) {
  const isRTL = lang === "ar";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <StoriesSection region={region} lang={lang} isRTL={isRTL} />
      <UseCasesSection region={region} lang={lang} isRTL={isRTL} />
    </div>
  );
}

interface StoriesSectionProps {
  region: Region;
  lang: SupportedLang;
  isRTL: boolean;
}

const themes = ["birthday", "love", "getwell"] as const;

function StoriesSection({ region, lang, isRTL }: StoriesSectionProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const t = stories[lang];

  const regionCode = region.toLowerCase();
  const theme = themes[index];
  const story = t.stories.find((s) => s.key === theme);
  const { title, text } = story ?? { title: "", text: "" };
  const imageSrc = `/stories/${theme}_${regionCode}.webp`;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % themes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

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
      <Image src={imageSrc} alt={`${theme} story`} fill className="object-cover object-center transition-opacity duration-700 ease-in-out" priority />
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
  region: Region;
  lang: SupportedLang;
  isRTL: boolean;
}

function UseCasesSection({ region, lang, isRTL }: UseCasesSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const t = usecases[lang];

  function assertNever(x: never): never {
    throw new Error(`Unhandled region: ${String(x)}`)
  }

  function shareVideoForRegion(r: Region): string {
    switch (r) {
      case "CEE":
      case "EU":
        return "/usecases/usecase_share_EUR.mp4"
      case "IND":
        return "/usecases/usecase_share_INR.mp4"
      case "CHI":
        return "/usecases/usecase_share_CNY.mp4"
      case "ANZ":
        return "/usecases/usecase_share_AUD.mp4"
      case "JPKR":
        return "/usecases/usecase_share_SGD.mp4"
      case "LATAM":
      case "AFR":
      case "ME":
      case "NA":
        return "/usecases/usecase_share_USD.mp4"
      default:
        return assertNever(r)
    }
  }

  const shareVideoSrc = shareVideoForRegion(region)

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
                {t.usecases[0].title}
              </h3>
              <p className="text-xl lg:text-2xl leading-loose max-w-xl mx-auto lg:mx-0 mb-6">
                {t.usecases[0].text}
              </p>
              <button
                className="text-xl lg:text-2xl border border-white rounded-full px-8 lg:px-10 py-2 lg:py-2.5 hover:bg-white hover:text-black transition"
                onClick={() => window.location.href = 'https://app.posted.art/explore'}
              >
                Get Posted
              </button>
            </div>
           </div>
          <div className="w-full lg:w-1/2">
            <Image src="/usecases/usecase_explore_black.webp" alt="Explore" width={800} height={600} className="w-full h-auto rounded-lg" />
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
                {t.usecases[1].title}
              </h3>
              <p className="text-xl lg:text-2xl leading-loose max-w-xl mx-auto lg:mx-0 mb-6">
                {t.usecases[1].text}
              </p>
              <button
                className="text-xl lg:text-2xl border border-black rounded-full px-8 lg:px-10 py-2 lg:py-2.5 hover:bg-black hover:text-white transition"
                onClick={() => window.location.href = 'https://app.posted.art/explore'}
              >
                Get Posted
              </button>
            </div>
           </div>
          <div className="w-full lg:w-1/2">
            <Image src="/usecases/usecase_write_white.webp" alt="Write" width={800} height={600} className="w-full h-auto rounded-lg" />
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
                {t.usecases[2].title}
              </h3>
              <p className="text-xl lg:text-2xl leading-loose max-w-xl mx-auto lg:mx-0 mb-6">
                {t.usecases[2].text}
              </p>
              <button
                className="text-xl lg:text-2xl border border-black rounded-full px-8 lg:px-10 py-2 lg:py-2.5 hover:bg-black hover:text-white transition"
                onClick={() => window.location.href = 'https://app.posted.art/explore'}
              >
                Get Posted
              </button>
            </div>
           </div>
          <div className="w-full lg:w-1/2">
            <Image src="/usecases/usecase_gift_white.webp" alt="Gift" width={800} height={600} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>

      {/* Use Case 4 – Share */}
      <div className="bg-black text-white py-24 lg:py-32">
        <div className="mx-auto px-4 lg:px-12 text-center lg:text-left flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-10">
          <div className="w-full lg:w-1/2">
            <div
              className={`${isRTL ? "text-right" : "text-center lg:text-left"}`}
              dir={isRTL ? "rtl" : "ltr"}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold mb-4">
                {t.usecases[3].title}
              </h3>
              <p className="text-xl lg:text-2xl leading-loose max-w-xl mx-auto lg:mx-0 mb-6">
                {t.usecases[3].text}
              </p>
              <button
                className="text-xl lg:text-2xl border border-white rounded-full px-8 lg:px-10 py-2 lg:py-2.5 hover:bg-white hover:text-black transition"
                onClick={() => window.location.href = 'https://app.posted.art/explore'}
              >
                Get Posted
              </button>
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
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                className="w-full rounded-lg shadow-lg"
              >
                <source src={shareVideoSrc} type="video/mp4" />
              </video>
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
      </div>

      {/* Use Case 5 – Earn */}
      <div className="bg-black text-white py-24 lg:py-32">
        <div className="mx-auto px-4 lg:px-12 text-center lg:text-left flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          <div className="w-full lg:w-1/2">
            <div
              className={`${isRTL ? "text-right" : "text-center lg:text-left"}`}
              dir={isRTL ? "rtl" : "ltr"}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold mb-4">
                {t.usecases[4].title}
              </h3>
              <p className="text-xl lg:text-2xl leading-loose max-w-xl mx-auto lg:mx-0 mb-6">
                {t.usecases[4].text}
              </p>
              <button
                className="text-xl lg:text-2xl border border-white rounded-full px-8 lg:px-10 py-2 lg:py-2.5 hover:bg-white hover:text-black transition"
                onClick={() => window.location.href = 'https://app.posted.art/explore'}
              >
                Get Posted
              </button>
            </div>
           </div>
          <div className="w-full lg:w-1/2">
            <Image src="/usecases/usecase_xpposted_black.webp" alt="xpPOSTED" width={800} height={600} className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-black text-white py-24 px-4">
        <div className="mx-auto px-4 lg:px-12 text-center lg:text-left">
          <div className="mb-6">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top" className="focus:outline-none cursor-pointer">
              <img src="/logos/postedart_logo_bg-black_wide.svg" alt="Posted.art logo" className="mx-auto lg:mx-0 lg:-ml-8 w-full max-w-[300px] h-auto" />
            </button>
          </div>
          <p className="text-xl lg:text-2xl leading-loose mb-4">
            {t.tagline}
          </p>
          <p className="text-xl lg:text-2xl mb-4">
          <a href="mailto:hello@posted.art" className="underline">hello@posted.art</a>
          </p>
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-xl text-white">
            <a href="https://x.com/Posteddotart" target="_blank" rel="noopener noreferrer" aria-label="X"><FaXTwitter /></a>
            <a href="https://www.instagram.com/posteddotart/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
            <a href="https://github.com/Postedart" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://app.ens.domains/postedart.eth" target="_blank" rel="noopener noreferrer" aria-label="ENS"><SiEthereum /></a>
            <a href="https://www.sns.id/domain/postedart" target="_blank" rel="noopener noreferrer" aria-label="SNS"><SiSolana /></a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-6 text-sm">
        <div className="border-t border-gray-800 pt-6 w-full px-4 lg:px-2 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Posted.art. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </footer>

    </section>
  );
}