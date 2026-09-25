import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, Breadcrumb } from "../components";
import { pageMetadata } from "../seo-metadata";

const partners = [
  { name: "Alfanar SFA Elektrik", image: "alfanar-sfaelektrik.jpeg" },
  { name: "EKOS Elektrik", image: "ekoselektrik.jpeg" },
  { name: "Astor Enerji", image: "astor.jpeg" },
];

export const metadata: Metadata = pageMetadata({
  title: "Yetkili Servisler ve Çözüm Partnerleri | BES Enerji",
  description: "BES Enerji'nin teknik çözüm partnerleri ve doğrulanmış üretici servis yetkilerine ilişkin şeffaf bilgi.",
  path: "/yetkili-servisler",
});

export default function Page() {
  return <><Header/><main className="partners-page"><div className="shell"><Breadcrumb items={[{ label: "Yetkili Servisler ve Çözüm Partnerleri" }]}/><div className="partners-intro"><span className="kicker">TEKNİK İŞ BİRLİĞİ</span><h1>Yetkili servisler ve çözüm partnerleri</h1><p>Enerji altyapısındaki teknik çalışmalarımızla ilişkili markaları tek yerde gösteriyoruz. Çözüm partnerliği ile üretici tarafından verilmiş servis yetkisi farklı statülerdir.</p></div><div className="partner-grid">{partners.map(item => <article key={item.name}><div className="partner-logo"><Image src={`/images/${item.image}`} alt={`${item.name} logosu`} width={260} height={130}/></div><h2>{item.name}</h2><p>Teknik çözüm partneri</p></article>)}</div><section className="partner-disclosure"><span className="kicker">YETKİLİ SERVİS BİLGİSİ</span><h2>Yetki kapsamını doğrulayarak yayımlıyoruz.</h2><p>Bir üretici adına “yetkili servis” ifadesini kullanabilmek için güncel yetki belgesi, geçerlilik süresi ve hangi ekipmanı kapsadığı teyit edilmelidir. Bu doğrulama tamamlanmadan yukarıdaki markaları yetkili servis olarak nitelendirmiyoruz.</p><Link className="bes-button bes-button-primary" href="/iletisim">Servis kapsamını sorun →</Link></section></div></main><Footer/></>;
}
