import Image from "next/image";
import Link from "next/link";
import { articles } from "./blog-all";
import { blogImages } from "./blog-images";
import type { Article } from "./blog-data";
import { articlePath, equipmentPath, sectionPath, servicePath, type SiteLocale } from "./locale-routes";
import { ui } from "./localized-ui";
import { company } from "./data";
import { siteUrl } from "./seo-metadata";

const labels = {
  tr: { title: "Teknik Bilgi ve Rehberler", lead: "Trafo, OG hücre, test ve arıza konularını saha güvenliğini ve ölçüm verisini merkeze alarak açıklıyoruz.", read: "Rehberi okuyun", contents: "Bu yazıda", questions: "Sık sorulan sorular", sources: "Teknik kaynaklar", related: "Diğer teknik rehberler", service: "İlgili hizmet", device: "İlgili test cihazı", cta: "Teknik talep oluşturun", caution: "Bu rehber genel bilgilendirme içindir. YG/OG ekipmanında müdahale ve testler yalnızca yetkili personel tarafından, ekipman talimatı ve tesis prosedürüne göre yapılmalıdır." },
  en: { title: "Technical Guides", lead: "Clear, field-oriented explanations of transformer, MV switchgear, testing and fault topics.", read: "Read guide", contents: "On this page", questions: "Frequently asked questions", sources: "Technical sources", related: "More technical guides", service: "Related service", device: "Related test equipment", cta: "Request technical support", caution: "This guide is general information. HV/MV intervention and testing must be carried out by qualified personnel under the equipment manual and facility safety procedures." },
  ar: { title: "الأدلة الفنية", lead: "شروح ميدانية واضحة عن المحولات وخلايا الجهد المتوسط والاختبارات والأعطال.", read: "اقرأ الدليل", contents: "في هذا المقال", questions: "الأسئلة الشائعة", sources: "المراجع الفنية", related: "أدلة فنية أخرى", service: "الخدمة ذات الصلة", device: "جهاز الاختبار ذو الصلة", cta: "اطلب الدعم الفني", caution: "هذا الدليل للمعلومات العامة. لا ينفذ التدخل أو الاختبار في معدات الجهد العالي والمتوسط إلا موظفون مؤهلون وفق دليل المعدة وإجراءات سلامة المنشأة." },
} as const;

function photo(article: Article) { return blogImages[article.id].src; }

export function BlogIndex({ locale }: { locale: SiteLocale }) {
  const t = labels[locale];
  return <><section className="page-hero"><div className="shell"><span className="kicker light">BES ENERGY</span><h1>{t.title}</h1><p>{t.lead}</p></div></section><section className="section"><div className="shell blog-grid">{articles[locale].map(article => <Link href={articlePath(locale,article.id)} className="blog-card" key={article.id}><div className="blog-card-image"><Image src={photo(article)} alt={`${article.title} — BES Energy`} fill sizes="(max-width:700px) 100vw, (max-width:1100px) 50vw, 33vw"/></div><div className="blog-card-copy"><span>{t.title}</span><h2>{article.title}</h2><p>{article.description}</p><strong>{t.read} →</strong></div></Link>)}</div></section></>;
}

export function BlogArticle({ locale, article }: { locale: SiteLocale; article: Article }) {
  const t = labels[locale];
  const nav = locale === "tr" ? { home: "Ana Sayfa", services: "Hizmetlerimiz", equipment: "Cihaz Parkurumuz" } : ui[locale].nav;
  const url = `${siteUrl}${articlePath(locale,article.id)}`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: article.title, description: article.description, url, image: `${siteUrl}${photo(article)}`, author: { "@type": "Organization", name: "BES Enerji" }, publisher: { "@type": "Organization", name: "BES Enerji", url: siteUrl } },
    { "@type": "FAQPage", mainEntity: article.faq.map(({q,a}) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ] };
  const related = articles[locale].filter(item => item.id !== article.id).slice(0,3);
  return <><section className="page-hero blog-article-hero"><div className="shell"><nav className="breadcrumb"><Link href={sectionPath(locale,"home")}>{nav.home}</Link><span>/ <Link href={sectionPath(locale,"blog")}>{t.title}</Link></span></nav><span className="kicker light">BES ENERGY · {t.title}</span><h1>{article.title}</h1><p>{article.intro}</p></div></section>
    <div className="shell blog-article-layout"><article className="blog-body"><figure className="blog-figure"><div className="blog-leading-image"><Image src={photo(article)} alt={article.title} fill priority sizes="(max-width:900px) 100vw, 68vw"/></div>{blogImages[article.id].source && <figcaption>{locale === "tr" ? "Görsel" : locale === "en" ? "Image" : "الصورة"}: <a href={blogImages[article.id].source} target="_blank" rel="noopener noreferrer">{blogImages[article.id].credit}</a>{blogImages[article.id].license && <> · <a href={blogImages[article.id].license} target="_blank" rel="noopener noreferrer">{locale === "tr" ? "Lisans" : locale === "en" ? "License" : "الترخيص"}</a></>}</figcaption>}</figure><p className="blog-lead">{article.intro}</p><p className="blog-safety">{t.caution}</p>{article.sections.map((section,index) => <section key={section.heading} id={`section-${index+1}`}><h2>{section.heading}</h2><p>{section.body}</p>{section.bullets && <ul>{section.bullets.map(value => <li key={value}>{value}</li>)}</ul>}</section>)}<section className="blog-faq"><h2>{t.questions}</h2>{article.faq.map(entry => <details key={entry.q}><summary>{entry.q}</summary><p>{entry.a}</p></details>)}</section><section className="blog-sources"><h2>{t.sources}</h2><ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></section></article>
      <aside className="blog-sidebar"><div><h2>{t.contents}</h2>{article.sections.map((section,index) => <a href={`#section-${index+1}`} key={section.heading}>{section.heading}</a>)}</div><div><h2>{t.service}</h2><Link href={servicePath(locale,article.service)}>{nav.services} →</Link>{article.equipment && <><h2>{t.device}</h2><Link href={equipmentPath(locale,article.equipment)}>{nav.equipment} →</Link></>}<a className="bes-button bes-button-primary" href={`tel:${company.phone}`}>{t.cta}</a></div></aside></div>
    <section className="section blog-related"><div className="shell"><h2>{t.related}</h2><div className="blog-related-grid">{related.map(item => <Link key={item.id} href={articlePath(locale,item.id)}>{item.title} →</Link>)}</div></div></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g,"\\u003c") }}/></>;
}
