import type { MetadataRoute } from "next";
import { allServices } from "./core-services";
import { locales } from "./localized";
import { allLocalizedServices } from "./localized-extra";
import { articlePath, cityPath, equipmentPath, sectionPath, sectionSegments, servicePath, type SectionKey } from "./locale-routes";
import { articles } from "./blog-all";
import { cityPages, equipment } from "./seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.besenerji.net";
  const tr = [
    "", "/hizmetler", "/kurumsal", "/cozumler", "/faaliyet-alanlari",
    "/cihaz-parkuru", "/yetkili-servisler", "/referanslar", "/iletisim", "/sss", "/kvkk", "/blog",
    ...articles.tr.map(article => articlePath("tr",article.id)),
    ...equipment.map(item => `/cihaz-parkuru/${item.code.toLowerCase()}`),
    ...allServices.map(service => `/hizmetler/${service.slug}`),
    ...cityPages.map(city => `/trafo-bakimi/${city.slug}`),
  ];
  const localized = locales.flatMap(locale => [
    sectionPath(locale,"home"),
    ...(Object.keys(sectionSegments) as Exclude<SectionKey,"home">[]).map(key => sectionPath(locale,key)),
    ...allLocalizedServices[locale].map(service => servicePath(locale,service.tr)),
    ...articles[locale].map(article => articlePath(locale,article.id)),
    ...equipment.map(item => equipmentPath(locale,item.code)),
    ...cityPages.map(city => cityPath(locale,city.slug)),
  ]);
  const updatedBlogPaths = new Set(locales.flatMap(locale => articles[locale].map(article => articlePath(locale,article.id))));
  return [...tr, ...localized].map(url => ({
    url: `${base}${url}`,
    ...(updatedBlogPaths.has(url) ? { lastModified: new Date("2026-09-25T00:00:00+03:00") } : {}),
    changeFrequency: url === "" ? "weekly" : "monthly",
    priority: url === "" ? 1 : url.startsWith("/trafo-bakimi/") ? .85 : .8,
  }));
}
