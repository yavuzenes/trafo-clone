type Section = { heading: string; text: string; points: string[] };
type Test = { name: string; purpose: string; assessment: string };
export type CoreContent = { lead: string; sections: Section[]; tests?: Test[]; related?: string[] };

export const coreContent: Record<string, CoreContent> = {
  "trafo-bakim-ve-onarimi": {
    lead: "Güç ve dağıtım trafolarında bakım; yalnızca temizlik değil, yalıtım, bağlantı, soğutma ve koruma sistemlerinin birlikte değerlendirilmesidir. Periyot ve kapsam; trafo tipi, çalışma ortamı, yük profili ve geçmiş ölçümlerle belirlenir.",
    sections: [
      { heading: "Trafo bakımı neden yapılır?", text: "Planlı kontrol, gözle görülmeyen bozulmaların ilerlemeden fark edilmesini ve işletme güvenliği kararlarının ölçüme dayanmasını sağlar. Yağlı, hermetik ve kuru tip trafoların bakım noktaları farklıdır.", points: ["Beklenmeyen duruş riskinin değerlendirilmesi", "İzolasyon ve bağlantı durumunun izlenmesi", "Ekipman ömrü ve enerji sürekliliğinin desteklenmesi", "Arıza öncesi bulguların kayıt altına alınması"] },
      { heading: "Yağlı trafolarda mekanik ve yardımcı ekipman kontrolleri", text: "Gövde, sızdırmazlık, buşing, yağ ve soğutma sistemi birlikte incelenir. Her işlem üretici talimatı ve güvenli çalışma koşullarına göre belirlenir.", points: ["Yağ seviyesi, kaçak ve sızdırmazlık", "Buchholz rölesi, termometre ve basınç tahliye cihazı", "İzolatör, buşing ve topraklama bağlantıları", "Radyatör, fan ve pompa kontrolleri", "Bara, kablo ve mekanik bağlantı sıkılığı"] },
      { heading: "Kuru tip trafo ve onarım yaklaşımı", text: "Kuru tip trafoda yağ yerine toz, nem, havalandırma, bobin yüzeyi ve sıcaklık kontrolü öne çıkar. Arızalı parçanın değişimi veya yağ kaçağı onarımı, test ve inceleme bulgularına göre planlanır.", points: ["Bobin ve yüzey temizliği", "Havalandırma ve sıcaklık sensörleri", "İzolasyon ve termal bulgular", "Arızalı parça, bağlantı ve koruma ekipmanı değerlendirmesi"] },
    ], related: ["trafo-testleri", "trafo-yag-analizi", "kuru-tip-trafo-bakimi"],
  },
  "trafo-ariza-tespiti-ve-giderilmesi": {
    lead: "Arızanın yalnızca giderilmesi değil, kök nedeninin belirlenmesi hedeflenir. İlk belirti ile gerçek arıza yeri farklı olabilir; bu nedenle olay kaydı, fiziksel inceleme ve elektriksel testler birlikte yorumlanır.",
    sections: [
      { heading: "Trafo arızasının başlıca belirtileri", text: "Koruma açmaları, sıcaklık ve ses değişimleri ya da yağ kaçağı erken uyarı olabilir. Personel güvenliği sağlanmadan ekipmana yaklaşılmamalıdır.", points: ["Aşırı ısınma ve yağ sıcaklığında yükselme", "Yağ kaçağı veya seviye düşüşü", "Anormal ses ve titreşim", "Buchholz veya koruma rölesi açması", "Kesici açması ve izolasyon şüphesi"] },
      { heading: "Sistematik teşhis ve onarım", text: "Faz-faz ve faz-toprak kusurları; buşing, bağlantı, fan/pompa ve koruma sistemi sorunlarından ayrıştırılır. Uygun testler arızanın yerini ve onarım kapsamını belirlemeye yardımcı olur.", points: ["Olay ve röle kayıtlarının incelenmesi", "Buşing, bağlantı ve soğutma ekipmanı kontrolü", "İzolasyon, TTR, sargı direnci ve yağ testleri", "Onarım sonrası tekrar test", "Kontrollü devreye alma ve rapor"] },
    ], related: ["trafo-bakim-ve-onarimi", "trafo-testleri"],
  },
  "trafo-testleri": {
    lead: "Trafo testleri; devreye alma, periyodik bakım ve arıza araştırmasında ekipmanın elektriksel durumunu ölçülebilir veriye dönüştürür. Test seçimi trafonun tipi, gücü ve işletme koşullarına göre yapılır.",
    sections: [
      { heading: "Test planı nasıl oluşturulur?", text: "Tek hat şeması, etiket bilgisi, üretici değerleri ve önceki ölçümler incelenir. Enerji izolasyonu ve güvenli test bağlantıları doğrulanmadan ölçüme başlanmaz.", points: ["Referans değerlerin ve geçmiş raporların alınması", "Test cihazının ve bağlantı yönteminin seçimi", "Sıcaklık ve çevre koşullarının kaydı", "Sonuçların fazlar ve önceki veriler arasında karşılaştırılması"] },
      { heading: "Ölçümden teknik karara", text: "Tek bir sayısal değer tek başına arıza kararı değildir. Sapmanın büyüklüğü, ölçüm koşulları, üretici toleransları ve diğer testlerle birlikte değerlendirilmesi gerekir.", points: ["İzolasyon ve polarizasyon indeksi", "Sargı, kademe ve bağlantı durumu", "Yağın dielektrik ve kimyasal durumu", "Koruma elemanlarının fonksiyonları"] },
    ],
    tests: [
      { name: "Çevirme oranı (TTR)", purpose: "Sargılar arasındaki oranı ve kademe davranışını doğrular.", assessment: "Etiket/üretici verisi ve fazlar arası sapma ile karşılaştırılır." },
      { name: "İzolasyon direnci / Megger", purpose: "Sargı–sargı ve sargı–tank yalıtım durumunu inceler.", assessment: "Sıcaklık ve ölçüm süresi dikkate alınır; PI/DAR ile desteklenebilir." },
      { name: "Sargı direnci", purpose: "Sargı ve bağlantılardaki dengesizlikleri araştırır.", assessment: "Fazlar, kademe konumları ve geçmiş ölçümler birlikte yorumlanır." },
      { name: "Yağ delinme gerilimi", purpose: "Yalıtım yağının dielektrik dayanımını ölçer.", assessment: "Numune koşulu ve test dizisiyle birlikte raporlanır." },
      { name: "Koruma ve fonksiyon testleri", purpose: "Buchholz, sıcaklık ve röle/kesici zincirinin davranışını doğrular.", assessment: "İşletme senaryosu ve proje değerleriyle karşılaştırılır." },
    ], related: ["trafo-bakim-ve-onarimi", "trafo-yag-analizi"],
  },
  "og-hucre-bakim-ve-onarim": {
    lead: "OG hücre bakımı, enerji dağıtımındaki anahtarlama ve koruma işlevinin güvenilir kalmasına odaklanır. Kesici, ayırıcı, bara, izolasyon ve kumanda sistemleri birlikte ele alınır.",
    sections: [
      { heading: "OG hücre bakımının kapsamı", text: "Bakımın amacı; gevşek bağlantı, mekanik takılma, ark izi ve yalıtım kusuru gibi riskleri erken belirlemektir. Uygulama hücre tipine göre değişir.", points: ["Hücre temizliği ve fiziksel muayene", "Bara, kablo başlığı ve bağlantı kontrolü", "Kesici, ayırıcı ve topraklama ayırıcısı", "Mekanik kilitleme ve kumanda devreleri", "Röle ve yardımcı besleme kontrolü"] },
      { heading: "Onarım ve doğrulama", text: "Arızalı veya aşınmış parçalar teknik uygunluğa göre değerlendirilir. Müdahale sonrası mekanik hareket, kilitleme ve koruma davranışı yeniden test edilir.", points: ["Termal bulgu ve ark izlerinin değerlendirilmesi", "İzolatör ve bağlantı kusurlarının giderilmesi", "Mekanik ayar ve parça değişimi", "Bakım sonrası fonksiyon ve rapor kontrolü"] },
    ], related: ["og-hucre-ariza-tespiti", "og-hucre-testleri"],
  },
  "og-hucre-ariza-tespiti": {
    lead: "OG hücre arızalarında açma-kapama, koruma ve yardımcı devrelerin etkileşimi incelenir. Teşhis sırası: arıza bildirimi → saha incelemesi → ölçüm/test → arıza tespiti → onarım → test → devreye alma.",
    sections: [
      { heading: "Sık karşılaşılan arıza grupları", text: "Kesicinin açmaması veya beklenmedik açması; mekanik, elektriksel ya da koruma kaynaklı olabilir. Her grup kendi ölçümüyle doğrulanır.", points: ["Kesici, ayırıcı ve mekanik kilitleme", "Röle açmaları ve koruma ayarları", "Kumanda devresi ve yardımcı besleme", "Bara, kablo başlığı ve topraklama", "İzolasyon ve bağlantı problemleri"] },
      { heading: "Arıza sonrası güvenli dönüş", text: "Onarım kararı arıza yeri belirlendikten sonra verilir. Enerjilendirme öncesi ilgili hücre ve koruma fonksiyonları tekrar doğrulanır.", points: ["Arıza kaydının belgelenmesi", "Saha güvenliği ve enerji izolasyonu", "Ölçüm bulgularına dayalı onarım", "Fonksiyon testi ve kontrollü devreye alma"] },
    ], related: ["og-hucre-bakim-ve-onarim", "og-hucre-testleri"],
  },
  "og-hucre-testleri": {
    lead: "OG hücre testleri, anahtarlama ekipmanının elektriksel dayanımını ve koruma komutlarının doğru çalışmasını doğrular. Test seti hücre ve kesici tipine göre belirlenir.",
    sections: [
      { heading: "Elektriksel ve mekanik doğrulama", text: "İzolasyon, kontak ve açma-kapama ölçümleri birlikte değerlendirilir. Kilitleme ve topraklama kontrolleri de güvenli işletmenin parçasıdır.", points: ["Faz-faz ve faz-toprak izolasyon ölçümü", "Kontak/geçiş direnci", "Kesici açma-kapama süresi", "Mekanik ve yardımcı devre fonksiyonları", "Topraklama ve faz sırası kontrolü"] },
      { heading: "Koruma sistemi testleri", text: "Röle fonksiyonları proje ayarlarıyla karşılaştırılır. Sekonder enjeksiyon yaygın bir doğrulama yöntemidir; primer enjeksiyon yalnızca uygun sistemlerde planlanır.", points: ["Röle eşik ve zamanlama kontrolü", "Sekonder enjeksiyon", "Uygun sistemde primer enjeksiyon", "Açma zinciri ve kumanda sinyalleri"] },
    ],
    tests: [
      { name: "İzolasyon direnci", purpose: "Hücre ve devrelerin yalıtım durumunu inceler.", assessment: "Ekipman tipi ve önceki sonuçlarla yorumlanır." },
      { name: "Kontak direnci", purpose: "Ana akım yolundaki temas kalitesini ölçer.", assessment: "Fazlar arası ve üretici referansları karşılaştırılır." },
      { name: "Kesici zamanlama", purpose: "Açma-kapama süreleri ve kutup eşzamanlılığını ölçer.", assessment: "Üretici değerleri ve önceki testlerle değerlendirilir." },
      { name: "Röle/sekonder enjeksiyon", purpose: "Koruma fonksiyonunun eşik ve açma davranışını doğrular.", assessment: "Onaylı ayarlar ve koruma senaryosuyla karşılaştırılır." },
    ], related: ["og-hucre-bakim-ve-onarim", "og-hucre-ariza-tespiti"],
  },
  "proje-ve-danismanlik": {
    lead: "YG/OG projelerinde doğru ekipman seçimi ve koruma yaklaşımı, tesisin yük ve işletme hedefleriyle birlikte belirlenmelidir. Danışmanlık; mevcut durumu anlamaktan uygulanabilir teknik karara uzanır.",
    sections: [
      { heading: "Proje ve fizibilite", text: "Yeni tesis ve kapasite artırımlarında yük analizi, tek hat şeması ve trafo gücü seçimi bir bütün olarak değerlendirilir.", points: ["Trafo merkezi ve OG hücre projelendirme", "Yük ve kapasite analizi", "Trafo güç seçimi", "Kısa devre hesabı", "Tek hat şeması ve teknik şartname"] },
      { heading: "Koruma ve mevcut tesis danışmanlığı", text: "Revizyon kararında mevcut ekipman, koruma ayarları ve işletme geçmişi incelenir; risk ve yatırım öncelikleri teknik rapora dönüştürülür.", points: ["Koruma koordinasyonu ve röle ayarları", "Mevcut tesis incelemesi", "Kapasite artırımı ve revizyon", "Elektrik tesisatı danışmanlığı", "Teknik değerlendirme raporu"] },
    ], related: ["elektrik-taahhut", "test-ve-devreye-alma"],
  },
  "elektrik-taahhut": {
    lead: "Elektrik taahhüt hizmeti, projedeki teknik kararın sahada doğru montaj ve test adımlarına dönüşmesidir. İş kapsamı onaylı proje, sözleşme ve tesis koşullarına göre oluşturulur.",
    sections: [
      { heading: "Trafo merkezi ve OG altyapısı", text: "Trafo, hücre, kablo ve ilgili elektrik altyapısı montajı disiplinler arası koordinasyon gerektirir. Her uygulama noktası teslim ve test sürecine bağlanır.", points: ["OG tesisleri ve trafo merkezleri", "Trafo ve hücre montajı", "Kablo tesisatı ve bağlantılar", "Elektrik altyapısı ve saha uygulaması"] },
      { heading: "Test, devreye alma ve teslim", text: "Montajın tamamlanması tek başına işletmeye alma anlamına gelmez. Kontrol, ölçüm ve fonksiyon testleri enerji verme öncesi planlanır.", points: ["Montaj sonrası görsel ve mekanik kontroller", "Elektriksel test ve ölçümler", "Koruma ve kumanda fonksiyonları", "Devreye alma ve teslim dokümantasyonu", "Bakım sözleşmesi için kapsamlandırma"] },
    ], related: ["proje-ve-danismanlik", "test-ve-devreye-alma"],
  },
  "acil-mudahale": {
    lead: "Trafo ve OG hücre arızalarında ilk öncelik can güvenliği ve tesisin güvenli izolasyonudur. Müdahale uygunluğu ve varış süresi talep sırasında teyit edilir.",
    sections: [
      { heading: "İlk güvenlik ve arıza bildirimi", text: "Arıza noktasına yetkisiz yaklaşım önlenir. Olayın zamanı, açan koruma elemanı ve gözlenen belirtiler teknik ekiple paylaşılır.", points: ["Personel ve saha güvenliğinin sağlanması", "Tesis prosedürüne göre enerji izolasyonu", "Röle/kesici olay bilgilerinin korunması", "Ekipman geçmişi ve son bakım kayıtlarının iletilmesi"] },
      { heading: "Saha teşhisi ve kontrollü devreye alma", text: "Trafo, OG hücre, kesici ve koruma sistemi birlikte incelenir. Uygun ölçüm sonrası onarım kapsamı belirlenir; fonksiyonlar doğrulanmadan enerjilendirme yapılmaz.", points: ["Fiziksel muayene ve elektriksel testler", "Arıza yerinin ve kök nedenin değerlendirilmesi", "Onarım veya parça değişimi planı", "Test, rapor ve güvenli yeniden devreye alma"] },
    ], related: ["trafo-ariza-tespiti-ve-giderilmesi", "og-hucre-ariza-tespiti"],
  },
};
