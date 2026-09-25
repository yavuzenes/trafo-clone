import type { Locale } from "./localized";

export const cityFocus: Record<Exclude<Locale,"tr">, Record<string,string>> = {
  en: {
    ankara: "Public facilities and production sites often need maintenance coordinated with a documented outage and protection-system review.",
    istanbul: "In high-continuity commercial and industrial facilities, fault isolation and a controlled return to service are central to the work plan.",
    izmir: "Port and industrial environments call for attention to thermal loading, insulation condition and oil-related evidence.",
    adana: "Seasonal heat and changing load profiles make cooling, connections and protection records especially relevant.",
    bursa: "Manufacturing schedules shape outage planning; tap, winding and connection checks help distinguish equipment faults from operating effects.",
    kocaeli: "Process-industry sites need maintenance aligned with production continuity and a clear record of insulation and connection findings.",
    konya: "At machinery and production facilities, load variation and commissioning history guide the choice of transformer and switchgear tests.",
    gaziantep: "Shift-based operations require a carefully agreed outage window and prioritization of tests that address the reported symptom.",
    mersin: "Coastal conditions increase the importance of inspecting exposed connections, insulation surfaces and oil-system integrity.",
    sanliurfa: "Irrigation and cooling loads can be seasonal; maintenance planning considers loading history and protection operation.",
  },
  ar: {
    ankara: "تحتاج المنشآت العامة والإنتاجية غالباً إلى تنسيق الصيانة مع فترة توقف موثقة ومراجعة أنظمة الحماية.",
    istanbul: "في المنشآت التجارية والصناعية التي تتطلب استمرارية عالية، يركز العمل على تحديد العطل وإعادة الخدمة بصورة مضبوطة.",
    izmir: "تتطلب بيئات الموانئ والصناعة اهتماماً بالأحمال الحرارية وحالة العزل ونتائج فحوص الزيت.",
    adana: "تجعل الحرارة الموسمية وتغير الأحمال فحص التبريد والوصلات وسجلات الحماية مهماً في خطة الصيانة.",
    bursa: "تحدد جداول التصنيع فترات التوقف؛ ويساعد فحص المغير والملفات والوصلات على تمييز عطل المعدات من آثار التشغيل.",
    kocaeli: "تحتاج مواقع الصناعات العملية إلى صيانة منسقة مع استمرار الإنتاج وتوثيق واضح لنتائج العزل والوصلات.",
    konya: "في منشآت الآلات والإنتاج، يوجه تغير الحمل وسجل التشغيل الأولي اختيار اختبارات المحولات والخلايا.",
    gaziantep: "تتطلب العمليات متعددة الورديات الاتفاق على فترة توقف مناسبة وترتيب الاختبارات بحسب الأعراض المبلغ عنها.",
    mersin: "تزيد الظروف الساحلية أهمية فحص الوصلات المكشوفة وأسطح العزل وسلامة منظومة الزيت.",
    sanliurfa: "قد تكون أحمال الري والتبريد موسمية، لذا تراعي خطة الصيانة تاريخ الأحمال وعمل أجهزة الحماية.",
  },
};
