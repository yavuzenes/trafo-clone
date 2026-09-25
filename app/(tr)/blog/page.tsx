import type { Metadata } from "next";
import { Header, Footer } from "../../components";
import { BlogIndex } from "../../blog-view";
import { pageMetadata } from "../../seo-metadata";
import { sectionPath } from "../../locale-routes";

export const metadata: Metadata = pageMetadata({
  title: "Trafo ve OG Hücre Teknik Rehberleri | BES Enerji",
  description: "Trafo bakımı, arıza belirtileri, yağ analizi, OG hücre testleri ve ikinci el trafo seçiminde ölçüme dayalı teknik rehberler.",
  path: "/blog",
  languages: { tr: "/blog", en: sectionPath("en","blog"), ar: sectionPath("ar","blog"), "x-default": "/blog" },
});

export default function Page() { return <><Header/><main><BlogIndex locale="tr"/></main><Footer/></>; }
