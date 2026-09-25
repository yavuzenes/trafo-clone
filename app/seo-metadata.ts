import type { Metadata } from "next";

export const siteUrl = "https://www.besenerji.net";
export const siteName = "BES Enerji";
export const socialImage = "/images/bes-hero-refined.png";

const translatedTopPages: Record<string, { en: string; ar: string }> = {
  "/": { en: "/en", ar: "/ar" },
  "/hizmetler": { en: "/en/services", ar: "/ar/الخدمات" },
  "/kurumsal": { en: "/en/about", ar: "/ar/عن-الشركة" },
  "/cozumler": { en: "/en/projects", ar: "/ar/المشاريع" },
  "/iletisim": { en: "/en/contact", ar: "/ar/اتصل-بنا" },
};

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  locale?: string;
  languages?: Record<string, string>;
};

export function pageMetadata({ title, description, path, image = socialImage, locale = "tr_TR", languages }: PageMeta): Metadata {
  const top = translatedTopPages[path];
  const alternateLanguages = languages ?? (top ? { tr: path, en: top.en, ar: top.ar, "x-default": path } : undefined);
  const absoluteLanguages = alternateLanguages && Object.fromEntries(Object.entries(alternateLanguages).map(([language, url]) => [language, new URL(url, siteUrl).toString()]));
  return {
    title,
    description,
    alternates: { canonical: path, ...(absoluteLanguages ? { languages: absoluteLanguages } : {}) },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      type: "website",
      locale,
      images: [{ url: image, alt: `${title} — ${siteName}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
