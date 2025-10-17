'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
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
              <h1 className="text-3xl font-bold mb-2">Вход в аккаунт</h1>
              <p className="text-gray-400">
                Войдите, чтобы управлять заказами
              </p>
            </div>

            {/* Login Form */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <LoginForm />
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center text-sm text-gray-400">
              <p>
                Входя в аккаунт, вы соглашаетесь с{' '}
                <Link
                  href="/terms"
                  className="text-blue-400 hover:text-blue-300"
                >
                  условиями использования
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

