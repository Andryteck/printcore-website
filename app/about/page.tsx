import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О компании — Типография PrintCore в Минске',
  description: '15+ лет опыта в полиграфии. Современное оборудование Konica Minolta, Fujifilm, Epson. Качество без компромиссов. 5000+ довольных клиентов. Узнайте о нашей миссии и технологиях.',
  keywords: 'типография Минск, PrintCore о компании, оборудование типографии, профессиональная печать, цифровая печать Konica Minolta',
  openGraph: {
    title: 'О компании PrintCore — Профессиональная типография в Минске',
    description: '15+ лет опыта. Современное оборудование. 5000+ довольных клиентов. Качество без компромиссов.',
    url: 'https://printcore.by/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
                  О компании
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Миссия и оборудование PrintCore
                </h1>
                <p className="text-gray-400 text-xl mb-6">
                  Мы объединяем опыт и технологию, чтобы создавать безупречную полиграфию: 
                  от визиток до сложных тиражей и упаковки.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <a 
                    href="#equipment" 
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-4 hover:border-blue-500/50 transition-all block"
                  >
                    <div className="text-xs text-cyan-400 uppercase tracking-wider mb-1">Раздел</div>
                    <div className="text-lg font-bold mb-1">Оборудование</div>
                    <div className="text-gray-400 text-sm">Современные машины для точного результата.</div>
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-gray-800 overflow-hidden">
                <Image
                  src="/images/orders/our_salon4.jpg"
                  alt="Наш салон"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Миссия */}
          <section id="mission" className="mb-20">
            <div className="mb-12">
              <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Зачем мы
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Наша миссия
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Качество без компромиссов
                </h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Мы делаем печать простой и предсказуемой: понятные сроки, прозрачные сметы и
                  гарантированный результат. Наш подход — это внимательность к деталям и ответственность за
                  каждую партию.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>Согласование цвета и материалов до запуска;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>Тиражный контроль и внутренние чек-листы;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>Честная консультация и помощь с макетами.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-gray-800 overflow-hidden">
                <Image
                  src="/images/about/about_us.jpg"
                  alt="Наша миссия в действии"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Оборудование */}
          <section id="equipment" className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                Чем мы печатаем
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Наше оборудование
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Подбираем технологию под задачу: цифровая печать, широкоформат, тиснение, вырубка и
                постпечатная обработка.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Цифровая печать Konica Minolta',
                  desc: 'Оперативные тиражи, стабильный цвет, персонализация.',
                  image: '/images/equipment/konica.jpg'
                },
                {
                  title: 'Фотолаборатория Fujifilm',
                  desc: 'Идеальная передача цвета и качества изображений',
                  image: '/images/equipment/photo_printing.jpg'
                },
                {
                  title: 'Широкоформатная печать Epson',
                  desc: 'Идеальная размер линий на чертежах и качество цвета',
                  image: '/images/equipment/wide_format_printing.jpg'
                },
                {
                  title: 'Вырубка и высечка Vulcan',
                  desc: 'Фигурная резка, упаковочные решения, этикетки и стикеры.',
                  image: '/images/equipment/stickers.jpg'
                },
                {
                  title: 'Постпечатная обработка',
                  desc: 'Резка, биговка, фальцовка, ламинация, фольгирование и т.д.',
                  image: '/images/equipment/cutting.jpg'
                },
                {
                  title: 'Управление цветом IQ 501',
                  desc: 'Интеллектуальная система контроля и поддержания качества, каждый отпечаток получается идеальным.',
                  image: '/images/equipment/iq501.jpg'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group"
                >
                  <div className="aspect-video relative overflow-hidden bg-gray-800">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Цифры */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '15+', label: 'Лет на рынке' },
                { value: '5000+', label: 'Довольных клиентов' },
                { value: '50+', label: 'Видов продукции' },
                { value: '24/7', label: 'Онлайн-заказы' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-white/80 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Убедитесь в качестве сами
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Приезжайте к нам в офис, посмотрите на оборудование и образцы работ
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/30"
            >
              <span>Связаться с нами</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

