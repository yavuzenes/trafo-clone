import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, Breadcrumb } from "../components";
import { CoreServiceGrid } from "../core-service-grid";
import { pageMetadata } from "../seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Trafo ve OG Hücre Bakım, Arıza ve Test Hizmetleri | BES Enerji",
  description: "Trafo bakım ve onarım, arıza tespiti, test; OG hücre bakım, arıza ve test; proje, taahhüt ve acil müdahale için BES Enerji'nin dokuz ana hizmetini inceleyin.",
  path: "/hizmetler",
});

export default function Page() {
  return <><Header/><main>
    <section className="core-index-hero"><div className="shell"><Breadcrumb items={[{label:"Hizmetler"}]}/><span className="kicker light">BES ENERJİ · SAHA HİZMETLERİ</span><h1>Trafo ve OG hücre sistemleri için teknik hizmetler.</h1><p>Bakım, arıza teşhisi, elektriksel test ve mühendislik uygulamalarını üç uzmanlık alanında, dokuz ana hizmet olarak sunuyoruz.</p><Link className="btn primary" href="/iletisim">Teknik talep oluşturun</Link></div></section>
    <section className="section"><div className="shell"><div className="section-head"><div><span className="kicker">Hizmetlerimiz</span><h2>Ekipmanınıza ve ihtiyacınıza uygun çözümü seçin.</h2></div><p>Her hizmetin kapsamı, teknik içeriği ve uygulama adımları ayrı sayfada açıklanır.</p></div><CoreServiceGrid/></div></section>
    <section className="core-method"><div className="shell"><span className="kicker">Çalışma yaklaşımımız</span><h2>Önce doğru teşhis. Sonra ölçülebilir uygulama.</h2><div className="core-method-grid"><p><strong>01 / Keşif ve güvenlik</strong> Ekipman tipi, işletme koşulları ve saha riskleri değerlendirilir.</p><p><strong>02 / Test ve uygulama</strong> Bakım veya onarım kapsamı uygun ölçümlerle doğrulanır.</p><p><strong>03 / Rapor ve takip</strong> Bulgular, öneriler ve sonraki adımlar açıkça kayıt altına alınır.</p></div></div></section>
  </main><Footer/></>;
}
