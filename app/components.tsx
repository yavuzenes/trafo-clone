import Image from "next/image";
import Link from "next/link";
import { company, services, references, referenceNames } from "./data";
import { coreServices } from "./core-services";
import { LanguageMenu } from "./language-menu";
export { LanguageMenu } from "./language-menu";

const mainNav = [
  ["Ana Sayfa", "/"],
  ["Hakkımızda", "/kurumsal"],
  ["Hizmetlerimiz", "/hizmetler"],
  ["Cihaz Parkurumuz", "/cihaz-parkuru"],
  ["Yetkili Servisler ve Partnerler", "/yetkili-servisler"],
  ["Referanslar", "/referanslar"],
  ["Teknik Bilgi", "/blog"],
] as const;

export function Header() {
  return <>
    <div className="bes-utility"><div className="shell bes-utility-inner"><span>Ankara merkezli · Türkiye genelinde teknik saha hizmeti</span><Link className="bes-utility-cta" href="/iletisim">Teknik talep oluşturun <span aria-hidden="true">↗</span></Link></div></div>
    <header className="bes-header"><div className="shell bes-header-inner"><Link className="bes-brand" href="/" aria-label="BES Enerji ana sayfa"><Image src="/images/bes-enerji-2026-logo.jpg" alt="BES Enerji" width={270} height={107} priority/></Link><nav className="bes-nav" aria-label="Ana menü">{mainNav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><Link className="bes-nav-contact" href="/iletisim">İletişim</Link><LanguageMenu/><details className="bes-mobile-menu"><summary>Menü <span aria-hidden="true">☰</span></summary><nav aria-label="Mobil menü">{mainNav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link href="/faaliyet-alanlari">Faaliyet Alanları</Link><Link href="/iletisim">İletişim</Link></nav></details></div></header>
  </>;
}

export function ReferenceStrip() {
  return <section className="reference-strip" aria-labelledby="reference-strip-title"><div className="shell reference-strip-head"><span className="kicker" id="reference-strip-title">Referanslarımız</span><Link className="reference-all-link" href="/referanslar#referans-listesi">Tüm referansları inceleyin →</Link></div><div className="reference-marquee"><div className="reference-marquee-track">{[...references,...references].map((item,index)=><div className="reference-logo" key={`${item}-${index}`}>{item==="tcdd"?<span className="reference-typemark" aria-label={referenceNames[index % references.length]}>TCDD</span>:<Image src={`/images/${item}`} alt={`${referenceNames[index % references.length]} logosu`} width={180} height={90}/>}</div>)}</div></div></section>;
}

export function Footer() {
  return <><ReferenceStrip/><section className="bes-cta-band"><div className="shell bes-cta-inner"><div><span className="kicker">TEKNİK DESTEK VE KEŞİF</span><h2>Enerji sürekliliğinizi birlikte planlayalım.</h2><p>Trafo ve OG hücre sistemleriniz için bakım, arıza veya test talebinizi iletin.</p></div><div><a className="bes-button bes-button-light" href={`tel:${company.phone}`}>Hemen arayın</a><Link className="bes-button bes-button-outline-light" href="/iletisim">Teklif isteyin</Link></div></div></section><footer className="bes-footer"><div className="shell bes-footer-grid"><div><Link href="/" className="bes-footer-brand"><Image src="/images/bes-enerji-2026-logo.jpg" alt="BES Enerji" width={220} height={87}/></Link><p>BES Taahhüt Enerji Sanayi ve Ticaret Ltd. Şti. · Trafo ve OG hücre sistemlerinde arıza tespiti, bakım, onarım ve elektriksel test odaklı teknik servis.</p></div><div><h3>Hizmetlerimiz</h3>{coreServices.slice(0,6).map(service=><Link key={service.slug} href={`/hizmetler/${service.slug}`}>{service.shortTitle}</Link>)}</div><div><h3>Kurumsal</h3><Link href="/kurumsal">Hakkımızda</Link><Link href="/faaliyet-alanlari">Faaliyet Alanları</Link><Link href="/cihaz-parkuru">Cihaz Parkuru</Link><Link href="/yetkili-servisler">Yetkili Servisler ve Partnerler</Link><Link href="/referanslar">Referanslar</Link><Link href="/sss">Sık Sorulan Sorular</Link></div><div><h3>İletişim</h3><a href={`tel:${company.phone}`}>{company.phoneDisplay}</a><a href={`mailto:${company.email}`}>{company.email}</a><a href={`mailto:${company.serviceEmail}`}>{company.serviceEmail}</a><p>{company.address}</p><Link href="/iletisim">İletişim bilgileri →</Link></div></div><div className="shell bes-copyright">© 2026 BES Enerji. Tüm hakları saklıdır.</div></footer><div className="sticky-actions"><a className="emergency-action" href={`tel:${company.phone}`} aria-label={`7/24 Arıza Hattı: ${company.phoneDisplay}`}>7/24 Arıza Hattı</a><a href="https://wa.me/905532124761" target="_blank" rel="noreferrer">WhatsApp</a></div></>;
}

export function Breadcrumb({items}:{items:{label:string;href?:string}[]}) {return <nav className="breadcrumb" aria-label="İçerik yolu"><Link href="/">Ana Sayfa</Link>{items.map((item,index)=><span key={index}>/ {item.href?<Link href={item.href}>{item.label}</Link>:item.label}</span>)}</nav>}

export function ServiceCards() {return <div className="service-grid">{services.map((service,index)=><Link className="service-card" href={`/hizmetler/${service.slug}`} key={service.slug}><span className="number">0{index+1}</span><div className="service-photo"><Image src={service.image} alt={service.title} fill sizes="(max-width: 760px) 100vw, 33vw"/></div><div className="service-body"><h3>{service.title}</h3><p>{service.summary}</p><span className="arrow">Hizmeti inceleyin →</span></div></Link>)}</div>}
