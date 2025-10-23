import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Фото на документы в Минске — быстро и профессионально | PrintCore',
  description: 'Профессиональное фото на документы за 5-7 минут. Студийный свет, современная камера, соответствие всем требованиям. Фото на паспорт, визу, права. 17 руб.',
  keywords: 'фото на документы минск, фото на паспорт, фото на визу, фото на права, биометрическое фото, фото на загранпаспорт',
  openGraph: {
    title: 'Фото на документы в Минске — PrintCore',
    description: 'Профессиональная фотография на любые документы. Готово за 5-7 минут. Студийное оборудование и опытные специалисты. 17 руб.',
    url: 'https://printcore.by/photo-documents',
    type: 'website',
  },
};

export default function PhotoDocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

