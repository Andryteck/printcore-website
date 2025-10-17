'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactsPage() {
  return (
    <>
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Контакты
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Мы всегда рады помочь с выбором услуг и ответить на ваши вопросы
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Адрес</h3>
                    <p className="text-gray-400">
                      Пр. Дзержинского 3Б, Минск, Беларусь
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Телефон</h3>
                    <a href="tel:+375333365678" className="text-blue-400 hover:text-blue-300">
                      +375 33 336 5678
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a href="mailto:info@printcore.by" className="text-blue-400 hover:text-blue-300">
                      info@printcore.by
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Режим работы</h3>
                    <p className="text-gray-400">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: выходной
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Telegram</h3>
                    <a
                      href="https://t.me/+375333365678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Написать в Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Форма обратной связи */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+375 ..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>

          {/* Карта (заглушка) */}
          <div className="mt-12 aspect-video bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-6xl">
              🗺️
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

