import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  const projects = [
    { id: 1, title: 'Визитки для IT-компании', category: 'Визитки', icon: '💼' },
    { id: 2, title: 'Каталоги для ресторана', category: 'Каталоги', icon: '📖' },
    { id: 3, title: 'Баннеры для выставки', category: 'Баннеры', icon: '🎯' },
    { id: 4, title: 'Упаковка для косметики', category: 'Упаковка', icon: '📦' },
    { id: 5, title: 'Листовки для акции', category: 'Листовки', icon: '📄' },
    { id: 6, title: 'Брошюры для отеля', category: 'Брошюры', icon: '📚' },
    { id: 7, title: 'Наклейки для бренда', category: 'Наклейки', icon: '🏷️' },
    { id: 8, title: 'Календари настенные', category: 'Календари', icon: '📅' },
    { id: 9, title: 'Открытки премиум', category: 'Открытки', icon: '✉️' },
  ];

  return (
    <>
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Портфолио
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Наши работы
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Примеры выполненных проектов для бизнеса и частных клиентов
            </p>
          </div>

          {/* Фильтры */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Все', 'Визитки', 'Каталоги', 'Баннеры', 'Упаковка', 'Листовки'].map((filter) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === 'Все'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Сетка проектов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer"
              >
                {/* Изображение (заглушка) */}
                <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform">
                  {project.icon}
                </div>

                {/* Информация */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Хотите увидеть больше?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Приезжайте к нам в офис — покажем образцы и расскажем о возможностях
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              <span>Связаться с нами</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

