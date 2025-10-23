import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/providers";
import DiscountBanner from "@/components/DiscountBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://printcore.by'),
  title: {
    default: "PrintCore — Профессиональная полиграфия в Минске",
    template: "%s | PrintCore"
  },
  description: "Цифровая, широкоформатная, офсетная печать. Визитки, буклеты, баннеры. Качество и сроки гарантируем.",
  keywords: "полиграфия, печать, визитки, баннеры, типография Минск, цифровая печать, офсетная печать, широкоформатная печать, фотопечать",
  authors: [{ name: "PrintCore" }],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://printcore.by',
    title: 'PrintCore — Профессиональная полиграфия в Минске',
    description: 'Цифровая, широкоформатная, офсетная печать. Визитки, буклеты, баннеры. Качество и сроки гарантируем.',
    siteName: 'PrintCore',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Добавьте коды верификации после регистрации в Google Search Console и Яндекс.Вебмастер
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PrintCore',
    image: 'https://printcore.by/logo.png',
    '@id': 'https://printcore.by',
    url: 'https://printcore.by',
    telephone: '+375333365678',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Пр. Дзержинского 3Б',
      addressLocality: 'Минск',
      addressRegion: 'Минская область',
      postalCode: '220116',
      addressCountry: 'BY'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.9045,
      longitude: 27.5615
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      'https://t.me/+375333365678',
      // Добавьте ссылки на соцсети если есть
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127'
    }
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <StoreProvider>
          {children}
          <DiscountBanner 
            discount={15.0}
            timeOut={2}
            accentColor="#DF0050"
            products={[
              { href: 'https://printcore.by/produkciya/photobook', label: 'Фотоальбом' },
              { href: 'https://printcore.by/produkciya/standar-foto', label: 'Стандартные Фотографии' },
              { href: 'https://printcore.by/produkciya/zine-book', label: 'Zine Book (Зинбук)' },
              { href: 'https://printcore.by/produkciya/kalendar-a3-perekidnoy', label: 'Настенный календарь А3 горизонтальный' },
            ]}
          />
        </StoreProvider>
      </body>
    </html>
  );
}
