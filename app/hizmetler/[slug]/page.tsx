import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, Breadcrumb } from "../../components";
import { company } from "../../data";
import { allServices } from "../../core-services";
import { coreContent } from "../../core-service-content";
import { cityPages } from "../../seo-data";
import { relatedBlogForService } from "../../blog-related";
import { articlePath, servicePath } from "../../locale-routes";
import { breadcrumbSchema, pageMetadata, siteUrl } from "../../seo-metadata";

export function generateStaticParams() { return allServices.map(s => ({ slug: s.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = allServices.find(x => x.slug === slug);
  if (!s) return {};
  const path = servicePath("tr",s.slug);
  const languages = { tr: path, en: servicePath("en",s.slug), ar: servicePath("ar",s.slug), "x-default": path };
  return pageMetadata({ title: `${s.title} | BES Enerji`, description: s.summary, path, image: s.image, languages });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = allServices.find(x => x.slug === slug);
  if (!s) notFound();
  const content = coreContent[slug], path = `/hizmetler/${slug}`;
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: s.title, description: s.summary, url: `${siteUrl}${path}`, provider: { "@type": "Organization", name: "BES Enerji", url: siteUrl, telephone: company.phone }, areaServed: { "@type": "Country", name: "Türkiye" } },
    breadcrumbSchema([{ name: "Ana Sayfa", path: "/" }, { name: "Hizmetler", path: "/hizmetler" }, { name: s.title, path }]),
  ] };
  return <><Header/><main>
    <section className="service-hero"><div className="shell"><Breadcrumb items={[{label:"Hizmetler",href:"/hizmetler"},{label:s.title}]}/><div className="service-hero-grid"><div><span className="kicker light">{s.eyebrow}</span><h1>{s.title}</h1><p>{s.intro}</p><div className="actions"><Link className="btn primary" href="/iletisim">Teknik talep oluşturun</Link><a className="btn ghost" href={`tel:${company.phone}`}>Teknik ekibi arayın</a></div></div><div className="service-hero-image"><Image src={s.image} alt={s.title} fill priority sizes="(max-width:760px) 100vw, 45vw"/></div></div></div></section>
    <section className="benefits"><div className="shell">{s.benefits.map((b,i)=><div key={b}><strong>0{i+1}</strong><span>{b}</span></div>)}</div></section>
    {content && <section className="core-rich"><div className="shell"><span className="kicker">Teknik yaklaşım</span><p className="core-rich-lead">{content.lead}</p><div className="core-rich-grid">{content.sections.map(section=><article key={section.heading}><h2>{section.heading}</h2><p>{section.text}</p><ul>{section.points.map(point=><li key={point}>{point}</li>)}</ul></article>)}</div>{content.tests && <div className="core-test-wrap"><table className="core-test-table"><caption>Uygulanabilecek testler ve değerlendirme yaklaşımı</caption><thead><tr><th>Test</th><th>Amaç</th><th>Değerlendirme</th></tr></thead><tbody>{content.tests.map(test=><tr key={test.name}><td>{test.name}</td><td>{test.purpose}</td><td>{test.assessment}</td></tr>)}</tbody></table></div>}{content.related && <div className="core-related">{content.related.map(related=>{const item=allServices.find(x=>x.slug===related);return item?<Link href={`/hizmetler/${item.slug}`} key={item.slug}>{item.shortTitle} →</Link>:null;})}</div>}</div></section>}
    <section className="section"><div className="shell content-grid"><div><span className="kicker">Hizmet kapsamı</span><h2>Sahada uyguladığımız kontroller</h2><p className="lead">Kapsam, keşif sonrasında ekipman ve tesis koşullarına göre kesinleştirilir.</p></div><ul className="check-list">{s.scope.map(x=><li key={x}>{x}</li>)}</ul></div></section>
    <section className="soft-section"><div className="shell"><span className="kicker">Nasıl çalışıyoruz?</span><h2>Planlı, güvenli ve izlenebilir süreç.</h2><div className="process-grid">{s.process.map((p,i)=><article key={p.title}><span>0{i+1}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></div></section>
    <section className="section"><div className="shell faq-grid"><div><span className="kicker">Sık sorulan sorular</span><h2>{s.shortTitle} hakkında merak edilenler.</h2></div><div>{s.faq.map(x=><details key={x.q}><summary>{x.q}</summary><p>{x.a}</p></details>)}</div></div></section>
    <section className="section"><div className="shell"><span className="kicker">TEKNİK REHBERLER</span><h2>Bu hizmetle ilgili teknik bilgiler</h2><div className="blog-related-grid">{relatedBlogForService("tr",slug).map(article => <Link key={article.id} href={articlePath("tr",article.id)}>{article.title} →</Link>)}</div></div></section>
    {slug === "trafo-bakim-ve-onarimi" && <section className="section city-links"><div className="shell"><span className="kicker">İL BAZINDA TEKNİK BİLGİ</span><h2>Trafo bakım ve arıza talepleri</h2><p>Ankara merkezli ekibimiz için saha planı, talebin ve ekip uygunluğunun değerlendirilmesiyle netleşir.</p><div className="city-link-grid">{cityPages.map(city=><Link key={city.slug} href={`/trafo-bakimi/${city.slug}`}>{city.name} trafo bakımı</Link>)}</div></div></section>}
  </main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/></>;
}
