import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, Footer, Header } from "../../components";
import { equipment } from "../../seo-data";
import { equipmentDetails, type EquipmentSlug } from "../../equipment-details";
import { pageMetadata } from "../../seo-metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return equipment.map((item) => ({ slug: item.code.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = equipment.find((entry) => entry.code.toLowerCase() === slug);
  if (!item) return {};
  return pageMetadata({
    title: `${item.name} ${item.code} | BES Enerji Cihaz Parkuru`,
    description: equipmentDetails[slug as EquipmentSlug].intro,
    path: `/cihaz-parkuru/${slug}`,
    image: item.image,
  });
}

export default async function EquipmentPage({ params }: Props) {
  const { slug } = await params;
  const item = equipment.find((entry) => entry.code.toLowerCase() === slug);
  const detail = equipmentDetails[slug as EquipmentSlug];
  if (!item || !detail) notFound();
  const others = equipment.filter((entry) => entry.code !== item.code).slice(0, 3);

  return <><Header/><main className="equipment-detail-page"><div className="shell"><Breadcrumb items={[{label:"Cihaz Parkurumuz",href:"/cihaz-parkuru"},{label:item.name}]}/><div className="equipment-detail-hero"><div><span className="kicker">CİHAZ PARKURU · {item.code}</span><h1>{item.name}</h1><p>{detail.intro}</p><Link className="bes-button bes-button-primary" href="/iletisim">Test hizmeti için iletişime geçin →</Link></div><div className="equipment-detail-image"><Image src={item.image} alt={`${item.code} ${item.name} ürün görseli`} fill priority sizes="(max-width: 800px) 100vw, 45vw"/></div></div><div className="equipment-detail-content"><article><span className="kicker">ÖLÇÜMÜN AMACI</span><h2>Bu cihaz neyi kontrol eder?</h2><p>{detail.purpose}</p><span className="kicker">SAHA UYGULAMASI</span><h2>Test nasıl değerlendirilir?</h2><p>{detail.method}</p></article><aside><h2>Öne çıkan özellikler</h2><ul>{detail.features.map((feature)=><li key={feature}>{feature}</li>)}</ul><p>Model özellikleri üretici bilgisidir. BES Enerji&apos;nin güncel cihaz envanteri ve kalibrasyon durumu hizmet öncesinde ayrıca teyit edilir.</p></aside></div><section className="equipment-detail-more"><h2>Diğer test cihazları</h2><div>{others.map((entry)=><Link key={entry.code} href={`/cihaz-parkuru/${entry.code.toLowerCase()}`}><small>{entry.code}</small><strong>{entry.name}</strong><span>Detayları inceleyin →</span></Link>)}</div></section></div></main><Footer/></>;
}
