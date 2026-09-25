import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, Footer, Header } from "../../../components";
import { equipment } from "../../../seo-data";
import { equipmentDetails, type EquipmentSlug } from "../../../equipment-details";
import { pageMetadata } from "../../../seo-metadata";
import { EquipmentVideo } from "../equipment-video";
import { equipmentPath } from "../../../locale-routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return equipment.map(item => ({ slug: item.code.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = equipment.find(entry => entry.code.toLowerCase() === slug);
  if (!item) return {};
  return pageMetadata({ title: `${item.name} ${item.code} | BES Enerji Cihaz Parkuru`, description: equipmentDetails[slug as EquipmentSlug].intro, path: equipmentPath("tr",slug), image: item.image, languages: { tr: equipmentPath("tr",slug), en: equipmentPath("en",slug), ar: equipmentPath("ar",slug), "x-default": equipmentPath("tr",slug) } });
}

export default async function EquipmentPage({ params }: Props) {
  const { slug } = await params;
  const item = equipment.find(entry => entry.code.toLowerCase() === slug);
  const detail = equipmentDetails[slug as EquipmentSlug];
  if (!item || !detail) notFound();
  const others = equipment.filter(entry => entry.code !== item.code).slice(0, 3);
  const video = "video" in detail ? detail.video : undefined;

  return <><Header/><main className="equipment-detail-page"><div className="shell">
    <Breadcrumb items={[{ label: "Cihaz Parkurumuz", href: "/cihaz-parkuru" }, { label: item.name }]}/>
    <div className="equipment-detail-hero"><div><span className="kicker">CİHAZ PARKURU · {item.code}</span><h1>{item.name}</h1><p>{detail.intro}</p><Link className="bes-button bes-button-primary" href="/iletisim">Test hizmeti için iletişime geçin →</Link></div><div className="equipment-detail-image"><Image src={item.image} alt={`${item.code} ${item.name} ürün görseli`} fill priority sizes="(max-width: 800px) 100vw, 45vw"/></div></div>
    <div className="equipment-detail-content"><article><span className="kicker">ÖLÇÜMÜN AMACI</span><h2>Bu cihaz neyi kontrol eder?</h2><p>{detail.purpose}</p><span className="kicker">SAHA UYGULAMASI</span><h2>Test nasıl değerlendirilir?</h2><p>{detail.method}</p></article><aside><h2>BES Enerji cihaz parkurunda</h2><ul>{detail.features.map(feature => <li key={feature}>{feature}</li>)}</ul><p>Bu cihazı, trafo ve OG ekipmanlarında uygun test planı kapsamında kullanıyoruz. Ölçüm bulguları ekipman verileri ve önceki test kayıtlarıyla birlikte değerlendirilir.</p></aside></div>
    <section className="equipment-technical"><div><span className="kicker">TEKNİK KAPASİTE</span><h2>Teknik özellikler</h2><dl>{detail.specifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p>Test aralığı ve bağlantı yöntemi, ölçülecek ekipmanın özelliklerine göre belirlenir.</p></div><div><span className="kicker">KULLANIM ALANLARI</span><h2>Sahada hangi sorulara yanıt verir?</h2><ul>{detail.applications.map(application => <li key={application}>{application}</li>)}</ul></div></section>
    {video && <section className="equipment-video"><div><span className="kicker">CİHAZ VİDEOSU</span><h2>{item.code} çalışma videosu</h2><p>Cihazın test yöntemi ve kullanım adımlarını görsel olarak inceleyin.</p></div><EquipmentVideo code={item.code} video={video} image={item.image}/></section>}
    <section className="equipment-detail-more"><h2>Diğer test cihazları</h2><div>{others.map(entry => <Link key={entry.code} href={`/cihaz-parkuru/${entry.code.toLowerCase()}`}><small>{entry.code}</small><strong>{entry.name}</strong><span>Detayları inceleyin →</span></Link>)}</div></section>
  </div></main><Footer/></>;
}
