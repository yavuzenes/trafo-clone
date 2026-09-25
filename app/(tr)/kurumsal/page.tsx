/* eslint-disable react/no-unescaped-entities -- Turkish numeric suffixes in page copy */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, Breadcrumb } from "../../components";
import { pageMetadata } from "../../seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Hakkımızda | BES Enerji Trafo ve OG Hücre Teknik Ekibi",
  description: "BES Enerji, 10 yıllık saha tecrübesi ve 100'ü aşkın başarılı saha çalışmasıyla trafo ve OG hücre arıza, bakım, test ve onarım hizmetleri sunar.",
  path: "/kurumsal",
});

export default function Page() {
  return <><Header/><main><section className="page-hero"><div className="shell"><Breadcrumb items={[{label:"Hakkımızda"}]}/><span className="kicker light">BES ENERJİ</span><h1>Trafo ve OG hücre sistemlerinde mühendislik odaklı teknik ekip.</h1><p>10 yıllık saha tecrübesi ve 100'ü aşkın başarılı saha çalışmasıyla ölçüm verisine dayalı teknik hizmet.</p></div></section><section className="section"><div className="shell about-layout"><div className="about-image"><Image src="/images/trafo-bakim-5.webp" alt="Trafo test ve bakım çalışmasında teknik ekip" fill sizes="(max-width:760px) 100vw, 48vw"/></div><div><span className="kicker">HAKKIMIZDA</span><h2>Deneyimli mühendis kadrosu, güçlü saha uygulaması.</h2><p className="lead">BES Enerji, 10 yıllık saha tecrübesi ve 100'ü aşkın başarılı çalışmanın birikimiyle trafo, OG hücre ve yüksek gerilim altyapısının arıza tespiti, bakımı, testi ve onarımına odaklanır.</p><p>Her tesiste önce ekipman geçmişini, mevcut arıza belirtisini, yük koşullarını ve işletmenin duruş planını değerlendiririz. Böylece bakım veya müdahale kapsamını varsayımlarla değil, sahadaki teknik ihtiyaçla belirleriz.</p><p>Ölçüm sonuçlarını yalnızca bir değer listesi olarak görmeyiz. Trafo ve hücre testlerini önceki raporlarla, üretici bilgileriyle ve işletme koşullarıyla birlikte yorumlayarak uygulanabilir önerilere dönüştürürüz.</p><p>Hedefimiz, güvenli ve izlenebilir teknik hizmetle işletmelerin enerji sürekliliğini destekleyen uzun vadeli bir çözüm ortaklığı kurmaktır.</p><Link className="bes-button bes-button-primary" href="/iletisim">Teknik ekibimizle görüşün →</Link></div></div></section><section className="dark-section"><div className="shell value-grid">{[["10 yıllık saha tecrübesi","Trafo ve OG hücre arıza, bakım, test ve onarımında uygulama birikimi."],["100'ü aşkın saha çalışması","Farklı tesis ve ekipman koşullarında tamamlanan teknik çalışmalar."],["Ölçüme dayalı karar","Arıza ve bakım kararlarında uygun elektriksel testleri, ekipman geçmişiyle birlikte yorumlarız."]].map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section></main><Footer/></>;
}
