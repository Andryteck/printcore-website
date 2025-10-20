import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/RegisterForm';
import Link from 'next/link';

export default function RegisterPage() {
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
              <h1 className="text-3xl font-bold mb-2">Создать аккаунт</h1>
              <p className="text-gray-400">
                Зарегистрируйтесь для быстрого оформления заказов
              </p>
            </div>

            {/* Register Form */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <RegisterForm />
            </div>

            {/* Benefits */}
            <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h3 className="font-bold mb-4 text-center">
                Преимущества регистрации
              </h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Быстрое оформление заказов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>История всех заказов</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Отслеживание статуса</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">✓</span>
                  <span>Специальные предложения</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

