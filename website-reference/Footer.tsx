import Link from "next/link";
import { FaApple, FaGoogle, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { SiFarcaster } from "react-icons/si";

const DOCS_URL = "/docs";
const APP_STORE_URL =
  "https://apps.apple.com/app/posted-art/id6783222298";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=art.posted.android";
const LINKEDIN_URL =
  "https://www.linkedin.com/company/postedart";
const TELEGRAM_URL =
  "https://t.me/postedart_bot/postedart";
const FARCASTER_URL =
  "https://farcaster.xyz/miniapps/kp_oJ_b8QVNU/postedart";
const INSTAGRAM_URL =
  "https://www.instagram.com/posteddotart/";
const DEFAULT_TAGLINE =
  "Send a gift. Wrap it in art. A forever card, only on Posted.art";

type FooterProps = {
  tagline?: string;
};

const footerIconLinkClass =
  "inline-flex h-8 w-8 items-center justify-center rounded-full text-xl text-white/90 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:h-10 sm:w-10 sm:text-2xl";

export default function Footer({ tagline = DEFAULT_TAGLINE }: FooterProps) {
  return (
    <>
      {/* About Section */}
      <div className="bg-black text-white py-24 px-4">
        <div className="mx-auto px-4 lg:px-12 text-center lg:text-left">
          <div className="mb-6">
            <a
              href="#top"
              aria-label="Scroll to top"
              className="focus:outline-none cursor-pointer"
            >
              <img
                src="/logos/postedart_logo_bg-black_wide.svg"
                alt="Posted.art logo"
                className="mx-auto lg:mx-0 lg:-ml-8 w-full max-w-[300px] h-auto"
              />
            </a>
          </div>
          <p className="text-xl lg:text-2xl leading-loose mb-4">
            {tagline}
          </p>
          <p className="text-xl lg:text-2xl mb-4">
            <a href="mailto:hello@posted.art" className="underline">hello@posted.art</a>
          </p>
          <div className="mt-10 flex flex-nowrap items-center justify-center gap-2 text-white sm:gap-4 lg:justify-start">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="App Store" className={footerIconLinkClass}><FaApple className="text-[1.12em]" /></a>
            <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Google Play" className={footerIconLinkClass}><FaGoogle className="text-[0.88em]" /></a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className={footerIconLinkClass}><FaTelegram /></a>
            <a href={FARCASTER_URL} target="_blank" rel="noopener noreferrer" aria-label="Farcaster" className={footerIconLinkClass}><SiFarcaster /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={footerIconLinkClass}><FaInstagram /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={footerIconLinkClass}><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="site-footer" className="scroll-mt-24 bg-black text-white px-6 py-6 text-sm">
        <div className="border-t border-gray-800 pt-6 w-full px-4 lg:px-2 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025-2026 Posted.art. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href={DOCS_URL}
              className="text-gray-400 underline decoration-gray-500 underline-offset-4 hover:text-white transition"
            >Docs</Link>
            <Link
              href="/terms"
              className="text-gray-400 underline decoration-gray-500 underline-offset-4 hover:text-white transition"
            >Terms of Service</Link>
            <Link
              href="/privacy"
              className="text-gray-400 underline decoration-gray-500 underline-offset-4 hover:text-white transition"
            >Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
