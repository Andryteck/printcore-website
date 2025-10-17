'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Имитация отправки
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Logo / Branding */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50" />
                <span className="text-3xl font-bold text-white">
                  Print<span className="font-light text-gray-300">Core</span>
                </span>
              </Link>
              <h1 className="text-3xl font-bold mb-2">Восстановление пароля</h1>
              <p className="text-gray-400">
                Введите email для получения инструкций
              </p>
            </div>

            {/* Form or Success Message */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 text-red-400">
                      {error}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-blue-500 rounded-xl text-white focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50"
                  >
                    {isLoading ? 'Отправка...' : 'Отправить инструкции'}
                  </button>

                  <div className="text-center pt-4 border-t border-gray-800">
                    <Link
                      href="/login"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      ← Вернуться к входу
                    </Link>
                  </div>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold">Письмо отправлено!</h3>
                  <p className="text-gray-400">
                    Мы отправили инструкции по восстановлению пароля на{' '}
                    <span className="text-white font-semibold">{email}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Не получили письмо? Проверьте папку "Спам" или повторите
                    попытку через несколько минут.
                  </p>

                  <div className="pt-4">
                    <Link
                      href="/login"
                      className="inline-block w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                    >
                      Вернуться к входу
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

