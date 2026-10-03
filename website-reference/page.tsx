import type { Metadata } from 'next'
import { headers } from "next/headers";
import { redirect } from 'next/navigation'
import { mapCountryToRegion, type Region } from "@/lib/countryCodes";
import PageClient from "@/components/PageClient";
import { detectLangFromAcceptLanguage, type SupportedLang } from "@/lib/languageCodes";
import { buildHomepageMetadata } from '@/lib/siteMetadata'
import { localizedSitePath } from '@/lib/siteUrls'
import { getLatestPublishedNews } from '@/lib/server/newsC1'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildHomepageMetadata('en')

export default async function Page() {
  const headersList = await headers();
  const acceptLang = headersList.get("accept-language") || "en";
  const lang: SupportedLang = detectLangFromAcceptLanguage(acceptLang);

  if (lang !== 'en') {
    const localizedHomepage = localizedSitePath(lang, '/')
    redirect(localizedHomepage)
  }

  const country = headersList.get("x-vercel-ip-country") || "US";
  const region: Region = mapCountryToRegion(country);
  const latestNews = await getLatestPublishedNews(lang).catch((error) => {
    console.error('[homepage latest news]', error)
    return null
  })

  return <PageClient region={region} lang={lang} latestNews={latestNews} />;
}
