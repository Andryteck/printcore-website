'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">PrintCore</h3>
            <p className="text-sm leading-relaxed mb-4">
              Профессиональная полиграфия в Минске. Качественная печать любой сложности с 2010 года.
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/+375333365678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                📱
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                📧
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/digital" className="hover:text-white transition-colors">
                  Цифровая печать
                </Link>
              </li>
              <li>
                <Link href="/services/wide-format" className="hover:text-white transition-colors">
                  Широкоформатная печать
                </Link>
              </li>
              <li>
                <Link href="/services/offset" className="hover:text-white transition-colors">
                  Офсетная печать
                </Link>
              </li>
              <li>
                <Link href="/services/uv" className="hover:text-white transition-colors">
                  УФ-печать
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="hover:text-white transition-colors">
                  Дизайн и верстка
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Пр. Дзержинского 3Б, Минск</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="tel:+375333365678" className="hover:text-white transition-colors">
                  +375 33 336 5678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:info@printcore.by" className="hover:text-white transition-colors">
                  info@printcore.by
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>Пн-Пт: 9:00-18:00<br />Сб-Вс: выходной</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} PrintCore — команда, которой можно доверять.</p>
        </div>
      </div>
    </footer>
  );
}

