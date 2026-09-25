import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, Footer, Header } from "../../components";
import { cityPages } from "../../seo-data";
import { breadcrumbSchema, pageMetadata, siteUrl } from "../../seo-metadata";

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return cityPages.map(({ slug }) => ({ city: slug })); }
function getCity(slug: string) { return cityPages.find((item) => item.slug === slug); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const item = getCity(city);
  if (!item) return {};
  const localName = item.slug === "sanliurfa" ? "Şanlıurfa (Urfa)" : item.name;
  return {
    ...pageMetadata({
      title: `${item.name} Trafo Bakım, Arıza ve Onarım | BES Enerji`,
      description: `${localName} için trafo bakım ve onarım, arıza tespiti, OG hücre kontrolü ve elektriksel test planı. BES Enerji ile tesisinize uygun teknik kapsamı görüşün.`,
      path: `/trafo-bakimi/${item.slug}`,
    }),
    keywords: [`${item.name} trafo bakımı`, `${item.name} trafo arıza`, `${item.name} trafo onarım`, `${item.name} OG hücre bakımı`, "trafo test"],
  };
}

export default async function Page({ params }: Props) {
  const { city } = await params;
  const item = getCity(city);
  if (!item) notFound();
  const path = `/trafo-bakimi/${item.slug}`;
  const faq = [
    { q: `${item.name} trafo bakımı ne sıklıkla planlanmalı?`, a: "Tek bir sabit periyot her tesis için uygun değildir. Trafo tipi, yük geçmişi, ortam koşulları, üretici önerileri ve önceki test bulguları birlikte değerlendirilerek bakım takvimi oluşturulur." },
    { q: `${item.name} için trafo arızası talebi nasıl iletilir?`, a: "Tesis konumu, trafo etiketi, görülen belirti, koruma açması ve mevcut ölçüm raporları paylaşılır. Müdahale kapsamı ve ekip uygunluğu görüşme sonrasında netleştirilir." },
    { q: "Bakım veya test sonunda teknik rapor verilir mi?", a: "Uygulanan kontrol ve ölçümler, bulgular ve önerilen sonraki adımlar iş kapsamına uygun teknik raporda kaydedilir." },
  ];
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: `${item.name} trafo bakım, arıza tespiti ve onarım`, description: item.focus, url: `${siteUrl}${path}`, provider: { "@type": "Organization", name: "BES Enerji", url: siteUrl }, areaServed: { "@type": "City", name: item.name }, serviceType: ["Trafo bakımı", "Trafo arıza tespiti", "Trafo onarımı", "Trafo testi"] },
    breadcrumbSchema([{ name: "Ana Sayfa", path: "/" }, { name: "Trafo bakım ve onarım", path: "/hizmetler/trafo-bakim-ve-onarimi" }, { name: item.name, path }]),
  ] };

  return <><Header/><main>
    <section className="page-hero city-hero"><div className="shell"><Breadcrumb items={[{ label: "Trafo Bakım ve Onarım", href: "/hizmetler/trafo-bakim-ve-onarimi" }, { label: item.name }]}/><span className="kicker">ANKARA MERKEZLİ · SAHA PLANI İLE TEKNİK HİZMET</span><h1>{item.name} trafo bakım, arıza ve onarım</h1><p>{item.name} bölgesindeki {item.context} için bakım ve arıza tespiti kapsamını tesisin ekipman durumuna göre planlıyoruz.</p><div className="actions"><Link className="btn primary" href="/iletisim">Teknik talep oluşturun</Link><Link className="btn dark-outline" href="/hizmetler/trafo-bakim-ve-onarimi">Hizmet kapsamını inceleyin</Link></div></div></section>
    <section className="section"><div className="shell city-layout"><article><span className="kicker">TESİSE ÖZGÜ YAKLAŞIM</span><h2>{item.name} için trafo servis planı</h2><p>{item.focus}</p><p>Bakım kapsamı; yağlı veya kuru tip trafo, OG hücre, kesici ve koruma ekipmanının gerçek durumuna göre belirlenir. Önceki arıza ve test kayıtları varsa yeni sonuçlarla karşılaştırılır. Saha ekibi ve takvim, talebin değerlendirilmesinden sonra teyit edilir.</p><ul className="check-list"><li>Fiziki kontrol ve bağlantı noktaları</li><li>İzolasyon direnci ve çevirme oranı</li><li>Sargı direnci ve kademe kontrolü</li><li>Uygun ise trafo yağı testleri</li><li>OG hücre, kesici ve koruma kontrolü</li><li>Bulguların teknik raporlanması</li></ul></article><aside><h2>Çalışma süreci</h2>{["Trafo ve tesis bilgilerinin alınması", "Kesinti ve güvenlik planının yapılması", "Bakım, arıza tespiti ve test", "Sonuçların raporlanması"].map((step, index) => <div className="city-step" key={step}><span>0{index + 1}</span><p>{step}</p></div>)}</aside></div></section>
    <section className="soft-section"><div className="shell city-incident"><div><span className="kicker">ARIZA VE ONARIM</span><h2>Beklenmedik duruşta ölçüme dayalı karar</h2></div><div><p>Koruma açması, anormal sıcaklık, yağ kaçağı veya gerilim sorunu görüldüğünde önce ekipmanın güvenli durumu değerlendirilir. Olası nedenler yalnızca belirtiye bakılarak değil; olay geçmişi, görsel kontrol ve uygun elektriksel testlerle araştırılır.</p><p>Onarım, parça temini veya yeniden enerjilendirme kararı sahadaki bulgulara ve işletmenin güvenlik prosedürlerine göre verilir. Acil talepte varış süresi ve kapsam ayrıca teyit edilir.</p><Link href="/hizmetler/trafo-ariza-tespiti-ve-giderilmesi">Trafo arıza hizmetini inceleyin →</Link></div></div></section>
    <section className="section"><div className="shell faq-grid"><div><span className="kicker">SIK SORULANLAR</span><h2>{item.name} trafo servisi hakkında</h2></div><div>{faq.map((entry) => <details key={entry.q}><summary>{entry.q}</summary><p>{entry.a}</p></details>)}</div></div></section>
    <section className="section city-links"><div className="shell"><span className="kicker">İL BAZINDA TEKNİK KAPSAM</span><h2>Diğer iller için trafo bakım bilgileri</h2><div><div>{cityPages.filter((entry) => entry.slug !== item.slug).map((entry) => <Link key={entry.slug} href={`/trafo-bakimi/${entry.slug}`}>{entry.name} trafo bakımı</Link>)}</div></div></div></section>
  </main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}/></>;
}
