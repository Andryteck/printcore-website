'use client';

import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/store';
import { updateUserProfile } from '@/lib/features/auth/authSlice';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.auth);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    unp: '',
    legalAddress: '',
    bankName: '',
    bankAccount: '',
    bankCode: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState('');

  // Заполняем форму данными пользователя при открытии
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        phone: user.phone || '',
        unp: user.unp || '',
        legalAddress: user.legalAddress || '',
        bankName: user.bankName || '',
        bankAccount: user.bankAccount || '',
        bankCode: user.bankCode || '',
      });
    }
  }, [user]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Имя должно быть минимум 2 символа';
    }

    if (formData.phone && !/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Некорректный формат телефона';
    }

    if (user?.userType === 'legal' && formData.unp && !/^\d{9}$/.test(formData.unp)) {
      newErrors.unp = 'УНП должен содержать 9 цифр';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Очищаем ошибку при изменении
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');

    if (!validateForm()) {
      return;
    }

    try {
      // Отправляем только измененные поля
      const updateData: Record<string, string> = {};
      Object.entries(formData).forEach(([key, value]) => {
        if (value && value !== (user as any)?.[key]) {
          updateData[key] = value;
        }
      });

      await dispatch(updateUserProfile(updateData)).unwrap();
      setSuccessMessage('Профиль успешно обновлен!');
      
      // Закрываем модальное окно через 2 секунды
      setTimeout(() => {
        onClose();
        setSuccessMessage('');
      }, 2000);
    } catch (error: any) {
      setErrors({ submit: error.message || 'Ошибка обновления профиля' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold">Редактировать профиль</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Success Message */}
          {successMessage && (
            <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-4 text-green-400">
              {successMessage}
            </div>
          )}

          {/* Error Message */}
          {errors.submit && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 text-red-400">
              {errors.submit}
            </div>
          )}

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                {user?.userType === 'legal' ? 'Название организации' : 'Имя'}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-700 focus:border-blue-500'
                }`}
                disabled={isLoading}
              />
              {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Телефон</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-700 focus:border-blue-500'
                }`}
                placeholder="+375 (29) 123-45-67"
                disabled={isLoading}
              />
              {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone}</p>}
            </div>
          </div>

          {/* Legal Entity Fields */}
          {user?.userType === 'legal' && (
            <>
              <div className="border-t border-gray-800 pt-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Юридическая информация</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">УНП</label>
                    <input
                      type="text"
                      name="unp"
                      value={formData.unp}
                      onChange={handleChange}
                      maxLength={9}
                      className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none transition-colors ${
                        errors.unp ? 'border-red-500' : 'border-gray-700 focus:border-blue-500'
                      }`}
                      placeholder="123456789"
                      disabled={isLoading}
                    />
                    {errors.unp && <p className="mt-2 text-sm text-red-400">{errors.unp}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Юридический адрес</label>
                    <textarea
                      name="legalAddress"
                      value={formData.legalAddress}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-blue-500 rounded-xl text-white focus:outline-none transition-colors resize-none"
                      placeholder="г. Минск, ул. Ленина, д. 1, офис 100"
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Банковские реквизиты</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Название банка</label>
                      <input
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-blue-500 rounded-xl text-white focus:outline-none transition-colors"
                        placeholder='ОАО "Беларусбанк"'
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">БИК банка</label>
                      <input
                        type="text"
                        name="bankCode"
                        value={formData.bankCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-blue-500 rounded-xl text-white focus:outline-none transition-colors"
                        placeholder="AKBBBY2X"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Расчетный счет</label>
                    <input
                      type="text"
                      name="bankAccount"
                      value={formData.bankAccount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-blue-500 rounded-xl text-white focus:outline-none transition-colors font-mono"
                      placeholder="BY86AKBB36429000000000000000"
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-all disabled:opacity-50"
            >
              {isLoading ? 'Сохранение...' : 'Сохранить изменения'}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all disabled:opacity-50"
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

