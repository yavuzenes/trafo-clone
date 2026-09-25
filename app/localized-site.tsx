import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allServices } from "./core-services";
import { articleBySlug, articles } from "./blog-all";
import { blogImages } from "./blog-images";
import { relatedBlogForService } from "./blog-related";
import { BlogArticle, BlogIndex } from "./blog-view";
import { company, references, referenceNames } from "./data";
import { equipmentDetails, type EquipmentSlug } from "./equipment-details";
import { allLocalizedServices } from "./localized-extra";
import { localizedEquipment } from "./localized-equipment";
import { cityFocus } from "./localized-cities";
import { copy, locales, type Locale } from "./localized";
import { cityNames, ui } from "./localized-ui";
import { articlePath, cityPath, equipmentPath, sectionPath, sectionSegments, servicePath, type SectionKey } from "./locale-routes";
import { cityPages, equipment } from "./seo-data";
import { breadcrumbSchema, pageMetadata, siteUrl } from "./seo-metadata";
import { LanguageMenu } from "./language-menu";
import { EquipmentVideo } from "./(tr)/cihaz-parkuru/equipment-video";

type Props = { params: Promise<{ locale: string; segments?: string[] }> };
type PageInfo = { kind: SectionKey | "service" | "equipment-detail" | "city" | "article"; slug?: string; trSlug?: string; articleId?: string };
const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
const navKeys: SectionKey[] = ["home", "about", "services", "activities", "equipment", "partners", "references", "solutions", "blog", "contact"];

function identify(locale: Locale, segments?: string[]): PageInfo | undefined {
  if (!segments?.length) return { kind: "home" };
  segments = segments.map(segment => decodeURIComponent(segment));
  const section = (Object.keys(sectionSegments) as Exclude<SectionKey, "home">[]).find(key => sectionSegments[key][locale] === segments[0]);
  if (segments.length === 1 && section) return { kind: section };
  if (segments.length !== 2) return undefined;
  if (section === "services") {
    const service = allLocalizedServices[locale].find(item => item.slug === segments[1]);
    return service ? { kind: "service", slug: service.slug, trSlug: service.tr } : undefined;
  }
  if (section === "blog") {
    const article = articleBySlug(locale,segments[1]);
    return article ? { kind: "article", slug: article.slug, articleId: article.id } : undefined;
  }
  if (section === "equipment" && equipment.some(item => item.code.toLowerCase() === segments[1])) return { kind: "equipment-detail", slug: segments[1] };
  if (segments[0] === { en: "transformer-maintenance", ar: "صيانة-المحولات" }[locale] && cityPages.some(item => item.slug === segments[1])) return { kind: "city", slug: segments[1] };
  return undefined;
}

function paths(info: PageInfo) {
  if (info.kind === "article") return { tr: articlePath("tr",info.articleId!), en: articlePath("en",info.articleId!), ar: articlePath("ar",info.articleId!) };
  if (info.kind === "service") return { tr: servicePath("tr", info.trSlug!), en: servicePath("en", info.trSlug!), ar: servicePath("ar", info.trSlug!) };
  if (info.kind === "equipment-detail") return { tr: equipmentPath("tr", info.slug!), en: equipmentPath("en", info.slug!), ar: equipmentPath("ar", info.slug!) };
  if (info.kind === "city") return { tr: cityPath("tr", info.slug!), en: cityPath("en", info.slug!), ar: cityPath("ar", info.slug!) };
  return { tr: sectionPath("tr", info.kind), en: sectionPath("en", info.kind), ar: sectionPath("ar", info.kind) };
}

export function generateLocalizedParams() {
  return locales.flatMap(locale => [
    { locale, segments: undefined },
    ...(Object.keys(sectionSegments) as Exclude<SectionKey, "home">[]).map(key => ({ locale, segments: [sectionSegments[key][locale]] })),
    ...allLocalizedServices[locale].map(item => ({ locale, segments: [sectionSegments.services[locale], item.slug] })),
    ...articles[locale].map(item => ({ locale, segments: [sectionSegments.blog[locale], item.slug] })),
    ...equipment.map(item => ({ locale, segments: [sectionSegments.equipment[locale], item.code.toLowerCase()] })),
    ...cityPages.map(item => ({ locale, segments: [{ en: "transformer-maintenance", ar: "صيانة-المحولات" }[locale], item.slug] })),
  ]);
}

export async function localizedMetadata({ params }: Props): Promise<Metadata> {
  const { locale, segments } = await params;
  if (!isLocale(locale)) return {};
  const info = identify(locale, segments);
  if (!info) return {};
  const t = ui[locale];
  const service = info.kind === "service" ? allLocalizedServices[locale].find(item => item.slug === info.slug) : undefined;
  const article = info.kind === "article" ? articleBySlug(locale,info.slug!) : undefined;
  const deviceIndex = info.kind === "equipment-detail" ? equipment.findIndex(item => item.code.toLowerCase() === info.slug) : -1;
  const city = info.kind === "city" ? cityNames[locale][info.slug!] : undefined;
  const title = article?.title ?? service?.title ?? (deviceIndex >= 0 ? `${t.equipment.items[deviceIndex][0]} ${equipment[deviceIndex].code}` : city ? `${city} ${t.city.title}` : info.kind === "home" ? t.home.title : t.nav[info.kind as SectionKey]);
  const description = article?.description ?? service?.summary ?? (deviceIndex >= 0 ? t.equipment.lead : city ? `${city}: ${t.city.planText}` : info.kind === "home" ? t.home.lead : t[info.kind as "about" | "activities" | "solutions" | "partners" | "references" | "contact" | "faq" | "privacy"]?.lead ?? t.home.expertiseLead);
  const p = paths(info);
  const distinctTitle = article ? `${locale === "en" ? "Technical guide" : "دليل فني"}: ${title}` : title;
  return pageMetadata({ title: `${distinctTitle} | BES Energy`, description, path: p[locale], image: article ? blogImages[article.id].src : deviceIndex >= 0 ? equipment[deviceIndex].image : undefined, locale: locale === "en" ? "en_US" : "ar_AR", languages: { tr: p.tr, en: p.en, ar: p.ar, "x-default": p.tr } });
}

function Header({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return <><div className="bes-utility"><div className="shell bes-utility-inner"><span>{t.utility}</span><Link className="bes-utility-cta" href={sectionPath(locale, "contact")}>{t.request} ↗</Link></div></div>
    <header className="bes-header"><div className="shell bes-header-inner"><Link className="bes-brand" href={sectionPath(locale, "home")} aria-label={`BES Energy ${t.nav.home}`}><Image src="/images/bes-enerji-2026-logo.jpg" alt="BES Energy" width={270} height={107}/></Link>
      <nav className="bes-nav" aria-label={locale === "en" ? "Main menu" : "القائمة الرئيسية"}>{navKeys.filter(key => key !== "solutions" && key !== "activities").slice(0,7).map(key => <Link href={sectionPath(locale,key)} key={key}>{t.nav[key]}</Link>)}</nav>
      <Link className="bes-nav-contact" href={sectionPath(locale,"contact")}>{t.nav.contact}</Link><LanguageMenu locale={locale}/>
      <details className="bes-mobile-menu"><summary>{locale === "en" ? "Menu" : "القائمة"} ☰</summary><nav aria-label={locale === "en" ? "Mobile menu" : "قائمة الهاتف"}>{navKeys.map(key => <Link href={sectionPath(locale,key)} key={key}>{t.nav[key]}</Link>)}<Link href={sectionPath(locale,"faq")}>{t.nav.faq}</Link></nav></details>
    </div></header></>;
}

function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return <><section className="reference-strip" aria-label={t.nav.references}><div className="shell reference-strip-head"><span className="kicker">{t.nav.references}</span><Link className="reference-all-link" href={sectionPath(locale,"references")}>{t.all} →</Link></div><div className="reference-marquee"><div className="reference-marquee-track">{[...references,...references].map((item,index)=><div className="reference-logo" key={`${item}-${index}`}>{item === "tcdd" ? <span className="reference-typemark" aria-label={referenceNames[index % references.length]}>TCDD</span> : <Image src={`/images/${item}`} alt={`${referenceNames[index % references.length]} logo`} width={180} height={90}/>}</div>)}</div></div></section><section className="bes-cta-band"><div className="shell bes-cta-inner"><div><span className="kicker">BES ENERGY</span><h2>{copy[locale].supportTitle}</h2><p>{copy[locale].supportText}</p></div><div><a className="bes-button bes-button-light" href={`tel:${company.phone}`}>{t.call}</a><Link className="bes-button bes-button-outline-light" href={sectionPath(locale,"contact")}>{t.request}</Link></div></div></section>
    <footer className="bes-footer"><div className="shell bes-footer-grid"><div><Link href={sectionPath(locale,"home")} className="bes-footer-brand"><Image src="/images/bes-enerji-2026-logo.jpg" alt="BES Energy" width={220} height={87}/></Link><p>BES Taahhüt Enerji Sanayi ve Ticaret Ltd. Şti.</p><p>{t.working}</p></div><div><h3>{t.nav.services}</h3>{allLocalizedServices[locale].slice(0,6).map(item => <Link key={item.slug} href={servicePath(locale,item.tr)}>{item.title}</Link>)}</div><div><h3>{t.nav.about}</h3>{(["about","activities","equipment","partners","references","blog","faq","privacy"] as SectionKey[]).map(key => <Link key={key} href={sectionPath(locale,key)}>{t.nav[key]}</Link>)}</div><div><h3>{t.nav.contact}</h3><a href={`tel:${company.phone}`}>{company.phoneDisplay}</a><a href={`mailto:${company.email}`}>{company.email}</a><a href={`mailto:${company.serviceEmail}`}>{company.serviceEmail}</a><p>{company.address}</p></div></div><div className="shell bes-copyright">© 2026 BES Energy</div></footer>
    <div className="sticky-actions"><a className="emergency-action" href={`tel:${company.phone}`}>{t.emergency}</a><a href="https://wa.me/905532124761" target="_blank" rel="noreferrer">{t.whatsapp}</a></div></>;
}

function Crumb({ locale, current, parent }: { locale: Locale; current: string; parent?: SectionKey }) {
  const t = ui[locale];
  return <nav className="breadcrumb" aria-label={locale === "en" ? "Breadcrumb" : "مسار الصفحة"}><Link href={sectionPath(locale,"home")}>{t.homeLabel}</Link>{parent && <span>/ <Link href={sectionPath(locale,parent)}>{t.nav[parent]}</Link></span>}<span>/ {current}</span></nav>;
}

function Home({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return <><section className="bes-hero"><Image src="/images/bes-hero-refined.webp" alt="" fill priority sizes="100vw"/><div className="bes-hero-shade"/><div className="shell bes-hero-content"><span className="bes-eyebrow light">{t.home.eyebrow}</span><h1>{t.home.title}</h1><div className="bes-hero-rule"/><p>{t.home.lead}</p><div className="bes-hero-actions"><Link className="bes-button bes-button-primary" href={sectionPath(locale,"services")}>{t.nav.services} →</Link><Link className="bes-button bes-button-hero-outline" href={sectionPath(locale,"contact")}>{t.request}</Link></div></div></section>
    <section className="bes-section"><div className="shell"><div className="bes-section-heading"><span className="bes-eyebrow">{t.home.expertise}</span><h2>{t.home.expertiseTitle}</h2><p>{t.home.expertiseLead}</p></div><ServiceCards locale={locale} limit={9}/><div className="bes-section-link"><Link href={sectionPath(locale,"services")}>{t.all} →</Link></div></div></section>
    <section className="dark-section"><div className="shell split"><div><span className="kicker light">{t.home.why}</span><h2>{t.home.whyTitle}</h2><p>{t.home.whyText}</p><Link className="bes-button bes-button-light" href={sectionPath(locale,"about")}>{t.nav.about} →</Link></div><div className="metric-grid">{[t.about.metric1,t.about.metric2,t.about.metric3].map((value,index) => <div key={value}><strong>0{index+1}</strong><span>{value}</span></div>)}</div></div></section>
    <section className="bes-section"><div className="shell"><div className="bes-section-heading"><span className="bes-eyebrow">{t.nav.equipment}</span><h2>{t.home.devices}</h2><p>{t.home.devicesLead}</p></div><EquipmentCards locale={locale} limit={3}/><div className="bes-section-link"><Link href={sectionPath(locale,"equipment")}>{t.all} →</Link></div></div></section>
    <section className="bes-section"><div className="shell"><div className="bes-section-heading"><span className="bes-eyebrow">{t.nav.blog}</span><h2>{t.nav.blog}</h2></div><div className="blog-related-grid">{articles[locale].slice(0,3).map(article => <Link href={articlePath(locale,article.id)} key={article.id}>{article.title} →</Link>)}</div><div className="bes-section-link"><Link href={sectionPath(locale,"blog")}>{t.all} →</Link></div></div></section><section className="bes-section city-links"><div className="shell"><span className="kicker">{t.home.city}</span><h2>{t.home.cityLead}</h2><CityLinks locale={locale}/></div></section></>;
}

function ServiceCards({ locale, limit }: { locale: Locale; limit?: number }) {
  const t = ui[locale];
  return <div className="core-grid">{allLocalizedServices[locale].slice(0,limit).map((item) => { const tr = allServices.find(service => service.slug === item.tr); return <Link className="core-card" key={item.slug} href={servicePath(locale,item.tr)}><span className="core-card-media"><Image src={tr?.image ?? "/images/resim-1.jpeg"} alt={`${item.title} — BES Energy`} fill sizes="(max-width:700px) 100vw, (max-width:1100px) 50vw, 33vw"/></span><span className="core-card-body"><strong>{item.title}</strong><span>{item.summary}</span><em>{t.view} →</em></span></Link>; })}</div>;
}

function EquipmentCards({ locale, limit }: { locale: Locale; limit?: number }) {
  const t = ui[locale];
  return <div className="equipment-grid">{equipment.slice(0,limit).map((item,index) => <Link key={item.code} href={equipmentPath(locale,item.code)}><div className="equipment-image"><Image src={item.image} alt={`${item.code} ${t.equipment.items[index][0]}`} fill sizes="(max-width:700px) 100vw, 33vw"/></div><div className="equipment-summary"><span>{item.code}</span><h2>{t.equipment.items[index][0]}</h2><p>{t.equipment.items[index][1]}</p><span className="equipment-card-action">{t.view} →</span></div></Link>)}</div>;
}

function CityLinks({ locale, exclude }: { locale: Locale; exclude?: string }) {
  const t = ui[locale];
  return <div className="city-link-grid">{cityPages.filter(city => city.slug !== exclude).map(city => <Link key={city.slug} href={cityPath(locale,city.slug)}>{cityNames[locale][city.slug]} {t.city.title}</Link>)}</div>;
}

function Content({ locale, info }: { locale: Locale; info: PageInfo }) {
  const t = ui[locale];
  if (info.kind === "home") return <Home locale={locale}/>;
  if (info.kind === "blog") return <BlogIndex locale={locale}/>;
  if (info.kind === "article") return <BlogArticle locale={locale} article={articleBySlug(locale,info.slug!)!}/>;
  if (info.kind === "services") return <><Hero locale={locale} title={t.home.expertiseTitle} lead={t.home.expertiseLead} crumb={t.nav.services}/><section className="section"><div className="shell"><ServiceCards locale={locale}/></div></section></>;
  if (info.kind === "service") {
    const item = allLocalizedServices[locale].find(entry => entry.slug === info.slug)!;
    const tr = allServices.find(service => service.slug === item.tr)!;
    const related = allLocalizedServices[locale].filter(entry => entry.slug !== item.slug).slice(0,3);
    return <><section className="service-hero"><div className="shell"><Crumb locale={locale} current={item.title} parent="services"/><div className="service-hero-grid"><div><span className="kicker light">{t.nav.services}</span><h1>{item.title}</h1><p>{item.intro}</p><div className="actions"><Link className="btn primary" href={sectionPath(locale,"contact")}>{t.request}</Link><a className="btn ghost" href={`tel:${company.phone}`}>{t.call}</a></div></div><div className="service-hero-image"><Image src={tr.image} alt={`${item.title} — BES Energy`} fill priority sizes="(max-width:760px) 100vw, 45vw"/></div></div></div></section>
      <section className="section"><div className="shell content-grid"><div><span className="kicker">{t.scope}</span><h2>{item.title}</h2><p className="lead">{item.summary}</p><p>{item.intro}</p></div><ul className="check-list">{item.items.map(value => <li key={value}>{value}</li>)}</ul></div></section>
      <section className="soft-section"><div className="shell"><span className="kicker">{t.process}</span><div className="process-grid">{copy[locale].steps.slice(0,3).map((step,index) => <article key={step}><span>0{index+1}</span><h3>{step}</h3></article>)}</div></div></section>
      <section className="section"><div className="shell"><h2>{t.related}</h2><div className="localized-related">{related.map(entry => <Link key={entry.slug} href={servicePath(locale,entry.tr)}>{entry.title} →</Link>)}</div><h2>{t.nav.blog}</h2><div className="blog-related-grid">{relatedBlogForService(locale,item.tr).map(article => <Link key={article.id} href={articlePath(locale,article.id)}>{article.title} →</Link>)}</div></div></section></>;
  }
  if (info.kind === "about") return <><Hero locale={locale} title={t.about.title} lead={t.about.lead} crumb={t.nav.about}/><section className="section"><div className="shell about-layout"><div className="about-image"><Image src="/images/trafo-bakim-5.webp" alt={t.about.title} fill sizes="(max-width:760px) 100vw, 48vw"/></div><div><span className="kicker">BES ENERGY</span><h2>{t.about.title}</h2><p className="lead">{t.about.lead}</p><p>{t.about.p1}</p><p>{t.about.p2}</p><Link className="bes-button bes-button-primary" href={sectionPath(locale,"contact")}>{t.request} →</Link></div></div></section><section className="dark-section"><div className="shell value-grid">{[t.about.metric1,t.about.metric2,t.about.metric3].map(value => <article key={value}><h2>{value}</h2></article>)}</div></section></>;
  if (info.kind === "activities") return <><Hero locale={locale} title={t.activities.title} lead={t.activities.lead} crumb={t.nav.activities}/><section className="section"><div className="shell activity-grid compact">{t.activities.items.map(([title,text],index) => <article key={title}><span>0{index+1}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section></>;
  if (info.kind === "equipment") return <><Hero locale={locale} title={t.equipment.title} lead={t.equipment.lead} crumb={t.nav.equipment}/><section className="section equipment-catalog-page"><div className="shell"><EquipmentCards locale={locale}/><p className="equipment-note">{t.equipment.note}</p></div></section></>;
  if (info.kind === "equipment-detail") {
    const index = equipment.findIndex(item => item.code.toLowerCase() === info.slug);
    const item = equipment[index];
    const detail = equipmentDetails[info.slug as EquipmentSlug];
    const translated = localizedEquipment[locale][info.slug as EquipmentSlug];
    const name = t.equipment.items[index][0];
    const video = "video" in detail ? detail.video : undefined;
    return <section className="section equipment-detail-page"><div className="shell"><Crumb locale={locale} current={name} parent="equipment"/><div className="equipment-detail-hero"><div><span className="kicker">{item.code}</span><h1>{name}</h1><p>{t.equipment.items[index][1]}. {t.equipment.items[index][2]}. {t.equipment.items[index][3]}.</p><Link className="bes-button bes-button-primary" href={sectionPath(locale,"contact")}>{t.request} →</Link></div><div className="equipment-detail-image"><Image src={item.image} alt={`${item.code} ${name}`} fill priority sizes="(max-width:800px) 100vw, 45vw"/></div></div><div className="equipment-detail-content"><article><span className="kicker">{t.equipment.use}</span><h2>{name}</h2><p>{translated.purpose}</p><h3>{locale === "en" ? "Measurement method" : "طريقة القياس"}</h3><p>{translated.method}</p><h3>{locale === "en" ? "Field applications" : "التطبيقات الميدانية"}</h3><ul className="check-list">{translated.applications.map(value => <li key={value}>{value}</li>)}</ul></article><aside><h2>{t.equipment.technical}</h2><ul>{t.equipment.items[index].slice(1).map(value => <li key={value}>{value}</li>)}</ul></aside></div>{video && <section className="equipment-video"><div><span className="kicker">{t.equipment.video}</span><h2>{item.code} — {t.equipment.video}</h2></div><EquipmentVideo code={item.code} video={video} image={item.image} playLabel={t.equipment.play}/></section>}<section className="equipment-detail-more"><h2>{t.related}</h2><div>{equipment.filter(entry => entry.code !== item.code).slice(0,3).map(other => <Link key={other.code} href={equipmentPath(locale,other.code)}><small>{other.code}</small><strong>{t.equipment.items[equipment.indexOf(other)][0]}</strong><span>{t.view} →</span></Link>)}</div></section></div></section>;
  }
  if (info.kind === "solutions") return <><Hero locale={locale} title={t.solutions.title} lead={t.solutions.lead} crumb={t.nav.solutions}/><section className="section"><div className="shell solutions-grid">{t.solutions.captions.map((title,index) => <article key={title}><div className="solution-image"><Image src={`/images/resim-${index+1}.jpeg`} alt={`${title} — BES Energy`} fill sizes="(max-width:650px) 100vw, (max-width:1000px) 50vw, 33vw"/></div><div className="solution-copy"><span>{String(index+1).padStart(2,"0")}</span><h2>{title}</h2><p>{t.solutions.detail}</p></div></article>)}</div></section></>;
  if (info.kind === "partners") {
    const partnerImages = ["alfanar-sfaelektrik.jpeg","ekoselektrik.jpeg","astor.jpeg"];
    const names = ["Alfanar SFA Electric","EKOS Electric","Astor Energy"];
    return <section className="partners-page"><div className="shell"><Crumb locale={locale} current={t.nav.partners}/><div className="partners-intro"><span className="kicker">BES ENERGY</span><h1>{t.partners.title}</h1><p>{t.partners.lead}</p></div><div className="partner-grid">{names.map((name,index) => <article key={name}><div className="partner-logo"><Image src={`/images/${partnerImages[index]}`} alt={`${name} ${t.logo}`} width={260} height={130}/></div><h2>{name}</h2><p>{t.servicePartner}</p></article>)}</div><section className="partner-disclosure"><h2>{t.partners.disclosureTitle}</h2><p>{t.partners.disclosure}</p></section></div></section>;
  }
  if (info.kind === "references") return <><Hero locale={locale} title={t.references.title} lead={t.references.lead} crumb={t.nav.references}/><section className="section"><div className="shell reference-page-grid">{references.map((image,index) => <article key={image}>{image === "tcdd" ? <span className="reference-typemark" aria-label={t.references.names[index]}>TCDD</span> : <Image src={`/images/${image}`} alt={`${t.references.names[index]} ${t.logo}`} width={240} height={130}/>}<h2>{t.references.names[index]}</h2></article>)}</div></section></>;
  if (info.kind === "contact") return <><Hero locale={locale} title={t.contact.title} lead={t.contact.lead} crumb={t.nav.contact}/><section className="section"><div className="shell contact-direct"><div className="contact-direct-grid"><div className="contact-card"><span>{t.contact.phone}</span><a href={`tel:${company.phone}`}>{company.phoneDisplay}</a></div><div className="contact-card"><span>{t.contact.email}</span><a href={`mailto:${company.email}`}>{company.email}</a><a href={`mailto:${company.serviceEmail}`}>{company.serviceEmail}</a></div><div className="contact-card"><span>{t.contact.address}</span><address>{company.address}</address></div><div className="contact-card"><span>{t.contact.hours}</span><p>{t.working}</p></div></div><p><Link href={sectionPath(locale,"privacy")}>{t.nav.privacy} →</Link></p></div></section></>;
  if (info.kind === "faq") {
    const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: t.faq.entries.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
    return <><Hero locale={locale} title={t.faq.title} lead={t.faq.lead} crumb={t.nav.faq}/><section className="section"><div className="shell faq-page"><div><h2>{t.faq.title}</h2><p>{t.faq.lead}</p><Link className="bes-button bes-button-primary" href={sectionPath(locale,"contact")}>{t.request} →</Link></div><div>{t.faq.entries.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g,"\\u003c") }}/></>;
  }
  if (info.kind === "privacy") return <><Hero locale={locale} title={t.privacy.title} lead={t.privacy.lead} crumb={t.nav.privacy}/><section className="section"><div className="shell kvkk-content">{t.privacy.sections.map(([title,text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}<p>{company.address} · <a href={`mailto:${company.email}`}>{company.email}</a></p></div></section></>;
  if (info.kind === "city") {
    const city = cityNames[locale][info.slug!];
    return <><Hero locale={locale} title={`${city} ${t.city.title}`} lead={cityFocus[locale][info.slug!]} crumb={`${city} ${t.city.title}`}/><section className="city-work-note"><div className="shell"><strong>{city} — {t.city.experience}</strong><p>{t.city.experienceText}</p></div></section><section className="section"><div className="shell city-layout"><article><span className="kicker">{t.city.eyebrow}</span><h2>{t.city.plan}</h2><p>{cityFocus[locale][info.slug!]}</p><p>{t.city.planText}</p><ul className="check-list">{t.city.checklist.map(point => <li key={point}>{point}</li>)}</ul></article><aside><h2>{t.process}</h2>{copy[locale].steps.map((step,index) => <div className="city-step" key={step}><span>0{index+1}</span><p>{step}</p></div>)}</aside></div></section><section className="soft-section"><div className="shell city-incident"><div><h2>{t.city.fault}</h2></div><p>{t.city.faultText}</p></div></section><section className="section"><div className="shell city-incident"><div><h2>{t.city.tests}</h2></div><p>{t.city.testsText}</p></div></section><section className="section city-links"><div className="shell"><h2>{t.city.related}</h2><CityLinks locale={locale} exclude={info.slug}/></div></section></>;
  }
  return null;
}

function Hero({ locale, title, lead, crumb }: { locale: Locale; title: string; lead: string; crumb: string }) {
  return <section className="page-hero"><div className="shell"><Crumb locale={locale} current={crumb}/><span className="kicker light">BES ENERGY</span><h1>{title}</h1><p>{lead}</p></div></section>;
}

export async function LocalizedPage({ params }: Props) {
  const { locale, segments } = await params;
  if (!isLocale(locale)) notFound();
  const info = identify(locale, segments);
  if (!info) notFound();
  const service = info.kind === "service" ? allLocalizedServices[locale].find(item => item.slug === info.slug) : undefined;
  const serviceSchema = service && { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: service.title, description: service.summary, url: `${siteUrl}${servicePath(locale,service.tr)}`, provider: { "@type": "Organization", name: "BES Enerji", url: siteUrl, telephone: company.phone }, areaServed: { "@type": "Country", name: "Türkiye" } },
    breadcrumbSchema([{ name: ui[locale].homeLabel, path: sectionPath(locale,"home") }, { name: ui[locale].nav.services, path: sectionPath(locale,"services") }, { name: service.title, path: servicePath(locale,service.tr) }]),
  ] };
  return <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={locale === "ar" ? "rtl localized-page" : "localized-page"}><Header locale={locale}/><main><Content locale={locale} info={info}/></main><Footer locale={locale}/>{serviceSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g,"\\u003c") }}/>}</div>;
}
