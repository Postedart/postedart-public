import { headers } from "next/headers";
import { mapCountryToRegion, type Region } from "@/lib/countryCodes";
import PageClient from "@/components/PageClient";
import { detectLangFromAcceptLanguage, type SupportedLang } from "@/lib/languageCodes";

export default async function Page() {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") || "US";
  const region: Region = mapCountryToRegion(country);
  const acceptLang = headersList.get("accept-language") || "en";
  const lang: SupportedLang = detectLangFromAcceptLanguage(acceptLang);
  return <PageClient region={region} lang={lang} />;
}