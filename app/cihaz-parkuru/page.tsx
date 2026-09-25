import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, Breadcrumb } from "../components";
import { equipment } from "../seo-data";
import { pageMetadata } from "../seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Cihaz Parkurumuz | Trafo Test ve Ölçüm Cihazları",
  description: "Trafo TTR, izolasyon, sargı direnci, yağ ve CT/PT ölçümlerinde kullanılan cihazların teknik amaçlarını ve özelliklerini inceleyin.",
  path: "/cihaz-parkuru",
});

export default function Page() {
  return <><Header/><main className="equipment-catalog-page"><div className="shell">
    <Breadcrumb items={[{ label: "Cihaz Parkurumuz" }]}/>
    <div className="equipment-catalog-intro"><span className="kicker">ÖLÇÜLEBİLİR TEKNİK SONUÇLAR</span><h1>Cihaz parkurumuz</h1><p>Trafo ve OG ekipmanlarında doğru karar, uygun ölçüm yöntemiyle başlar. Cihaz kartına tıklayarak modelin test aralığını, kullanım amacını ve saha değerlendirme yaklaşımını inceleyebilirsiniz.</p></div>
    <div className="equipment-grid">{equipment.map(item => <Link key={item.code} href={`/cihaz-parkuru/${item.code.toLowerCase()}`} aria-label={`${item.code} ${item.name} özelliklerini inceleyin`}><div className="equipment-image"><Image src={item.image} alt={`${item.code} ${item.name}`} fill sizes="(max-width:700px) 100vw, 33vw"/></div><div className="equipment-summary"><span>{item.code}</span><h2>{item.name}</h2><p>{item.specs[0]}</p><span className="equipment-card-action">Teknik özellikleri inceleyin →</span></div></Link>)}</div>
    <div className="equipment-catalog-context"><article><span className="kicker">TEST SEÇİMİ</span><h2>Ölçüm, arıza belirtisine göre planlanır.</h2><p>Çevirme oranı, izolasyon, sargı direnci veya yağ testi aynı soruya yanıt vermez. Ekipman tipi, olay geçmişi ve önceki ölçüm kayıtları test planını belirler.</p></article><article><span className="kicker">GÜVENLİ UYGULAMA</span><h2>Enerjisiz çalışma koşulu doğrulanır.</h2><p>Bağlantı ve ölçüm öncesinde izolasyon, kilitleme ve gerilim yokluğu prosedürleri değerlendirilir. Test sonrasında deşarj ve yeniden devreye alma adımları takip edilir.</p></article><article><span className="kicker">TEKNİK RAPOR</span><h2>Sonuçlar tek değer olarak yorumlanmaz.</h2><p>Ölçümler etiket verileri, sıcaklık, yük ve geçmiş raporlarla karşılaştırılarak bakım veya ileri inceleme önerisine dönüştürülür.</p></article></div>
    <p className="equipment-note">Bu modeller BES Enerji&apos;nin test ve ölçüm cihazları arasında yer alır. Uygulanacak test yöntemi ekipmanın teknik ihtiyacına göre seçilir.</p>
  </div></main><Footer/></>;
}
