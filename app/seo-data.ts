export const cityPages=[
{slug:"ankara",name:"Ankara",context:"organize sanayi bölgeleri, üretim tesisleri, kamu yapıları ve ticari işletmeler"},
{slug:"istanbul",name:"İstanbul",context:"sanayi tesisleri, lojistik merkezleri, hastaneler, oteller ve yüksek katlı ticari yapılar"},
{slug:"izmir",name:"İzmir",context:"Aliağa ve çevresindeki sanayi tesisleri, liman işletmeleri, üretim merkezleri ve ticari yapılar"},
{slug:"adana",name:"Adana",context:"organize sanayi bölgesi, tarıma dayalı üretim tesisleri, soğuk hava depoları ve ticari işletmeler"},
{slug:"bursa",name:"Bursa",context:"otomotiv, tekstil ve makine sanayisi tesisleri ile organize sanayi bölgeleri"},
{slug:"kocaeli",name:"Kocaeli",context:"ağır sanayi, kimya, otomotiv, liman ve lojistik tesisleri"},
{slug:"konya",name:"Konya",context:"makine, döküm, gıda ve tarımsal üretim tesisleri ile organize sanayi bölgeleri"},
{slug:"gaziantep",name:"Gaziantep",context:"tekstil, gıda, plastik ve ihracat odaklı üretim tesisleri"},
{slug:"antalya",name:"Antalya",context:"turizm tesisleri, oteller, hastaneler, alışveriş merkezleri ve tarımsal işletmeler"},
{slug:"mersin",name:"Mersin",context:"liman, lojistik, gıda, depolama ve endüstriyel üretim tesisleri"},
{slug:"kayseri",name:"Kayseri",context:"mobilya, metal, tekstil ve makine üretim tesisleri"},
{slug:"manisa",name:"Manisa",context:"elektronik, beyaz eşya, gıda ve organize sanayi tesisleri"},
{slug:"tekirdag",name:"Tekirdağ",context:"Çorlu ve Çerkezköy çevresindeki tekstil, kimya ve üretim tesisleri"},
{slug:"samsun",name:"Samsun",context:"liman, lojistik, sağlık ve Karadeniz bölgesi üretim tesisleri"},
{slug:"eskisehir",name:"Eskişehir",context:"havacılık, seramik, makine ve organize sanayi tesisleri"},
] as const;

export const activityAreas=[
{title:"YG İşletme Sorumluluğu",text:"Yüksek gerilim tesislerinin mevzuata uygun, güvenli ve kayıtlı biçimde işletilmesi için periyodik kontrol, koordinasyon ve teknik sorumluluk desteği."},
{title:"Planlı Bakım ve Ölçüm",text:"Trafo, hücre, kesici, bara ve koruma sistemleri için duruş planına uyumlu bakım, test ve ölçüm programları."},
{title:"Kurulum ve Devreye Alma",text:"Yeni veya yenilenen enerji tesislerinde montaj kontrolü, fonksiyon testleri, enerjilendirme ve teslim raporlaması."},
{title:"Elektriksel Muayene ve Uygunluk",text:"Topraklama, termal ölçüm, iç tesisat ve ekipman kontrollerinin bulgularla birlikte teknik rapora dönüştürülmesi."},
{title:"Arıza, Onarım ve Acil Müdahale",text:"Trafo ve güç sistemlerinde arıza analizi, güvenli müdahale, onarım koordinasyonu ve yeniden devreye alma desteği."},
{title:"Mühendislik ve Danışmanlık",text:"Fizibilite, kapasite değerlendirmesi, koruma yaklaşımı, bakım stratejisi ve teknik şartname desteği."},
] as const;

export const equipment=[
{name:"Trafo Çevirme Oranı Test Cihazı",code:"MT-TTR3PRO",image:"/images/equipment/mt-ttr3pro.webp",source:"https://testcihazlari.com.tr/trafo-cevirme-orani-test-cihazi-ttr/",specs:["Üç fazlı TTR ölçümü","Bağlantı grubu ve polarite kontrolü","Saha raporlamasına uygun kayıt"]},
{name:"İzolasyon Direnci Test Cihazı",code:"MT-20K",image:"/images/equipment/mt-20k.webp",source:"https://testcihazlari.com.tr/transformator-izolasyon-direnci-test-cihazi/",specs:["20 kV izolasyon direnci ölçümü","Polarizasyon indeksi değerlendirmesi","Bakım öncesi ve sonrası karşılaştırma"]},
{name:"Trafo Yağı Delinme Test Cihazı",code:"MTH-OBDV",image:"/images/equipment/mth-obdv.webp",source:"https://testcihazlari.com.tr/tasinabilir-trafo-yagi-delinme-test-cihazi/",specs:["80/100 kV dielektrik dayanım testi","Kontrollü test dizisi","Yağ bakım kararına teknik veri"]},
{name:"Sargı Direnci Ölçüm Cihazı",code:"MTS-TWR-40",image:"/images/equipment/mts-twr-40.webp",source:"https://testcihazlari.com.tr/trafo-sargi-direnci-olcer-40-amper/",specs:["40 A DC sargı direnci ölçümü","Kademe ve temas kusuru analizi","Düşük direnç hassas ölçümü"]},
{name:"Tanjant Delta Test Cihazı",code:"MTS-CTD12",image:"/images/equipment/mts-ctd12.webp",source:"https://testcihazlari.com.tr/tanjant-delta-test-cihazi-mts-ctd12/",specs:["İzolasyon kayıp faktörü analizi","Kapasitans ölçümü","Saha tipi kompakt test sistemi"]},
{name:"CT/PT Çevirme Oranı Test Cihazı",code:"MT-PTTR-3B",image:"/images/equipment/mt-pttr-3b.webp",source:"https://testcihazlari.com.tr/trafo-cevirme-orani-test-cihazi-ct-pt/",specs:["Akım ve gerilim trafosu oran testi","Polarite ve uyartım değerlendirmesi","Taşınabilir saha uygulaması"]},
] as const;
