import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/providers";

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
        </StoreProvider>
      </body>
    </html>
  );
}
