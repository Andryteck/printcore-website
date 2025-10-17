'use client';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { registerUser } from '@/lib/features/auth/authSlice';
import Link from 'next/link';

export default function RegisterForm() {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };
    let isValid = true;

    // Name validation
    if (!formData.name) {
      errors.name = 'Имя обязательно';
      isValid = false;
    } else if (formData.name.length < 2) {
      errors.name = 'Имя должно быть минимум 2 символа';
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      errors.email = 'Email обязателен';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Некорректный email';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone) {
      errors.phone = 'Телефон обязателен';
      isValid = false;
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      errors.phone = 'Некорректный формат телефона';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      errors.password = 'Пароль обязателен';
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Пароль должен быть минимум 6 символов';
      isValid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Подтвердите пароль';
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Пароли не совпадают';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Очистка ошибки при изменении
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const { confirmPassword, ...registerData } = formData;
      await dispatch(registerUser(registerData)).unwrap();
      // Успешная регистрация - редирект
      window.location.href = '/account';
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Global Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 text-red-400">
          {error}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Имя
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none transition-colors ${
            formErrors.name
              ? 'border-red-500 focus:border-red-400'
              : 'border-gray-700 focus:border-blue-500'
          }`}
          placeholder="Иван Иванов"
          disabled={isLoading}
        />
        {formErrors.name && (
          <p className="mt-2 text-sm text-red-400">{formErrors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none transition-colors ${
            formErrors.email
              ? 'border-red-500 focus:border-red-400'
              : 'border-gray-700 focus:border-blue-500'
          }`}
          placeholder="your@email.com"
          disabled={isLoading}
        />
        {formErrors.email && (
          <p className="mt-2 text-sm text-red-400">{formErrors.email}</p>
        )}
      </div>

      {/* Phone */}
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
          className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none transition-colors ${
            formErrors.phone
              ? 'border-red-500 focus:border-red-400'
              : 'border-gray-700 focus:border-blue-500'
          }`}
          placeholder="+375 (29) 123-45-67"
          disabled={isLoading}
        />
        {formErrors.phone && (
          <p className="mt-2 text-sm text-red-400">{formErrors.phone}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-semibold mb-2">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none transition-colors ${
            formErrors.password
              ? 'border-red-500 focus:border-red-400'
              : 'border-gray-700 focus:border-blue-500'
          }`}
          placeholder="••••••••"
          disabled={isLoading}
        />
        {formErrors.password && (
          <p className="mt-2 text-sm text-red-400">{formErrors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-semibold mb-2"
        >
          Подтвердите пароль
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none transition-colors ${
            formErrors.confirmPassword
              ? 'border-red-500 focus:border-red-400'
              : 'border-gray-700 focus:border-blue-500'
          }`}
          placeholder="••••••••"
          disabled={isLoading}
        />
        {formErrors.confirmPassword && (
          <p className="mt-2 text-sm text-red-400">
            {formErrors.confirmPassword}
          </p>
        )}
      </div>

      {/* Terms */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          required
          className="w-4 h-4 mt-1 rounded border-gray-700 bg-gray-800 text-blue-600 focus:ring-blue-500"
        />
        <span className="text-sm text-gray-400">
          Я согласен с{' '}
          <Link href="/terms" className="text-blue-400 hover:text-blue-300">
            условиями использования
          </Link>{' '}
          и{' '}
          <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
            политикой конфиденциальности
          </Link>
        </span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Регистрируем...
          </span>
        ) : (
          'Зарегистрироваться'
        )}
      </button>

      {/* Login Link */}
      <div className="text-center pt-4 border-t border-gray-800">
        <p className="text-gray-400 mb-4">Уже есть аккаунт?</p>
        <Link
          href="/login"
          className="inline-block w-full bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
        >
          Войти
        </Link>
      </div>
    </form>
  );
}

