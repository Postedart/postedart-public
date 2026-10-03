import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { notFound, permanentRedirect } from 'next/navigation'

import PageClient from '@/components/PageClient'
import { mapCountryToRegion, type Region } from '@/lib/countryCodes'
import { isSupportedLang } from '@/lib/languageCodes'
import { buildHomepageMetadata } from '@/lib/siteMetadata'
import { getLatestPublishedNews } from '@/lib/server/newsC1'

export const dynamic = 'force-dynamic'

type LocalizedHomepageProps = {
  params: Promise<{ language: string }>
}

export async function generateMetadata({
  params,
}: LocalizedHomepageProps): Promise<Metadata> {
  const { language } = await params
  if (!isSupportedLang(language)) return {}
  return buildHomepageMetadata(language)
}

export default async function LocalizedHomepage({
  params,
}: LocalizedHomepageProps) {
  const { language } = await params
  if (!isSupportedLang(language)) notFound()
  if (language === 'en') permanentRedirect('/')

  const headersList = await headers()
  const country = headersList.get('x-vercel-ip-country') || 'US'
  const region: Region = mapCountryToRegion(country)
  const latestNews = await getLatestPublishedNews(language).catch((error) => {
    console.error('[localized homepage latest news]', error)
    return null
  })

  return (
    <PageClient region={region} lang={language} latestNews={latestNews} />
  )
}
