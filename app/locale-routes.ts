import { allLocalizedServices } from "./localized-extra";
import { articleById, articleBySlug } from "./blog-all";

export type SiteLocale = "tr" | "en" | "ar";
export type SectionKey = "home" | "about" | "services" | "solutions" | "activities" | "equipment" | "partners" | "references" | "contact" | "faq" | "privacy" | "blog";

export const sectionSegments: Record<Exclude<SectionKey, "home">, Record<SiteLocale, string>> = {
  about: { tr: "kurumsal", en: "about", ar: "عن-الشركة" },
  services: { tr: "hizmetler", en: "services", ar: "الخدمات" },
  solutions: { tr: "cozumler", en: "projects", ar: "المشاريع" },
  activities: { tr: "faaliyet-alanlari", en: "activities", ar: "مجالات-العمل" },
  equipment: { tr: "cihaz-parkuru", en: "equipment", ar: "الأجهزة" },
  partners: { tr: "yetkili-servisler", en: "partners", ar: "الشركاء" },
  references: { tr: "referanslar", en: "references", ar: "المراجع" },
  contact: { tr: "iletisim", en: "contact", ar: "اتصل-بنا" },
  faq: { tr: "sss", en: "faq", ar: "الأسئلة-الشائعة" },
  privacy: { tr: "kvkk", en: "privacy", ar: "الخصوصية" },
  blog: { tr: "blog", en: "blog", ar: "المدونة" },
};

export function sectionPath(locale: SiteLocale, key: SectionKey) {
  if (key === "home") return locale === "tr" ? "/" : `/${locale}`;
  const segment = sectionSegments[key][locale];
  return locale === "tr" ? `/${segment}` : `/${locale}/${segment}`;
}

export function servicePath(locale: SiteLocale, trSlug: string) {
  if (locale === "tr") return `/hizmetler/${trSlug}`;
  const service = allLocalizedServices[locale].find(item => item.tr === trSlug);
  return service ? `${sectionPath(locale, "services")}/${service.slug}` : sectionPath(locale, "services");
}

export function equipmentPath(locale: SiteLocale, code: string) {
  return `${sectionPath(locale, "equipment")}/${code.toLowerCase()}`;
}

export function cityPath(locale: SiteLocale, slug: string) {
  const base = { tr: "/trafo-bakimi", en: "/en/transformer-maintenance", ar: "/ar/صيانة-المحولات" }[locale];
  return `${base}/${slug}`;
}

export function articlePath(locale: SiteLocale, id: string) {
  const article = articleById(locale,id);
  return article ? `${sectionPath(locale,"blog")}/${article.slug}` : sectionPath(locale,"blog");
}

export function equivalentPaths(pathname: string) {
  const parts = pathname.split("/").filter(Boolean).map(decodeURIComponent);
  const locale: SiteLocale = parts[0] === "en" || parts[0] === "ar" ? parts.shift() as SiteLocale : "tr";
  if (!parts.length) return { tr: "/", en: "/en", ar: "/ar" };
  const section = (Object.keys(sectionSegments) as Exclude<SectionKey, "home">[]).find(key => sectionSegments[key][locale] === parts[0]);
  if (section && parts.length === 1) return { tr: sectionPath("tr", section), en: sectionPath("en", section), ar: sectionPath("ar", section) };
  if (section === "services" && parts.length === 2) {
    const trSlug = locale === "tr" ? parts[1] : allLocalizedServices[locale].find(item => item.slug === parts[1])?.tr;
    if (trSlug) return { tr: servicePath("tr", trSlug), en: servicePath("en", trSlug), ar: servicePath("ar", trSlug) };
  }
  if (section === "equipment" && parts.length === 2) return { tr: equipmentPath("tr", parts[1]), en: equipmentPath("en", parts[1]), ar: equipmentPath("ar", parts[1]) };
  if (section === "blog" && parts.length === 2) {
    const article = articleBySlug(locale,parts[1]);
    if (article) return { tr: articlePath("tr",article.id), en: articlePath("en",article.id), ar: articlePath("ar",article.id) };
  }
  if (parts.length === 2 && parts[0] === { tr: "trafo-bakimi", en: "transformer-maintenance", ar: "صيانة-المحولات" }[locale]) return { tr: cityPath("tr", parts[1]), en: cityPath("en", parts[1]), ar: cityPath("ar", parts[1]) };
  return { tr: "/", en: "/en", ar: "/ar" };
}
