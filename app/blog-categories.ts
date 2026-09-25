import type { SiteLocale } from "./locale-routes";

export type BlogCategory = "transformer" | "switchgear" | "testing" | "fault";
export const blogCategories: Record<string, BlogCategory> = {
  "bakim-sikligi": "transformer",
  "ariza-belirtileri": "fault",
  "yag-analizi": "testing",
  "og-hucre": "switchgear",
  "kuru-tip": "transformer",
  "testler": "testing",
  "acil": "fault",
  "ikinci-el": "transformer",
};
export const categoryLabels: Record<SiteLocale, { all: string; transformer: string; switchgear: string; testing: string; fault: string; search: string; empty: string; start: string }> = {
  tr: { all: "Tümü", transformer: "Trafo", switchgear: "OG hücre", testing: "Test ve ölçüm", fault: "Arıza", search: "Rehberlerde ara", empty: "Bu arama için rehber bulunamadı.", start: "Başlangıç için önerilen rehberler" },
  en: { all: "All", transformer: "Transformers", switchgear: "MV switchgear", testing: "Testing", fault: "Faults", search: "Search guides", empty: "No guide matches this search.", start: "Guides to start with" },
  ar: { all: "الكل", transformer: "المحولات", switchgear: "خلايا الجهد المتوسط", testing: "الاختبارات", fault: "الأعطال", search: "ابحث في الأدلة", empty: "لم يتم العثور على دليل لهذا البحث.", start: "أدلة مقترحة للبدء" },
};
