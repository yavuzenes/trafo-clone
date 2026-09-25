import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata, siteUrl } from "./seo-metadata";
import { company } from "./data";
import { AnalyticsConsent } from "./analytics-consent";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: "BES Enerji", url: siteUrl, inLanguage: ["tr-TR", "en", "ar"] },
    {
      "@type": "Electrician",
      name: "BES Enerji",
      legalName: "BES Taahhüt Enerji Sanayi ve Ticaret Ltd. Şti.",
      url: siteUrl,
      description: "Ankara merkezli deneyimli mühendis ve teknik saha ekibiyle trafo ve OG hücre arıza, bakım, test ve onarım hizmetleri.",
      logo: `${siteUrl}/images/bes-enerji-2026-logo.jpg`,
      telephone: company.phone,
      email: company.email,
      address: { "@type": "PostalAddress", streetAddress: "29 Ekim Mahallesi 778. Cadde No: 7/5", addressLocality: "Sincan", addressRegion: "Ankara", addressCountry: "TR" },
    },
  ],
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: "Trafo Bakım, Arıza, Test ve Onarım | BES Enerji",
    description: "BES Enerji; trafo arıza tespiti, bakım, test ve onarım, OG hücre ve kesici bakımı ile YG teknik saha hizmetleri için ölçüme dayalı çözümler sunar.",
    path: "/",
    languages: { tr: "/", en: "/en", ar: "/ar", "x-default": "/" },
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  category: "engineering",
  ...(process.env.GOOGLE_SITE_VERIFICATION || process.env.BING_SITE_VERIFICATION ? {
    verification: {
      ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
      ...(process.env.BING_SITE_VERIFICATION ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } } : {}),
    },
  } : {}),
};

export function RootDocument({ children, lang }: { children: React.ReactNode; lang: "tr" | "en" | "ar" }) {
  return <html lang={lang} style={{ "--font-manrope": '"Segoe UI", Arial, sans-serif', "--font-mono": '"Cascadia Mono", Consolas, monospace' } as React.CSSProperties}>
    <body>
      <div className="site-intro" aria-hidden="true"><div className="intro-grid"/><div className="intro-streak"/><Image src="/images/bes-enerji-2026-logo.jpg" alt="" width={300} height={125} priority/></div>
      {children}
      <AnalyticsConsent gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-KY5XFJ89SG"} clarityId={process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? ""}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema).replace(/</g, "\\u003c") }}/>
    </body>
  </html>;
}
