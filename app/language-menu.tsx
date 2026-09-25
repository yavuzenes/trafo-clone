"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { equivalentPaths, type SiteLocale } from "./locale-routes";

export function LanguageMenu({ locale = "tr" }: { locale?: SiteLocale }) {
  const pathname = usePathname();
  const paths = equivalentPaths(pathname);
  const active = { tr: "Türkçe", en: "English", ar: "العربية" }[locale];
  return <details className="bes-language-menu"><summary aria-label={`Language / Dil / اللغة: ${active}`}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9M12 3C9.6 5.5 8.4 8.5 8.4 12s1.2 6.5 3.6 9"/></svg><span>{active}</span><svg className="bes-language-chevron" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m2 4 4 4 4-4"/></svg></summary><div className="bes-language-options"><Link href={paths.tr} lang="tr" aria-current={locale === "tr" ? "page" : undefined}>Türkçe</Link><Link href={paths.en} lang="en" aria-current={locale === "en" ? "page" : undefined}>English</Link><Link href={paths.ar} lang="ar" dir="rtl" aria-current={locale === "ar" ? "page" : undefined}>العربية</Link></div></details>;
}
