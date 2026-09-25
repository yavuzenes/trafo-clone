const base = process.env.SITE_AUDIT_BASE ?? "http://localhost:3100";
const origin = new URL(base).origin;
const sitemapResponse = await fetch(new URL("/sitemap.xml", origin));
if (!sitemapResponse.ok) throw new Error(`Sitemap: ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1].replaceAll("&amp;", "&")).pathname);
const uniquePaths = [...new Set(["/", ...paths])];
const failures = [];
const checked = new Set();
let pagesChecked = 0;
let imageLinks = 0;
const seoIssues = [];
const titleToPaths = new Map();

async function check(path, source) {
  if (checked.has(path)) return;
  checked.add(path);
  try {
    const response = await fetch(new URL(path, origin), { redirect: "follow" });
    if (!response.ok) failures.push({ source, path, status: response.status });
  } catch (error) {
    failures.push({ source, path, error: String(error) });
  }
}

for (const path of uniquePaths) {
  const response = await fetch(new URL(path, origin));
  pagesChecked++;
  if (!response.ok) {
    failures.push({ source: "sitemap", path, status: response.status });
    continue;
  }
  const html = await response.text();
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "";
  const pageLang = html.match(/<html[^>]*\blang="([^"]+)"/)?.[1] ?? "";
  const h1Count = [...html.matchAll(/<h1(?:\s|>)/g)].length;
  if (!title) seoIssues.push({ path, issue: "missing title" });
  if (!canonical || new URL(canonical, origin).pathname !== path) seoIssues.push({ path, issue: "canonical mismatch", canonical });
  if (h1Count !== 1) seoIssues.push({ path, issue: "h1 count", h1Count });
  if (path.startsWith("/en") && pageLang !== "en") seoIssues.push({ path, issue: "html lang", pageLang });
  if (path.startsWith("/ar") && pageLang !== "ar") seoIssues.push({ path, issue: "html lang", pageLang });
  if (!titleToPaths.has(title)) titleToPaths.set(title, []);
  titleToPaths.get(title).push(path);
  const targets = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)]
    .map((match) => match[1].replaceAll("&amp;", "&"))
    .filter((url) => url.startsWith("/") && !url.startsWith("//") && (!url.startsWith("/_next/") || url.startsWith("/_next/image?")));
  for (const target of targets) {
    const parsed = new URL(target, origin);
    if (parsed.pathname.startsWith("/_next/") && parsed.pathname !== "/_next/image") continue;
    if (parsed.pathname === "/_next/image" || /\.(?:png|jpe?g|webp|svg|gif|ico|avif)$/i.test(parsed.pathname)) imageLinks++;
    await check(`${parsed.pathname}${parsed.search}`, path);
  }
}

const duplicateTitles = [...titleToPaths.entries()].filter(([, values]) => values.length > 1).map(([title, values]) => ({ title, paths: values }));
console.log(JSON.stringify({ pagesChecked, linksChecked: checked.size, imageLinks, failures, seoIssues, duplicateTitles }, null, 2));
if (failures.length) process.exitCode = 1;
