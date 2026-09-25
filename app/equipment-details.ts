export const equipmentDetails = {
  "mt-ttr3pro": {
    intro: "Tek ve üç fazlı güç trafolarında primer–sekonder çevirme oranını, bağlantı grubunu ve polariteyi değerlendirmek için kullanılan taşınabilir test cihazıdır.",
    purpose: "Ölçülen oran, etiket ve kademe değerleriyle karşılaştırılır. Sapmalar; kademe mekanizması, bağlantılar veya sargı bütünlüğü hakkında ileri inceleme gerektiren bir işaret olabilir.",
    features: ["Tek ve üç fazlı trafo oran ölçümü", "Vektör ilişkisi, bağlantı grubu ve polarite kontrolü", "Kademe konumu ve uyartım akımı değerlendirmesi", "Saha verilerini dijital olarak kaydetme"],
    method: "Enerjisiz ve güvenli çalışma koşullarında uygun uç bağlantıları kurulur. Her kademe için oran, faz ilişkisi ve sapma kaydedilir; sonuçlar etiket değerleriyle birlikte yorumlanır.",
  },
  "mt-20k": {
    intro: "Güç trafoları ve yüksek gerilim ekipmanlarında yalıtım direncini ölçmek üzere tasarlanmış, seçilebilir test gerilimine sahip taşınabilir cihazdır.",
    purpose: "Yalıtımın nem, kirlenme ve yaşlanma gibi etkiler karşısındaki durumunu anlamaya yardımcı olur. Tek ölçüm yerine sıcaklık ve önceki kayıtlarla birlikte trend değerlendirmesi yapılmalıdır.",
    features: ["500 V–20 kV arasında seçilebilir test kademeleri", "20 TΩ'a kadar izolasyon direnci ölçümü", "PI ve DAR değerlendirmesi", "Dahili batarya ile saha kullanımı"],
    method: "Ekipman izole edilip güvenli hale getirildikten sonra seçilen test gerilimi uygulanır. Ölçüm süresi ve ortam koşulları kaydedilir; test bitiminde güvenli deşarj doğrulanır.",
  },
  "mth-obdv": {
    intro: "Trafo yalıtım yağından alınan numunenin dielektrik delinme gerilimini kontrollü koşullarda ölçen taşınabilir test sistemi.",
    purpose: "Yağdaki nem ve kirlilik gibi etkilerin yalıtım performansına yansımasını izlemeye yarar. Sonuç, tek başına yağın bütün kimyasal özelliklerini göstermez; gerektiğinde ek analizlerle desteklenir.",
    features: ["Modele göre 80 veya 100 kV AC test aralığı", "Ayarlanabilir gerilim artış hızı ve tekrar sayısı", "Otomatik test dizisi ve sonuç kaydı", "IEC 60156 yaklaşımına uygun numune değerlendirmesi"],
    method: "Temsilî yağ numunesi temiz test kabına alınır. Elektrot aralığı ve bekleme süresi seçilen yönteme göre ayarlanır; ardışık delinme değerleri ve ortalaması raporlanır.",
  },
  "mts-twr-40": {
    intro: "Transformatör sargılarının çok düşük DC direnç değerlerini ölçmek için kullanılan 40 A sınıfı saha test cihazı.",
    purpose: "Fazlar ve kademeler arasındaki direnç farkları, gevşek bağlantı, temas sorunu veya sargıdaki olası anormallikler için teknik ipucu sağlar.",
    features: ["40 A DC akım sınıfında sargı direnci ölçümü", "Faz ve kademe karşılaştırmasına uygun sonuçlar", "Düşük direnç değerlerinin saha ölçümü", "Bakım öncesi ve sonrası eğilim takibi"],
    method: "Uygun bağlantı yapıldıktan sonra akım kararlı duruma gelene kadar beklenir. Her faz ve kademe değeri, sıcaklık bilgisiyle birlikte kaydedilir; deşarj tamamlanmadan bağlantılar sökülmez.",
  },
  "mts-ctd12": {
    intro: "Trafo ve diğer yüksek gerilim ekipmanlarının yalıtım sisteminde kapasitans ve dielektrik kayıp faktörü (tan δ) ölçümü için kullanılan test cihazı.",
    purpose: "Dielektrik kaybındaki değişim, nemlenme veya yalıtım yaşlanması için erken uyarı sağlayabilir. Yorum, ekipmanın geçmiş ölçümleri ve test koşullarıyla birlikte yapılır.",
    features: ["0,5–10 kV aralığında dahili test gerilimi", "Kapasitans ve tan δ ölçümü", "45/55 Hz değişken frekans seçenekleri", "Parazitli saha ortamları için ölçüm yaklaşımı"],
    method: "Test bağlantı modu ekipmana göre seçilir. Gerilim ve frekans koşulları belirlenir; tan δ ve kapasitans değerleri sıcaklık, nem ve önceki raporlarla karşılaştırılır.",
  },
  "mt-pttr-3b": {
    intro: "Tek ve üç fazlı trafolar ile CT/PT uygulamalarında çevirme oranı ve polarite kontrolü için kullanılan test sistemi.",
    purpose: "Ölçüm ve koruma devrelerinde oran ile polarite doğruluğunun teyidi, devreye alma ve arıza araştırması açısından önemlidir.",
    features: ["Tek ve üç fazlı oran ölçümü", "CT/PT oran ve polarite testi", "Bağlantı grubu ile kademe değerlendirmesi", "Test verilerinin kaydı ve raporlanması"],
    method: "Bağlantı şeması ve etiket bilgileri doğrulandıktan sonra oran ve polarite ölçülür. Sonuçlar tasarım değerleriyle karşılaştırılarak rapora işlenir.",
  },
} as const;

export type EquipmentSlug = keyof typeof equipmentDetails;
