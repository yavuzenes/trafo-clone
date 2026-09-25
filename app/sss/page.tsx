import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, Footer, Header } from "../components";
import { company } from "../data";
import { breadcrumbSchema, pageMetadata } from "../seo-metadata";

const questions = [
  { q: "Trafo bakımı ne zaman yapılmalı?", a: "Bakım periyodu trafo tipi, üretici önerileri, yük profili, ortam koşulları ve geçmiş test sonuçlarına göre belirlenir. Sabit bir takvim yerine risk ve ekipman durumuna dayalı planlama yapılmalıdır." },
  { q: "Trafo arızasında ilk hangi bilgileri paylaşmalıyım?", a: "Trafo etiket bilgisi, tesis konumu, görülen belirti, koruma açması, son bakım tarihi ve varsa test raporları ilk değerlendirmeyi hızlandırır. Güvenli olmayan ekipmana yetkisiz müdahale edilmemelidir." },
  { q: "OG hücre ve trafo testleri için enerji kesintisi gerekir mi?", a: "Testin türüne göre değişir. İzolasyon, çevirme oranı ve sargı direnci gibi birçok test enerjisiz ekipmanda yapılır. Kesinti ve güvenlik planı saha kapsamı kesinleşince oluşturulur." },
  { q: "Bakım ve test sonunda rapor hazırlanır mı?", a: "İş kapsamına göre uygulanan kontroller, ölçüm değerleri, bulgular ve önerilen aksiyonlar teknik raporda kaydedilir." },
  { q: "Teklif bedelini neler etkiler?", a: "Ekipman sayısı ve tipi, gerilim seviyesi, yapılacak testler, tesis konumu, erişim koşulları, duruş penceresi ve arızanın kapsamı teklifin belirlenmesinde etkilidir." },
  { q: "Cihaz kalibrasyon belgeleri paylaşılabilir mi?", a: "BES Enerji cihaz parkurundaki ölçüm cihazlarına ilişkin kalibrasyon belge ve tarih bilgileri, talebiniz kapsamında teknik ekibimiz tarafından paylaşılır." },
  { q: "BES Enerji hangi illerde hizmet planlayabilir?", a: "Firma Ankara merkezlidir. Diğer illerde saha çalışması, talebin türüne, ekip uygunluğuna ve operasyon planına göre değerlendirilir; varış süresi önceden taahhüt edilmez." },
] as const;

export const metadata: Metadata = pageMetadata({
  title: "Trafo Bakım, Arıza ve Test Sık Sorulan Sorular | BES Enerji",
  description: "Trafo bakım periyodu, arıza tespiti, OG hücre testleri, teknik rapor, kalibrasyon ve teklif süreci hakkında sık sorulan sorular.",
  path: "/sss",
});

export default function Page() {
  const schema = { "@context": "https://schema.org", "@graph": [
    breadcrumbSchema([{ name: "Ana Sayfa", path: "/" }, { name: "Sık Sorulan Sorular", path: "/sss" }]),
    { "@type": "FAQPage", mainEntity: questions.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ] };
  return <><Header/><main><section className="page-hero"><div className="shell"><Breadcrumb items={[{ label: "Sık Sorulan Sorular" }]}/><span className="kicker light">TEKNİK BİLGİ</span><h1>Trafo ve OG hücre hizmetleri hakkında sık sorulanlar.</h1><p>Bakım, arıza, test ve saha planlaması için kısa yanıtlar.</p></div></section><section className="section"><div className="shell faq-page"><div><span className="kicker">BES ENERJİ YANITLIYOR</span><h2>Doğru kapsam için doğru bilgi.</h2><p>Bu yanıtlar genel bilgilendirme içindir. Kesin test ve müdahale planı ekipmanın durumuna göre belirlenir.</p><Link className="bes-button bes-button-primary" href="/iletisim">Teknik talep oluşturun →</Link></div><div>{questions.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}<p className="faq-page-call">Acil teknik talep için <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a> numarasını arayabilirsiniz.</p></div></div></section></main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}/></>;
}
