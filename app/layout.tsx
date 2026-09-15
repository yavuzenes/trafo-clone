import type { Metadata } from "next";
import "./globals.css";
import "./seo.css";

export const metadata: Metadata = {metadataBase:new URL("https://besenerji.net"),title:{default:"BES Enerji | Trafo Bakım, Test ve Devreye Alma",template:"%s"},description:"Ankara merkezli trafo bakım, onarım, test, yağ analizi, kesici servisi ve devreye alma hizmetleri.",keywords:["trafo bakımı","trafo testi","trafo onarımı","Ankara trafo servisi","trafo yağ analizi","devreye alma"],alternates:{canonical:"/",languages:{tr:"/",en:"/en",ar:"/ar","x-default":"/"}},robots:{index:true,follow:true},category:"engineering"};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" style={{"--font-manrope": '"Segoe UI", Arial, sans-serif', "--font-mono": '"Cascadia Mono", Consolas, monospace'} as React.CSSProperties}>
      <body>
        {children}
      </body>
    </html>
  );
}
