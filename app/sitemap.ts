import type { MetadataRoute } from "next";
import { allServices } from "./core-services";
import { locales, translatedServices } from "./localized";
import { cityPages, equipment } from "./seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://besenerji.net";
  const tr = [
    "", "/hizmetler", "/kurumsal", "/cozumler", "/faaliyet-alanlari",
    "/cihaz-parkuru", "/yetkili-servisler", "/referanslar", "/iletisim", "/sss", "/kvkk",
    ...equipment.map(item => `/cihaz-parkuru/${item.code.toLowerCase()}`),
    ...allServices.map(service => `/hizmetler/${service.slug}`),
    ...cityPages.map(city => `/trafo-bakimi/${city.slug}`),
  ];
  const localized = locales.flatMap(locale => [
    `/${locale}`,
    `/${locale}/${locale === "en" ? "services" : "الخدمات"}`,
    `/${locale}/${locale === "en" ? "about" : "عن-الشركة"}`,
    `/${locale}/${locale === "en" ? "projects" : "المشاريع"}`,
    `/${locale}/${locale === "en" ? "contact" : "اتصل-بنا"}`,
    ...translatedServices[locale].map(service => `/${locale}/${locale === "en" ? "services" : "الخدمات"}/${service.slug}`),
  ]);
  return [...tr, ...localized].map(url => ({
    url: `${base}${url}`,
    changeFrequency: url === "" ? "weekly" : "monthly",
    priority: url === "" ? 1 : url.startsWith("/trafo-bakimi/") ? .85 : .8,
  }));
}
