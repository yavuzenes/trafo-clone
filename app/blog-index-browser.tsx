"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogCategories, categoryLabels, type BlogCategory } from "./blog-categories";
import type { SiteLocale } from "./locale-routes";

type Card = { id: string; title: string; description: string; href: string; image: string };
export function BlogIndexBrowser({ locale, cards, read }: { locale: SiteLocale; cards: Card[]; read: string }) {
  const [category, setCategory] = useState<BlogCategory | "all">("all");
  const [query, setQuery] = useState("");
  const labels = categoryLabels[locale];
  const normalized = query.toLocaleLowerCase(locale === "tr" ? "tr-TR" : locale);
  const shown = cards.filter(card => (category === "all" || blogCategories[card.id] === category) && `${card.title} ${card.description}`.toLocaleLowerCase(locale === "tr" ? "tr-TR" : locale).includes(normalized));
  return <><div className="blog-browser-controls"><div className="blog-category-list" role="group" aria-label={labels.all}>{(["all","transformer","switchgear","testing","fault"] as const).map(key => <button type="button" key={key} className={category === key ? "active" : ""} aria-pressed={category === key} onClick={() => setCategory(key)}>{labels[key]}</button>)}</div><label className="blog-search"><span>{labels.search}</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={labels.search}/></label></div><div className="blog-grid">{shown.map(card => <Link href={card.href} className="blog-card" key={card.id}><div className="blog-card-image"><Image src={card.image} alt={card.title} fill sizes="(max-width:700px) 100vw, (max-width:1100px) 50vw, 33vw"/></div><div className="blog-card-copy"><span>{labels[blogCategories[card.id]]}</span><h2>{card.title}</h2><p>{card.description}</p><strong>{read} →</strong></div></Link>)}</div>{shown.length === 0 && <p className="blog-empty">{labels.empty}</p>}</>;
}
