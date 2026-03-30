"use client";

export default function Header() {
  return (
    <header className="w-full h-[77px] flex justify-between items-center pl-1 pr-5">
      <div className="flex items-center">
        <a href="https://posted.art/">
          <img
            src="/logos/postedart_logo_bg-black_wide.svg"
            alt="Posted.art logo"
            className="h-auto w-full max-w-[140px] sm:max-w-[160px] lg:max-w-[200px] xl:max-w-[240px]"
          />
        </a>
      </div>

      <button
        className="text-sm sm:text-base lg:text-lg border border-white rounded-full px-4 sm:px-5 lg:px-6 py-1.5 lg:py-2 transition hover:bg-white hover:text-black"
        onClick={() => window.location.href = 'https://app.posted.art/explore'}
      >
        Get Posted
      </button>
    </header>
  );
}
