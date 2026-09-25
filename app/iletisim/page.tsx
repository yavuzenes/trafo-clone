import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, Breadcrumb } from "../components";
import { company } from "../data";
import { pageMetadata } from "../seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "İletişim ve Teklif | BES Enerji Ankara",
  description: "BES Enerji teknik ekibine ulaşın. Haftada 6 gün hizmet, acil arıza durumlarında 7/24 müdahale hattı.",
  path: "/iletisim",
});

export default function Page() {
  return <><Header /><main>
    <section className="page-hero"><div className="shell"><Breadcrumb items={[{ label: "İletişim" }]} /><span className="kicker light">İletişim</span><h1>Teknik ihtiyacınızı birlikte değerlendirelim.</h1><p>Trafo bilgisi, tesis konumu ve talep edilen hizmeti paylaşın; kapsamı hızlıca netleştirelim.</p></div></section>
    <section className="section"><div className="shell contact-direct"><span className="kicker">Doğrudan ulaşın</span><h2>Teknik ekibimizle görüşün.</h2><div className="contact-direct-grid">
      <div className="contact-card"><span>Telefon</span><a href={`tel:${company.phone}`}>{company.phoneDisplay}</a></div>
      <div className="contact-card"><span>E-posta</span><a href={`mailto:${company.email}`}>{company.email}</a><a href={`mailto:${company.serviceEmail}`}>{company.serviceEmail}</a></div>
      <div className="contact-card"><span>Adres</span><address>{company.address}</address></div>
      <div className="contact-card"><span>Çalışma düzeni</span><p>Haftada 6 gün hizmet. Acil arıza durumları için 7/24 telefon hattı.</p></div>
    </div></div></section>
    <section className="soft-section"><div className="shell billing-panel"><div><span className="kicker">Firma bilgileri</span><h2>BES Taahhüt Enerji Sanayi ve Ticaret Ltd. Şti.</h2><p>{company.address}</p><p><Link href="/kvkk">KVKK aydınlatma metni →</Link></p></div><dl><div><dt>E-posta</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div><div><dt>Servis E-posta</dt><dd><a href={`mailto:${company.serviceEmail}`}>{company.serviceEmail}</a></dd></div></dl></div></section>
  </main><Footer /></>;
}
