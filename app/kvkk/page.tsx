import type { Metadata } from "next";
import { Header, Footer, Breadcrumb } from "../components";
import { company } from "../data";
import { pageMetadata } from "../seo-metadata";

export const metadata: Metadata = pageMetadata({
  title: "KVKK ve Kişisel Veriler | BES Enerji",
  description: "BES Enerji web sitesi üzerinden kurulan iletişime ilişkin kişisel veri bilgilendirmesi ve başvuru kanalları.",
  path: "/kvkk",
});

export default function Page() {
  return <><Header /><main>
    <section className="page-hero"><div className="shell"><Breadcrumb items={[{ label: "KVKK ve Kişisel Veriler" }]} /><span className="kicker light">KİŞİSEL VERİLER</span><h1>KVKK ve iletişim verileri</h1><p>Web sitesi üzerinden bizimle iletişim kurduğunuzda paylaştığınız bilgilere ilişkin açıklamalar.</p></div></section>
    <section className="section"><div className="shell kvkk-content">
      <h2>Veri sorumlusu</h2>
      <p>BES Taahhüt Enerji Sanayi ve Ticaret Ltd. Şti. Adres: {company.address}. Kişisel verilerinizle ilgili taleplerinizi <a href={`mailto:${company.email}`}>{company.email}</a> adresine iletebilirsiniz.</p>
      <h2>Bu metnin kapsamı</h2>
      <p>Bu bilgilendirme, web sitesindeki telefon ve e-posta bağlantıları üzerinden başlattığınız iletişimle sınırlıdır. Sitede doğrudan veri toplayan bir iletişim formu bulunmaz. E-posta, telefon veya WhatsApp üzerinden bizimle iletişime geçmeniz halinde paylaştığınız ad, iletişim bilgisi, şirket/tesis bilgisi ve talebinizin içeriği, yanıt verebilmek ve talep ettiğiniz teknik hizmeti değerlendirmek için kullanılır.</p>
      <h2>Toplama yöntemi ve işleme amacı</h2>
      <p>Bilgiler, seçtiğiniz iletişim kanalı üzerinden tarafımıza ilettiğiniz anda elde edilir. Amaç; talebinizi yanıtlamak, keşif veya teklif sürecini yürütmek ve talep edilen hizmetin kapsamını belirlemektir. İşleme şartı, somut talebin niteliğine göre sözleşmenin kurulması veya ifası için gerekli olması ya da temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaat olabilir. Yasal yükümlülük doğduğunda ilgili veriler bu yükümlülüğün yerine getirilmesi için işlenebilir.</p>
      <h2>Aktarım ve üçüncü taraf bağlantıları</h2>
      <p>İletişim bağlantılarına tıkladığınızda kullandığınız e-posta uygulaması, telefon operatörü veya WhatsApp gibi üçüncü taraf hizmetler kendi koşullarına göre veri işleyebilir. Cihaz videoları, yalnızca oynatma düğmesine bastığınızda YouTube üzerinden yüklenir. Yasal bir talep bulunduğunda gerekli bilgiler yetkili kamu kurumlarına iletilebilir. Diğer olası veri aktarımları, kullanılan hizmet sağlayıcıları ve saklama süreleri şirketin fiilî veri işleme kayıtları üzerinden ayrıca değerlendirilmelidir.</p>
      <h2>Haklarınız</h2>
      <p>6698 sayılı Kanun’un 11. maddesi kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi isteme, amacına uygun kullanılıp kullanılmadığını öğrenme, düzeltme veya silinmesini isteme ve kanunda yer alan diğer haklarınız için veri sorumlusuna başvurabilirsiniz.</p>
      <p>Başvuru için <a href={`mailto:${company.email}`}>{company.email}</a> adresini kullanabilir veya {company.address} adresine yazılı olarak iletebilirsiniz.</p>
      <h2>Çerezler</h2>
      <p>Sitede reklam veya analitik amaçlı çerezler için bir onay mekanizması bulunmaz; bu tür izleyiciler eklenirse ayrı bir çerez tercih ve aydınlatma düzeni gerekir. Dış bağlantılara geçildiğinde ya da cihaz videosu başlatıldığında ilgili üçüncü tarafın çerez politikası geçerli olabilir.</p>
    </div></section>
  </main><Footer /></>;
}
