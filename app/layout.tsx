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
  title: "PrintCore — Профессиональная полиграфия в Минске",
  description: "Цифровая, широкоформатная, офсетная печать. Визитки, буклеты, баннеры. Качество и сроки гарантируем.",
  keywords: "полиграфия, печать, визитки, баннеры, типография Минск, цифровая печать, офсетная печать",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
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
