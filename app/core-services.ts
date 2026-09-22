import { services, type Service } from "./data";

const process = [
  { title: "İlk değerlendirme", text: "Ekipman geçmişi, tek hat şeması ve arıza/bakım ihtiyacı alınır." },
  { title: "Saha uygulaması", text: "Güvenli çalışma planına göre kontrol, ölçüm ve gerekli müdahale yapılır." },
  { title: "Doğrulama ve rapor", text: "Sonuçlar karşılaştırılır; bulgular ve öneriler kayıt altına alınır." },
];

const newServices: Service[] = [
  {
    slug: "trafo-ariza-tespiti-ve-giderilmesi", title: "Trafo Arıza Tespiti ve Giderilmesi", shortTitle: "Trafo Arıza", eyebrow: "Kök neden • Onarım • Doğrulama", image: "/images/resim-2.jpeg",
    summary: "Trafo arızalarında belirti analizi, elektriksel testler, kök neden araştırması ve kontrollü onarım.",
    intro: "Aşırı ısınma, yağ kaçağı, anormal ses veya koruma açması tek bir arızaya işaret etmeyebilir. Müdahaleyi ölçüm ve ekipman geçmişiyle temellendiriyoruz.",
    benefits: ["Kök nedenin belirlenmesini hedefler", "Tekrar arıza riskini değerlendirmeye yardımcı olur", "Onarım sonrası devreye alma kontrolü sağlar"],
    scope: ["Arıza belirtisi ve olay kayıtlarının incelenmesi", "Yağ seviyesi, sıcaklık ve sızdırmazlık kontrolü", "Buşing ve bağlantı noktalarının muayenesi", "İzolasyon, TTR ve sargı direnci testleri", "Koruma rölesi ve yardımcı ekipman kontrolü", "Onarım, yeniden test ve teknik raporlama"],
    process, faq: [
      { q: "Koruma rölesi açması trafonun arızalı olduğunu mu gösterir?", a: "Tek başına göstermez. Röle kaydı, kesici, kablo ve trafo testleri birlikte değerlendirilerek arıza yeri belirlenir." },
      { q: "Onarım sonrası hangi kontroller yapılır?", a: "Uygun elektriksel testler, bağlantı ve koruma fonksiyonları doğrulanır; enerjilendirme planı saha koşullarına göre oluşturulur." },
    ],
  },
  {
    slug: "og-hucre-bakim-ve-onarim", title: "OG Hücre Bakım ve Onarım", shortTitle: "Hücre Bakım", eyebrow: "Kesici • Bara • Kilitleme", image: "/images/resim-7.jpeg",
    summary: "Orta gerilim hücrelerinde mekanik, elektriksel ve koruma ekipmanı kontrolleri ile planlı bakım.",
    intro: "OG hücreler enerji dağıtımının anahtarlama ve koruma noktalarıdır. Periyodik bakımda hücre tipi ve üretici talimatları dikkate alınarak güvenli çalışma planı hazırlanır.",
    benefits: ["Anahtarlama güvenilirliğini destekler", "Gevşek bağlantı ve izolasyon kusurlarını görünür kılar", "Bakım bulgularını izlenebilir hale getirir"],
    scope: ["Hücre içi temizlik ve görsel muayene", "Bara ve kablo bağlantılarının kontrolü", "Kesici ve ayırıcı mekanizma kontrolü", "Topraklama ayırıcısı ve kilitleme fonksiyonları", "Röle, kumanda ve yardımcı devre kontrolü", "Termal bulgu, ark izi ve parça değerlendirmesi"],
    process, faq: [
      { q: "OG hücre bakımı için enerji kesintisi gerekir mi?", a: "Temas ve iç muayene gerektiren işlemler için güvenli enerji kesintisi, kilitleme ve gerilim yokluğu doğrulaması planlanır." },
      { q: "Bakımda kesici de kontrol edilir mi?", a: "Hücre tipine göre kesici mekanizması, açma-kapama işlevi, kontaklar ve yardımcı devreler bakım kapsamına alınır." },
    ],
  },
  {
    slug: "og-hucre-ariza-tespiti", title: "OG Hücre Arıza Tespiti ve Giderilmesi", shortTitle: "Hücre Arıza", eyebrow: "Arıza kaydı • Ölçüm • Onarım", image: "/images/resim-8.jpeg",
    summary: "OG hücre, kesici, ayırıcı, röle ve kumanda devresi arızalarında sistematik saha teşhisi.",
    intro: "Hücre açmaması veya beklenmedik kesici açması gibi olaylarda tek bir parçaya odaklanmadan güç, kumanda ve koruma zincirini birlikte inceliyoruz.",
    benefits: ["Arıza yerini sistematik olarak daraltır", "Gereksiz parça değişimi riskini azaltır", "Onarım sonrası fonksiyon doğrulaması sağlar"],
    scope: ["Olay kaydı ve röle açma bilgisinin incelenmesi", "Yardımcı besleme ve kumanda devresi kontrolü", "Kesici ve ayırıcı mekanizmasının değerlendirilmesi", "Bara, kablo başlığı ve izolasyon incelemesi", "Koruma ayarları ve kilitleme fonksiyonları", "Onarım sonrası test ve devreye alma"],
    process, faq: [
      { q: "OG hücre açma arızası nasıl araştırılır?", a: "Yardımcı besleme, açma-kapama bobini, mekanik kilitleme ve röle çıkışları sıralı şekilde kontrol edilir." },
      { q: "Arıza sonrası yeniden enerjilendirme ne zaman yapılır?", a: "Arıza nedeni giderilip gerekli izolasyon, fonksiyon ve koruma kontrolleri tamamlandıktan sonra işletmeyle birlikte planlanır." },
    ],
  },
  {
    slug: "og-hucre-testleri", title: "OG Hücre Testleri", shortTitle: "Hücre Test", eyebrow: "Kesici • Röle • Primer/sekonder", image: "/images/resim-6.jpeg",
    summary: "OG hücrelerinde izolasyon, kontak, kesici zamanlama ve koruma fonksiyon testleri.",
    intro: "Bakım ve devreye alma sonrasında hücrenin yalnızca görünür durumunu değil, açma-kapama ve koruma davranışını da ölçümlerle doğruluyoruz.",
    benefits: ["Fonksiyonları ölçülebilir veriye dönüştürür", "Kesici ve röle zincirini doğrular", "Devreye alma kararını teknik bulgularla destekler"],
    scope: ["İzolasyon direnci testi", "Kontak/geçiş direnci ölçümü", "Kesici açma-kapama zaman testi", "Röle ve sekonder enjeksiyon testleri", "Uygun sistemlerde primer enjeksiyon", "Yardımcı devre, topraklama ve faz kontrolleri"],
    process, faq: [
      { q: "Sekonder enjeksiyon testi neyi doğrular?", a: "Koruma rölesinin ayarlanan akım/gerilim koşullarında beklenen açma komutunu ve zamanlamasını doğrular." },
      { q: "Her OG hücrede aynı testler mi yapılır?", a: "Hayır. Hücre tipi, kesici yapısı, koruma tasarımı ve işletme ihtiyacına göre test planı belirlenir." },
    ],
  },
  {
    slug: "proje-ve-danismanlik", title: "Proje ve Danışmanlık", shortTitle: "Proje & Danışmanlık", eyebrow: "Analiz • Proje • Teknik karar", image: "/images/resim-9.jpeg",
    summary: "Trafo merkezi ve OG sistemleri için fizibilite, proje, kapasite ve koruma danışmanlığı.",
    intro: "Yeni yatırım veya mevcut tesiste revizyon kararını; yük, kapasite, kısa devre ve koruma gereksinimleriyle birlikte değerlendiriyoruz.",
    benefits: ["Yatırım kapsamını teknik veriye dayandırır", "Ekipman seçimini kullanım koşullarıyla eşleştirir", "Revizyon ve kapasite kararlarını netleştirir"],
    scope: ["Mevcut tesis ve tek hat şeması incelemesi", "Yük analizi ve trafo güç seçimi", "Trafo merkezi ve OG hücre projelendirme", "Kısa devre ve koruma koordinasyonu", "Röle ayarı ve teknik şartname desteği", "Kapasite artırımı, revizyon ve teknik rapor"],
    process, faq: [
      { q: "Mevcut tesis için de danışmanlık veriliyor mu?", a: "Evet. Kapasite artışı, ekipman yenileme ve koruma revizyonu için mevcut yapı değerlendirilir." },
      { q: "Proje kapsamı nasıl belirlenir?", a: "Tesisin yük verileri, tek hat şeması, ekipman listesi ve işletme hedefleriyle teknik kapsam oluşturulur." },
    ],
  },
  {
    slug: "elektrik-taahhut", title: "Elektrik Taahhüt", shortTitle: "Taahhüt", eyebrow: "Kurulum • Montaj • Devreye alma", image: "/images/resim-9.jpeg",
    summary: "Trafo merkezi, OG hücre, kablo ve elektrik altyapısında projeye bağlı saha uygulamaları.",
    intro: "Taahhüt işlerinde montaj, test ve devreye alma adımlarını tek bir uygulama planında koordine ediyoruz. Nihai kapsam, onaylı proje ve saha koşullarına göre netleşir.",
    benefits: ["Proje ile saha uygulamasını eşleştirir", "Montaj ve test adımlarını izlenebilir kılar", "Devreye alma öncesi kontrol sağlar"],
    scope: ["OG tesisleri ve trafo merkezleri", "Trafo ve hücre montajı", "OG kablo ve elektrik altyapısı", "Bara ve bağlantı uygulamaları", "Saha test ve ölçümleri", "Devreye alma ve teslim dokümantasyonu"],
    process, faq: [
      { q: "Taahhüt hizmeti devreye almayı kapsar mı?", a: "İşin sözleşme ve proje kapsamına göre montaj sonrası test, fonksiyon kontrolü ve devreye alma planlanabilir." },
      { q: "Mevcut tesiste revizyon yapılabilir mi?", a: "Evet. Duruş planı ve mevcut altyapı koşulları değerlendirilerek revizyon kapsamı oluşturulur." },
    ],
  },
  {
    slug: "acil-mudahale", title: "Acil Trafo ve OG Hücre Müdahalesi", shortTitle: "Acil Müdahale", eyebrow: "Güvenlik • Teşhis • Yeniden devreye alma", image: "/images/resim-8.jpeg",
    summary: "Trafo ve OG hücre arızalarında güvenli ilk değerlendirme, saha teşhisi ve onarım koordinasyonu.",
    intro: "Beklenmedik kesintide ilk hedef personel ve tesis güvenliğidir. Müdahale kapsamı arızanın tipi, saha erişimi ve ekip uygunluğuna göre teyit edilir.",
    benefits: ["İlk güvenlik adımlarını önceliklendirir", "Arıza kapsamını ölçümle belirler", "Yeniden enerjilendirmeyi kontrollü planlar"],
    scope: ["Arıza bildirimi ve ilk risk değerlendirmesi", "Saha güvenliği ve enerji izolasyonu", "Trafo, hücre, kesici ve röle incelemesi", "Uygun ölçüm ve testlerle arıza yerinin belirlenmesi", "Onarım veya parça değişimi planı", "Test ve kontrollü yeniden devreye alma"],
    process, faq: [
      { q: "Acil arızada ilk ne yapılmalıdır?", a: "Yetkili personel dışındaki kişiler ekipmandan uzak tutulmalı, tesis prosedürüne göre güvenli izolasyon sağlanmalı ve teknik ekip bilgilendirilmelidir." },
      { q: "Müdahale süresi nasıl belirlenir?", a: "Süre; konum, arıza tipi, ekip ve parça uygunluğu değerlendirilerek talep sırasında bildirilir." },
    ],
  },
];

const serviceImages: Record<string, string> = {
  "trafo-bakim-ve-onarimi": "/images/stock-transformer.jpg",
  "trafo-ariza-tespiti-ve-giderilmesi": "/images/stock-transformer-2.jpg",
  "trafo-testleri": "/images/stock-transformer.jpg",
  "og-hucre-bakim-ve-onarim": "/images/stock-switchgear-2.jpg",
  "og-hucre-ariza-tespiti": "/images/stock-switchgear.jpg",
  "og-hucre-testleri": "/images/stock-switchgear-2.jpg",
  "proje-ve-danismanlik": "/images/stock-substation.jpg",
  "elektrik-taahhut": "/images/stock-substation.jpg",
  "acil-mudahale": "/images/stock-transformer-2.jpg",
};
export const allServices: Service[] = [...services, ...newServices].map(service => ({ ...service, image: serviceImages[service.slug] ?? service.image }));
const coreSlugs = ["trafo-bakim-ve-onarimi","trafo-ariza-tespiti-ve-giderilmesi","trafo-testleri","og-hucre-bakim-ve-onarim","og-hucre-ariza-tespiti","og-hucre-testleri","proje-ve-danismanlik","elektrik-taahhut","acil-mudahale"];
export const coreServices: Service[] = coreSlugs.map(slug => allServices.find(service => service.slug === slug)!);
export const coreGroups = [
  { title: "Trafo hizmetleri", eyebrow: "01 — 03", description: "Bakım, arıza teşhisi ve test", services: coreServices.slice(0, 3) },
  { title: "OG hücre hizmetleri", eyebrow: "04 — 06", description: "Anahtarlama, koruma ve doğrulama", services: coreServices.slice(3, 6) },
  { title: "Mühendislik ve saha uygulaması", eyebrow: "07 — 09", description: "Proje, taahhüt ve müdahale", services: coreServices.slice(6, 9) },
];
