import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, Breadcrumb } from "../components";
import { pageMetadata } from "../seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Yetkili Servisler ve Teknik İş Ortaklıkları | BES Enerji",
  description: "BES Enerji yetkili servis bilgileri, teknik iş ortaklıkları ve marka bazlı servis kapsamına ilişkin doğrulanmış bilgileri inceleyin.",
  path: "/yetkili-servisler",
});

export default function Page() { return <><Header/><main><section className="page-hero"><div className="shell"><Breadcrumb items={[{label:"Yetkili Servisler"}]}/><span className="kicker light">Kurumsal hizmet ağı</span><h1>Yetkili servislerimiz</h1><p>Üretici yetkisi, iş ortaklığı ve genel teknik hizmet birbirinden farklı kapsamlar taşır.</p></div></section><section className="section"><div className="shell"><div className="core-rich-grid"><article><span className="kicker">Şeffaf bilgi</span><h2>Üretici yetkisi doğrulanarak yayımlanır.</h2><p>Bir markanın logosunu yetkili servis olarak göstermek için güncel yetki belgesi ve hizmet kapsamının doğrulanması gerekir. Bu bilgiler teyit edilene kadar marka adına yetkili servis iddiasında bulunmuyoruz.</p></article><article><span className="kicker">Teknik iş birliği</span><h2>Partnerlerimiz ayrı gösterilir.</h2><p>İş ortaklığı, otomatik olarak üretici adına yetkili servis statüsü anlamına gelmez. Mevcut partner bilgilerini ayrı sayfada inceleyebilirsiniz.</p><Link className="text-link" href="/partnerler">Partnerlerimizi inceleyin →</Link></article></div><p style={{marginTop:32}}>Trafo ve OG hücre bakım, test veya arıza talebiniz için <Link href="/iletisim">teknik ekibimizle iletişime geçin</Link>.</p></div></section></main><Footer/></>; }
