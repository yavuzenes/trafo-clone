This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## BES Enerji: Search Console ve analitik kurulumu

1. Google Search Console'da `https://www.besenerji.net/` için bir **URL ön eki** mülkü oluşturun. HTML etiketiyle doğrulama seçeneğinden yalnızca `content` değerini alın. Alan adı mülkü kullanıyorsanız doğrulama DNS üzerinden yapılır; HTML meta etiketi yeterli değildir.
2. Dağıtım ortamında `GOOGLE_SITE_VERIFICATION` değişkenine bu değeri ekleyip yeniden dağıtın. Ana sayfa kaynak kodunda `google-site-verification` meta etiketini kontrol edin; sonra Search Console'da **Doğrula** düğmesine basın.
3. Search Console'a `https://www.besenerji.net/sitemap.xml` adresini gönderin. `robots.txt` zaten bu sitemap'e işaret ediyor. Site haritasının gönderilmesi veya doğrulama, Google'da sıralama garantisi vermez.
4. Google Analytics 4 ölçüm kimliği `G-KY5XFJ89SG` siteye tanımlıdır. Gerekirse dağıtım ortamındaki `NEXT_PUBLIC_GA_MEASUREMENT_ID` ile değiştirilebilir. İsteğe bağlı Microsoft Clarity proje kimliği `NEXT_PUBLIC_CLARITY_PROJECT_ID` olarak eklenebilir. Bing Webmaster Tools doğrulama kodu için `BING_SITE_VERIFICATION` kullanılabilir.

Örnek değişken adları [.env.example](.env.example) dosyasındadır. Gerçek kimlikleri `.env.local` veya dağıtım platformunun ortam değişkenlerinde saklayın. Analitik betikleri yalnızca ziyaretçi çerez panelinde kabul ederse yüklenir; ret halinde yüklenmez. Telefon, e-posta ve WhatsApp bağlantısı tıklamaları, kişisel iletişim adresi gönderilmeden `contact_click` olayı olarak ölçülür. GA4 sayfa görüntülemeleri manuel gönderilir; GA4 veri akışında geçmiş değişikliklerine bağlı otomatik sayfa görüntüleme ölçümünü kapatın ki çift sayım oluşmasın.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
