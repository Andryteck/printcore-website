import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: 'Как выбрать бумагу для визиток',
      excerpt: 'Разбираемся в типах бумаги и покрытиях для создания визиток премиум-класса',
      date: '15 марта 2024',
      category: 'Советы',
      icon: '💼'
    },
    {
      id: 2,
      title: 'Цифровая vs Офсетная печать',
      excerpt: 'Какую технологию выбрать для вашего проекта? Сравниваем преимущества и недостатки',
      date: '10 марта 2024',
      category: 'Технологии',
      icon: '🖨️'
    },
    {
      id: 3,
      title: 'Подготовка макетов к печати',
      excerpt: 'Чек-лист для дизайнеров: что проверить перед отправкой макета в типографию',
      date: '5 марта 2024',
      category: 'Дизайн',
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Тренды в упаковке 2024',
      excerpt: 'Экологичные материалы, минимализм и другие актуальные направления',
      date: '1 марта 2024',
      category: 'Тренды',
      icon: '📦'
    },
    {
      id: 5,
      title: 'УФ-печать: возможности и применение',
      excerpt: 'Где применяется УФ-печать и какие преимущества она дает вашему бизнесу',
      date: '25 февраля 2024',
      category: 'Технологии',
      icon: '☀️'
    },
    {
      id: 6,
      title: 'Как сэкономить на печати без потери качества',
      excerpt: 'Практические советы по оптимизации бюджета на полиграфию',
      date: '20 февраля 2024',
      category: 'Советы',
      icon: '💰'
    },
  ];

  return (
    <>
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Блог
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Полезные статьи о полиграфии
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Советы, тренды, технологии и лайфхаки от экспертов PrintCore
            </p>
          </div>

          {/* Сетка статей */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group block bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all"
              >
                {/* Превью */}
                <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform">
                  {article.icon}
                </div>

                {/* Контент */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 flex items-center text-blue-400 text-sm font-semibold">
                    <span className="group-hover:translate-x-1 transition-transform">
                      Читать далее →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Пагинация */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  page === 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Подписка на блог */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Подпишитесь на обновления
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Получайте новые статьи, советы и специальные предложения на email
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none"
              />
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

