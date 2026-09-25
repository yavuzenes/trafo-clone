import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer } from "../../components";
import { BlogArticle } from "../../blog-view";
import { articleBySlug, articles } from "../../blog-all";
import { articlePath } from "../../locale-routes";
import { pageMetadata } from "../../seo-metadata";
import { blogImages } from "../../blog-images";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return articles.tr.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug("tr",slug);
  if (!article) return {};
  return pageMetadata({ title: `${article.title} | BES Enerji`, description: article.description, path: articlePath("tr",article.id), image: blogImages[article.id].src, languages: { tr: articlePath("tr",article.id), en: articlePath("en",article.id), ar: articlePath("ar",article.id), "x-default": articlePath("tr",article.id) } });
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = articleBySlug("tr",slug);
  if (!article) notFound();
  return <><Header/><main><BlogArticle locale="tr" article={article}/></main><Footer/></>;
}
