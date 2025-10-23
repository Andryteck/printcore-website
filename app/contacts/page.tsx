import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import PhoneLink from '@/components/PhoneLink';
import YandexMap from '@/components/YandexMap';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты типографии PrintCore в Минске',
  description: 'Свяжитесь с PrintCore: Пр. Дзержинского 3Б, Минск. Телефон: +375 33 336 5678. Email: printcorecenter@gmail.com. Режим работы: Пн-Пт 9:00-18:00. Telegram, форма обратной связи.',
  keywords: 'контакты PrintCore, типография Минск адрес, печать контакты, PrintCore телефон, типография на Дзержинского',
  openGraph: {
    title: 'Контакты PrintCore — Типография в Минске',
    description: 'Адрес: Пр. Дзержинского 3Б. Телефон: +375 33 336 5678. Пн-Пт 9:00-18:00',
    url: 'https://printcore.by/contacts',
    type: 'website',
  },
};

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
                    <a href="mailto:printcorecenter@gmail.com" className="text-blue-400 hover:text-blue-300">
                      printcorecenter@gmail.com
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

          {/* Яндекс.Карта */}
          <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden" style={{ height: '500px' }}>
            <YandexMap 
              apiKey="f3b7c027-5c75-4342-b16d-3c53c17537d0"
              center={[53.891614, 27.527435]}
              zoom={16}
              address="Пр. Дзержинского 3Б, Минск, Беларусь"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

