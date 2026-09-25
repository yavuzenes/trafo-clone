import type { Metadata } from "next";
import Image from "next/image";
import { Header, Footer, Breadcrumb } from "../components";
import { references, referenceNames } from "../data";
import { pageMetadata } from "../seo-metadata";
export const metadata: Metadata = pageMetadata({ title: "Referanslarımız | BES Enerji", description: "BES Enerji'nin trafo bakım, test, onarım ve devreye alma hizmetlerinde çözüm sunduğu kurumları inceleyin.", path: "/referanslar" });
export default function Page(){return <><Header/><main><section className="page-hero"><div className="shell"><Breadcrumb items={[{label:"Referanslar"}]}/><span className="kicker light">Çözüm sunduğumuz kurumlar</span><h1>Güvenin arkasında sahadaki işimiz var.</h1><p>Enerji altyapısında bakım, test ve teknik servis ihtiyaçlarına çözüm sunduğumuz kurumlardan seçkiler.</p></div></section><section className="section" id="referans-listesi"><div className="shell reference-page-grid">{references.map((item,index)=><article key={item}>{item==="tcdd"?<span className="reference-typemark" aria-label={referenceNames[index]}>TCDD</span>:<Image src={`/images/${item}`} alt={`${referenceNames[index]} logosu`} width={240} height={130}/>}<h2>{referenceNames[index]}</h2></article>)}</div></section></main><Footer/></>}
