import Image from "next/image";
import Link from "next/link";
import { company, services, references } from "./data";
import { coreServices } from "./core-services";

const mainNav = [
  ["Ana Sayfa", "/"],
  ["Hakkımızda", "/kurumsal"],
  ["Hizmetlerimiz", "/hizmetler"],
  ["Yetkili Servisler ve Partnerler", "/yetkili-servisler"],
  ["Referanslar", "/referanslar"],
] as const;

export function LanguageMenu({ locale = "tr" }: { locale?: "tr" | "en" | "ar" }) {
  const active = { tr: "Türkçe", en: "English", ar: "العربية" }[locale];
  return <details className="bes-language-menu"><summary aria-label={`Dil seçimi, mevcut dil ${active}`}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9M12 3C9.6 5.5 8.4 8.5 8.4 12s1.2 6.5 3.6 9"/></svg><span>{active}</span><svg className="bes-language-chevron" viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m2 4 4 4 4-4"/></svg></summary><div className="bes-language-options"><Link href="/" lang="tr" aria-current={locale==="tr"?"page":undefined}>Türkçe</Link><Link href="/en" lang="en" aria-current={locale==="en"?"page":undefined}>English</Link><Link href="/ar" lang="ar" dir="rtl" aria-current={locale==="ar"?"page":undefined}>العربية</Link></div></details>;
}

export function Header() {
  return <>
    <div className="bes-utility"><div className="shell bes-utility-inner"><span>Ankara merkezli · Türkiye genelinde teknik saha hizmeti</span><Link className="bes-utility-cta" href="/iletisim">Teknik talep oluşturun <span aria-hidden="true">↗</span></Link></div></div>
    <header className="bes-header"><div className="shell bes-header-inner"><Link className="bes-brand" href="/" aria-label="BES Enerji ana sayfa"><Image src="/images/bes-enerji-2026-logo.jpg" alt="BES Enerji" width={270} height={107} priority/></Link><nav className="bes-nav" aria-label="Ana menü">{mainNav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><Link className="bes-nav-contact" href="/iletisim">İletişim</Link><LanguageMenu/><details className="bes-mobile-menu"><summary>Menü <span aria-hidden="true">☰</span></summary><nav aria-label="Mobil menü">{mainNav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link href="/cihaz-parkuru">Cihaz Parkurumuz</Link><Link href="/faaliyet-alanlari">Faaliyet Alanları</Link><Link href="/iletisim">İletişim</Link></nav></details></div></header>
  </>;
}

export function ReferenceStrip() {
  return <section className="reference-strip" aria-labelledby="reference-strip-title"><div className="shell reference-strip-head"><span className="kicker" id="reference-strip-title">Referanslarımız</span><Link className="reference-all-link" href="/referanslar#referans-listesi">Tüm referansları inceleyin →</Link></div><div className="reference-marquee"><div className="reference-marquee-track">{[...references,...references].map((item,index)=><div className="reference-logo" key={`${item}-${index}`}><Image src={`/images/${item}`} alt="Referans kurum logosu" width={180} height={90}/></div>)}</div></div></section>;
}

export function Footer() {
  return <><ReferenceStrip/><section className="bes-cta-band"><div className="shell bes-cta-inner"><div><span className="kicker">TEKNİK DESTEK VE KEŞİF</span><h2>Enerji sürekliliğinizi birlikte planlayalım.</h2><p>Trafo ve OG hücre sistemleriniz için bakım, arıza veya test talebinizi iletin.</p></div><div><a className="bes-button bes-button-light" href={`tel:${company.phone}`}>Hemen arayın</a><Link className="bes-button bes-button-outline-light" href="/iletisim">Teklif isteyin</Link></div></div></section><footer className="bes-footer"><div className="shell bes-footer-grid"><div><Link href="/" className="bes-footer-brand"><Image src="/images/bes-enerji-2026-logo.jpg" alt="BES Enerji" width={220} height={87}/></Link><p>Trafo ve OG hücre sistemlerinde arıza tespiti, bakım, onarım ve elektriksel test odaklı teknik servis.</p></div><div><h3>Hizmetlerimiz</h3>{coreServices.slice(0,6).map(service=><Link key={service.slug} href={`/hizmetler/${service.slug}`}>{service.shortTitle}</Link>)}</div><div><h3>Kurumsal</h3><Link href="/kurumsal">Hakkımızda</Link><Link href="/faaliyet-alanlari">Faaliyet Alanları</Link><Link href="/cihaz-parkuru">Cihaz Parkuru</Link><Link href="/yetkili-servisler">Yetkili Servisler ve Partnerler</Link><Link href="/referanslar">Referanslar</Link><Link href="/sss">Sık Sorulan Sorular</Link></div><div><h3>İletişim</h3><a href={`tel:${company.phone}`}>{company.phoneDisplay}</a><p>{company.address}</p><Link href="/iletisim">İletişim bilgileri →</Link></div></div><div className="shell bes-copyright">© 2026 BES Enerji. Tüm hakları saklıdır.</div></footer><div className="sticky-actions"><a href={`tel:${company.phone}`}>Ara</a><a href="https://wa.me/905532124761" target="_blank" rel="noreferrer">WhatsApp</a></div></>;
}

export function Breadcrumb({items}:{items:{label:string;href?:string}[]}) {return <nav className="breadcrumb" aria-label="İçerik yolu"><Link href="/">Ana Sayfa</Link>{items.map((item,index)=><span key={index}>/ {item.href?<Link href={item.href}>{item.label}</Link>:item.label}</span>)}</nav>}

export function ServiceCards() {return <div className="service-grid">{services.map((service,index)=><Link className="service-card" href={`/hizmetler/${service.slug}`} key={service.slug}><span className="number">0{index+1}</span><div className="service-photo"><Image src={service.image} alt={service.title} fill sizes="(max-width: 760px) 100vw, 33vw"/></div><div className="service-body"><h3>{service.title}</h3><p>{service.summary}</p><span className="arrow">Hizmeti inceleyin →</span></div></Link>)}</div>}
