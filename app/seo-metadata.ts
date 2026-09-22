import type { Metadata } from "next";

export const siteUrl = "https://besenerji.net";
export const siteName = "BES Enerji";
export const socialImage = "/images/resim-5.jpeg";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  locale?: string;
  languages?: Record<string, string>;
};

export function pageMetadata({ title, description, path, image = socialImage, locale = "tr_TR", languages }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path, ...(languages ? { languages } : {}) },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      type: "website",
      locale,
      images: [{ url: image, alt: `${siteName} trafo ve güç sistemleri hizmetleri` }],
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
