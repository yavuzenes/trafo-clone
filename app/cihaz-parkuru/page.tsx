import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, Breadcrumb } from "../components";
import { equipment } from "../seo-data";
import { pageMetadata } from "../seo-metadata";

export const metadata: Metadata = pageMetadata({title:"Cihaz Parkurumuz | Trafo Test ve Ölçüm Cihazları",description:"Trafo TTR, izolasyon, sargı direnci, yağ ve CT/PT ölçümlerinde kullanılan cihazların teknik amaçlarını ve özelliklerini inceleyin.",path:"/cihaz-parkuru"});

export default function Page(){return <><Header/><main className="equipment-catalog-page"><div className="shell"><Breadcrumb items={[{label:"Cihaz Parkurumuz"}]}/><div className="equipment-catalog-intro"><span className="kicker">ÖLÇÜLEBİLİR TEKNİK SONUÇLAR</span><h1>Cihaz parkurumuz</h1><p>Her cihazın kullanım amacı, ölçtüğü parametreler ve saha uygulaması için BES Enerji içindeki detay sayfasını inceleyin.</p></div><div className="equipment-grid">{equipment.map(item=><article key={item.code}><div className="equipment-image"><Image src={item.image} alt={`${item.code} ${item.name}`} fill sizes="(max-width:700px) 100vw, 33vw"/></div><div className="equipment-summary"><span>{item.code}</span><h2>{item.name}</h2><p>{item.specs[0]}</p><Link href={`/cihaz-parkuru/${item.code.toLowerCase()}`}>Cihaz detaylarını inceleyin →</Link></div></article>)}</div><p className="equipment-note">Görseller ilgili ürünleri tanıtmak içindir. Sahada kullanılacak model, cihaz envanteri ve kalibrasyon durumu hizmet öncesinde teyit edilir.</p></div></main><Footer/></>}
