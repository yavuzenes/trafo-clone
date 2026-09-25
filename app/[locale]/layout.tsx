import "../globals.css";
import "../seo.css";
import "../solutions.css";
import "../logo.css";
import "../industrial.css";
import "../responsive-overrides.css";
import "../intro.css";
import "../brief-redesign.css";
import "../core-services.css";
import "../bes-relaunch.css";
import { notFound } from "next/navigation";
import { RootDocument, siteMetadata } from "../site-shell";

export const metadata = siteMetadata;

export default async function LocalizedLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") notFound();
  return <RootDocument lang={locale}>{children}</RootDocument>;
}
