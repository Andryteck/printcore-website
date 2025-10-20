'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Web3Forms API endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Access Key из переменной окружения
          // Добавьте NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY в файл .env.local
          // Получить ключ можно на https://web3forms.com
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          from_name: 'PrintCore Website',
          subject: 'Новое сообщение с сайта PrintCore'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        // Очистка формы после успешной отправки
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        // Сброс статуса через 5 секунд
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(result.message || 'Ошибка отправки формы');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Произошла ошибка при отправке');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400">
          ✓ Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400">
          ✗ {errorMessage || 'Ошибка отправки. Попробуйте позже или свяжитесь с нами по телефону.'}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Имя <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Ваше имя"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="+375 ..."
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Сообщение <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            rows={5}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Расскажите о вашем проекте..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Отправка...' : 'Отправить сообщение'}
        </button>
      </form>
    </div>
  );
}

