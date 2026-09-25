import { articlesTr, type Article } from "./blog-data";
import { articlesEn } from "./blog-data-en";
import { articlesAr } from "./blog-data-ar";
import type { SiteLocale } from "./locale-routes";

export const articles: Record<SiteLocale, Article[]> = { tr: articlesTr, en: articlesEn, ar: articlesAr };

export function articleById(locale: SiteLocale, id: string) {
  return articles[locale].find(article => article.id === id);
}

export function articleBySlug(locale: SiteLocale, slug: string) {
  return articles[locale].find(article => article.slug === slug);
}
