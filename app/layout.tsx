import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bes Enerji | Tamir, Montaj, Bakım ve Devreye Alma",
  description: "Trafo tamiri, montajı, periyodik bakım, test ve devreye alma hizmetleri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="manrope-variable dm-mono-variable bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}