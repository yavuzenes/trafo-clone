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
import { RootDocument, siteMetadata } from "../site-shell";

export const metadata = siteMetadata;

export default function TurkishLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="tr">{children}</RootDocument>;
}
