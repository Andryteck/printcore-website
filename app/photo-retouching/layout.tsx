import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ретушь и обработка фотографий в Минске | PrintCore',
  description: 'Профессиональная ретушь фото от 5 руб. Портретная ретушь, реставрация старых фото, обработка для каталогов. Опытные специалисты, быстрые сроки.',
  keywords: 'ретушь фото минск, обработка фотографий, портретная ретушь, реставрация фото, ретушь для каталога, фотошоп услуги',
  openGraph: {
    title: 'Ретушь и обработка фотографий — PrintCore',
    description: 'Профессиональная ретушь любой сложности. От базовой коррекции до премиум обработки. Работаем в Adobe Photoshop.',
    url: 'https://printcore.by/photo-retouching',
    type: 'website',
  },
};

export default function PhotoRetouchingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


