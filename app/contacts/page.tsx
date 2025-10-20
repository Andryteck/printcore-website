import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import PhoneLink from '@/components/PhoneLink';

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
                    <PhoneLink className="text-blue-400 hover:text-blue-300" />
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
            <ContactForm />
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

