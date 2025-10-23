import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Заказать дизайн полиграфии в Минске | PrintCore',
  description: 'Профессиональный дизайн визиток, листовок, брошюр, логотипов и фирменного стиля. Опытные дизайнеры, быстрые сроки, бесплатные правки. Заказать дизайн полиграфии от 17 руб.',
  keywords: 'дизайн визиток, разработка логотипа, дизайн листовок, фирменный стиль, дизайн брошюр, дизайн полиграфии Минск',
  openGraph: {
    title: 'Заказать дизайн полиграфии — PrintCore',
    description: 'Создадим уникальный дизайн для вашего бизнеса. Визитки, логотипы, брошюры, фирменный стиль. Быстро и качественно.',
    url: 'https://printcore.by/services/design',
    type: 'website',
  },
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


