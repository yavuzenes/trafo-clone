"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Choice = "accepted" | "rejected" | null;
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
};

const storageKey = "bes-analytics-consent-v1";

function language() {
  if (window.location.pathname.startsWith("/ar")) return "ar";
  if (window.location.pathname.startsWith("/en")) return "en";
  return "tr";
}

const labels = {
  tr: { title: "Analitik çerez tercihi", detail: "Google Analytics ziyaretleri ölçer; etkinse Microsoft Clarity kullanım haritaları ve oturum kayıtları oluşturur. Bu araçlar yalnızca kabul ederseniz yüklenir.", accept: "Kabul et", reject: "Reddet", settings: "Çerez tercihleri", policy: "KVKK ve çerez bilgisi", policyPath: "/kvkk" },
  en: { title: "Analytics cookie choice", detail: "Google Analytics measures visits; if enabled, Microsoft Clarity creates usage heatmaps and session recordings. These tools load only if you accept.", accept: "Accept", reject: "Reject", settings: "Cookie preferences", policy: "Privacy and cookies", policyPath: "/en/privacy" },
  ar: { title: "اختيار ملفات التحليل", detail: "يقيس Google Analytics الزيارات؛ وعند تفعيله ينشئ Microsoft Clarity خرائط استخدام وتسجيلات للجلسات. لا يتم تحميلهما إلا بعد موافقتك.", accept: "موافقة", reject: "رفض", settings: "تفضيلات ملفات الارتباط", policy: "الخصوصية والملفات", policyPath: "/ar/الخصوصية" },
};

export function AnalyticsConsent({ gaId, clarityId }: { gaId: string; clarityId: string }) {
  const pathname = usePathname();
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const lastPage = useRef("");
  const hasAnalytics = /^G-[A-Z0-9]+$/i.test(gaId);
  const hasClarity = /^[a-z0-9]+$/i.test(clarityId);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      let stored: string | null = null;
      try { stored = window.localStorage.getItem(storageKey); } catch { /* Private browsing may block storage. */ }
      setChoice(stored === "accepted" || stored === "rejected" ? stored : null);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready || choice !== "accepted") return;
    const analyticsWindow = window as AnalyticsWindow;
    if (hasAnalytics && !document.getElementById("bes-ga4-script")) {
      analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
      analyticsWindow.gtag = (...args: unknown[]) => { analyticsWindow.dataLayer!.push(args); };
      analyticsWindow.gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      analyticsWindow.gtag("consent", "update", { analytics_storage: "granted" });
      analyticsWindow.gtag("js", new Date());
      analyticsWindow.gtag("config", gaId, { send_page_view: false });
      const script = document.createElement("script");
      script.id = "bes-ga4-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
      document.head.appendChild(script);
    }
    if (hasClarity && !document.getElementById("bes-clarity-script")) {
      analyticsWindow.clarity = analyticsWindow.clarity || ((...args: unknown[]) => {
        const fn = analyticsWindow.clarity as ((...values: unknown[]) => void) & { q?: unknown[][] };
        (fn.q = fn.q || []).push(args);
      });
      analyticsWindow.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
      const script = document.createElement("script");
      script.id = "bes-clarity-script";
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`;
      document.head.appendChild(script);
    }
  }, [choice, ready, gaId, clarityId, hasAnalytics, hasClarity]);

  useEffect(() => {
    if (choice !== "accepted" || !hasAnalytics) return;
    const page = `${window.location.pathname}${window.location.search}`;
    if (lastPage.current === page) return;
    lastPage.current = page;
    (window as AnalyticsWindow).gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: page,
      page_title: document.title,
    });
  }, [choice, pathname, hasAnalytics]);

  useEffect(() => {
    if (choice !== "accepted" || !hasAnalytics) return;
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      const href = link?.getAttribute("href") ?? "";
      const contactMethod = href.startsWith("tel:") ? "phone" : href.startsWith("mailto:") ? "email" : href.includes("wa.me/") ? "whatsapp" : null;
      if (contactMethod) (window as AnalyticsWindow).gtag?.("event", "contact_click", { contact_method: contactMethod });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [choice, hasAnalytics]);

  if (!ready || (!hasAnalytics && !hasClarity)) return null;
  const text = labels[language()];
  const showPanel = open || choice === null;

  function save(value: Exclude<Choice, null>) {
    try { window.localStorage.setItem(storageKey, value); } catch { /* Apply the choice for this visit. */ }
    if (value === "rejected" && choice === "accepted") {
      const analyticsWindow = window as AnalyticsWindow;
      analyticsWindow.gtag?.("consent", "update", { analytics_storage: "denied" });
      analyticsWindow.clarity?.("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
      window.location.reload();
      return;
    }
    setChoice(value);
    setOpen(false);
  }

  return <div className="analytics-consent" dir={language() === "ar" ? "rtl" : "ltr"}>
    {showPanel ? <section className="analytics-consent-panel" role="dialog" aria-label={text.title}>
      <div><strong>{text.title}</strong><p>{text.detail} <a href={text.policyPath}>{text.policy}</a></p></div>
      <div className="analytics-consent-actions"><button type="button" onClick={() => save("rejected")}>{text.reject}</button><button type="button" className="accept" onClick={() => save("accepted")}>{text.accept}</button></div>
    </section> : <button className="analytics-consent-toggle" type="button" onClick={() => setOpen(true)}>{text.settings}</button>}
  </div>;
}
