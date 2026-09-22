import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import "./seo.css";
import "./solutions.css";
import "./logo.css";
import "./industrial.css";
import "./responsive-overrides.css";
import "./intro.css";
import "./brief-redesign.css";
import "./core-services.css";
import { pageMetadata, siteUrl } from "./seo-metadata";
import { company } from "./data";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: "BES Enerji", url: siteUrl, inLanguage: ["tr-TR", "en", "ar"] },
    {
      "@type": "Organization",
      name: "BES Enerji",
      url: siteUrl,
      logo: `${siteUrl}/images/bes-enerji-logo-concept-v3.png`,
      telephone: company.phone,
      email: company.email,
      address: { "@type": "PostalAddress", streetAddress: "29 Ekim Mahallesi 778. Cadde No: 7/5", addressLocality: "Sincan", addressRegion: "Ankara", addressCountry: "TR" },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: "Trafo Bakım, Test ve Onarım | YG ve OG Elektrik Hizmetleri | BES Enerji",
    description: "Trafo bakım, test, onarım, yağ analizi, OG hücre ve kesici bakımı, YG işletme sorumluluğu ve devreye alma için BES Enerji teknik hizmetleri.",
    path: "/",
    languages: { tr: "/", en: "/en", ar: "/ar", "x-default": "/" },
  }),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  category: "engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" style={{"--font-manrope": '"Segoe UI", Arial, sans-serif', "--font-mono": '"Cascadia Mono", Consolas, monospace'} as React.CSSProperties}>
      <body>
        <div className="site-intro" aria-hidden="true"><div className="intro-grid"/><div className="intro-streak"/><Image src="/images/bes-enerji-logo-concept-v3.png" alt="" width={300} height={125} priority/></div>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
