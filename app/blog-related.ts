import { articles } from "./blog-all";
import type { SiteLocale } from "./locale-routes";

const relatedIds: Record<string,string[]> = {
  "trafo-bakim-ve-onarimi": ["bakim-sikligi","kuru-tip","testler"],
  "trafo-ariza-tespiti-ve-giderilmesi": ["ariza-belirtileri","acil","testler"],
  "trafo-testleri": ["testler","yag-analizi","ikinci-el"],
  "trafo-yag-analizi": ["yag-analizi","bakim-sikligi"],
  "kuru-tip-trafo-bakimi": ["kuru-tip","bakim-sikligi"],
  "og-hucre-bakim-ve-onarim": ["og-hucre","acil"],
  "og-hucre-ariza-tespiti": ["og-hucre","acil"],
  "og-hucre-testleri": ["og-hucre","testler"],
  "kesici-bakim-ve-testleri": ["og-hucre","acil"],
  "acil-mudahale": ["acil","ariza-belirtileri"],
  "proje-ve-danismanlik": ["testler","ikinci-el"],
  "elektrik-taahhut": ["testler","og-hucre"],
  "test-ve-devreye-alma": ["testler","og-hucre"],
  "elektriksel-muayene-test-uygunluk-raporu": ["testler","og-hucre"],
};

export function relatedBlogForService(locale: SiteLocale, service: string) {
  const ids = relatedIds[service] ?? [];
  return ids.map(id => articles[locale].find(article => article.id === id)).filter((article): article is (typeof articles)[SiteLocale][number] => Boolean(article));
}
