import Image from "next/image";

export default function Home() {
  const services = [
    {
      icon: "⚡",
      title: "Trafo Tamiri",
      desc: "Arıza tespiti ve onarımla ekipmanınızı güvenle yeniden devreye alıyoruz.",
      items: ["Arıza analizi", "Sargı ve izolasyon onarımı", "Yağlı tip trafo servisi"],
    },
    {
      icon: "▣",
      title: "Trafo Montajı",
      desc: "Yeni tesis ve kapasite artışı projelerinde uçtan uca montaj desteği sunuyoruz.",
      items: ["Saha hazırlığı", "Mekanik ve elektrik montajı", "Bağlantı kontrolleri"],
    },
    {
      icon: "◌",
      title: "Periyodik Bakım",
      desc: "Beklenmeyen duruşları azaltmak için tesisinize özel bakım programları oluşturuyoruz.",
      items: ["Gözle kontrol", "Temizlik ve sıkılık kontrolü", "Bakım raporlama"],
    },
    {
      icon: "✓",
      title: "Test ve Devreye Alma",
      desc: "Montaj veya bakım sonrası gerekli kontrolleri tamamlayıp sistemi işletmeye hazırlarız.",
      items: ["Elektriksel testler", "Koruma kontrolleri", "Devreye alma desteği"],
    },
  ];

  const references = [
    { name: "Alfanar SFA Elektrik", src: "/images/alfanar-sfaelektrik.jpeg" },
    { name: "Astor", src: "/images/astor.jpeg" },
    { name: "Ekos Elektrik", src: "/images/ekoselektrik.jpeg" },
    { name: "Maski", src: "/images/maski.jpeg" },
    { name: "Recep Tayyip Erdoğan Üniversitesi", src: "/images/receptayyiperdoganuniversitesi.jpeg" },
    { name: "Sanko", src: "/images/sanko.jpeg" },
  ];

  const processSteps = [
    { step: "01", title: "Talebinizi Dinliyoruz", desc: "Telefon veya WhatsApp üzerinden ihtiyacınızı ve tesis bilgilerinizi alıyoruz." },
    { step: "02", title: "Sahayı Değerlendiriyoruz", desc: "Teknik ekibimiz güvenli ve doğru çözüm için gerekli incelemeyi yapıyor." },
    { step: "03", title: "Çözümü Uyguluyoruz", desc: "Planlanan işi iş güvenliği kurallarına uygun biçimde tamamlıyoruz." },
    { step: "04", title: "Raporluyoruz", desc: "Yapılan işlemleri ve varsa önerilerimizi sizinle açıkça paylaşıyoruz." },
  ];

  return (
    <main>
      {/* Header */}
      <header className="site-header">
        <a className="brand" href="#anasayfa" aria-label="Bes Enerji ana sayfa">
          <Image
            alt="Bes Enerji"
            width={124}
            height={124}
            className="brand-logo"
            src="/images/bes-enerji-logo.jpeg"
            priority
          />
        </a>
        <nav aria-label="Ana menü">
          <a href="#hizmetler">Hizmetler</a>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#referanslar">Referanslar</a>
          <a href="#surec">Süreç</a>
          <a href="#iletisim">İletişim</a>
        </nav>
        <a className="header-phone" href="tel:+905532124761">
          <span aria-hidden="true">☎</span> +90 553 212 47 61
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero" id="anasayfa">
        <div className="hero-grid"></div>
        <div className="hero-bg flex flex-row items-center" aria-hidden="true">
          <div className="container hero-content" >
            <p className="eyebrow">Profesyonel Trafo Servisi</p>
            <h1>Enerjiniz Kesintisiz, İşletmeniz Güvende.</h1>
            <p className="hero-text">
              Trafo tamiri, montajı, periyodik bakımı ve devreye alma hizmetlerinde deneyimli ekibimizle yanınızdayız.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href="tel:+905532124761">
                <span aria-hidden="true">☎</span> Hemen Arayın
              </a>
              <a
                className="button button-outline"
                href="https://wa.me/905532124761?text=Merhaba%2C%20Bes%20Enerji%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp'tan Yazın <span aria-hidden="true">↗</span>
              </a>
            </div>
            <ul className="trust-list">
              <li><span>✓</span>Uzman teknik ekip</li>
              <li><span>✓</span>Planlı ve hızlı servis</li>
              <li><span>✓</span>İş güvenliği odaklı çalışma</li>
            </ul>
          </div>
          <div className="hero-panel" aria-hidden="true">
            <span>YÜKSEK GERİLİM</span>
            <strong>TRAFO<br />SERVİSİ</strong>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services" id="hizmetler">
        <div className="container">
          <p className="eyebrow">Hizmetlerimiz</p>
          <h2>Enerji sisteminiz için uçtan uca teknik destek.</h2>
          <div className="service-grid">
            {services.map((s, index) => (
              <article key={index} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.items.map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about" id="hakkimizda">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">Neden Bes Enerji?</p>
            <h2>Kritik enerji ekipmanlarınız için doğru çözüm ortağı.</h2>
            <p>
              Enerji sürekliliğinin işletmeniz için ne kadar önemli olduğunu biliyoruz. Bu nedenle her işi keşiften raporlamaya kadar titizlikle planlıyor, güvenlik ve kalite standartlarını çalışma biçimimizin merkezinde tutuyoruz.
            </p>
            <a className="text-link" href="#iletisim">
              Ekibimizle iletişime geçin <span>→</span>
            </a>
          </div>
          <div className="stats">
            <div><strong>7/24</strong><span>Acil destek için erişim</span></div>
            <div><strong>4</strong><span>Temel teknik hizmet</span></div>
            <div><strong>%100</strong><span>Şeffaf iş takibi</span></div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="references" id="referanslar">
        <div className="container">
          <p className="eyebrow">Referanslarımız</p>
          <h2>Birlikte Çalıştığımız Kurumlar</h2>
        </div>
        <div className="reference-carousel" aria-label="Referans firmalar">
          <div className="reference-track">
            {/* Duplicate list to simulate smooth loop effect */}
            {[...references, ...references].map((ref, idx) => (
              <article key={idx} className="reference-card">
                <Image
                  alt="Bes Enerji referansı"
                  loading="lazy"
                  width={280}
                  height={160}
                  src={ref.src}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process" id="surec">
        <div className="container">
          <p className="eyebrow">Çalışma Sürecimiz</p>
          <h2>Talebinizden çözüme, şeffaf bir süreç.</h2>
          <div className="process-grid">
            {processSteps.map((p, idx) => (
              <article key={idx}>
                <span>{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location" aria-labelledby="konum-basligi">
        <div className="container location-grid">
          <div className="location-copy">
            <p className="eyebrow">Konum</p>
            <h2 id="konum-basligi">Bize Ulaşın</h2>
            <address>29 Ekim Mahallesi 778. Cadde No: 7/5, Sincan / Ankara</address>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=29%20Ekim%20Mahallesi%20778.%20Cadde%20No%3A%207%2F5%2C%20Sincan%2C%20Ankara"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps'te yol tarifi alın <span>↗</span>
            </a>
          </div>
          <iframe
            className="location-map"
            title="Bes Enerji konumu"
            src="https://www.google.com/maps?q=29%20Ekim%20Mahallesi%20778.%20Cadde%20No%3A%207%2F5%2C%20Sincan%2C%20Ankara&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="iletisim">
        <div className="container contact-inner">
          <div>
            <p className="eyebrow">İletişim</p>
            <h2>Trafo ihtiyacınız için bugün görüşelim.</h2>
            <p>Teknik ekibimize ulaşın; ihtiyacınızı birlikte değerlendirelim.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-primary" href="tel:+905532124761">
              <span aria-hidden="true">☎</span> +90 553 212 47 61
            </a>
            <a
              className="button button-light"
              href="https://wa.me/905532124761?text=Merhaba%2C%20Bes%20Enerji%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp'tan Yazın
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-inner">
          <span className="brand">BES ENERJİ</span>
          <span>© 2026 Bes Enerji. Tüm hakları saklıdır.</span>
          <a href="mailto:e.simsek@besenerji.net">e.simsek@besenerji.net</a>
        </div>
      </footer>

      {/* Mobile Sticky Actions */}
      <div className="mobile-actions">
        <a href="tel:+905532124761">
          <span aria-hidden="true">☎</span> Ara
        </a>
        <a
          href="https://wa.me/905532124761?text=Merhaba%2C%20Bes%20Enerji%20hizmetleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noreferrer"
        >
          ◉ WhatsApp
        </a>
      </div>
    </main>
  );
}