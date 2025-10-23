'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './design.module.css';

// Note: metadata export cannot be used in client components
// SEO is handled through custom Head component or layout

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  description: string;
}

export default function DesignOrderPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: ''
  });

  const [files, setFiles] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const services = [
    {
      icon: '💳',
      title: 'Дизайн визиток',
      description: 'От классических до премиум-визиток с золотым тиснением',
      value: 'business-card'
    },
    {
      icon: '📄',
      title: 'Дизайн листовок и флаеров',
      description: 'Яркие и привлекающие внимание макеты для вашей рекламы',
      value: 'leaflets'
    },
    {
      icon: '📚',
      title: 'Дизайн брошюр и каталогов',
      description: 'Многостраничные издания с профессиональной версткой',
      value: 'brochures'
    },
    {
      icon: '©️',
      title: 'Разработка логотипа',
      description: 'Уникальный фирменный знак для вашего бренда',
      value: 'logo'
    },
    {
      icon: '🎨',
      title: 'Фирменный стиль',
      description: 'Полный пакет брендинга: от логотипа до гайдлайна',
      value: 'brand'
    },
    {
      icon: '📦',
      title: 'Дизайн упаковки',
      description: 'Привлекательный дизайн для вашей продукции',
      value: 'packaging'
    },
    {
      icon: '🖼️',
      title: 'Постер и плакаты',
      description: 'От афиш мероприятий до интерьерных постеров',
      value: 'poster'
    },
    {
      icon: '✉️',
      title: 'Дизайн пригласительных',
      description: 'Элегантные приглашения для особых событий',
      value: 'invitation'
    }
  ];

  const features = [
    {
      icon: '🏆',
      title: 'Опытные дизайнеры',
      description: 'Более 10 лет опыта в полиграфическом дизайне'
    },
    {
      icon: '🚀',
      title: 'Быстрые сроки',
      description: 'Первые концепты через 1-2 дня'
    },
    {
      icon: '🔄',
      title: 'Бесплатные правки',
      description: 'До 3 правок включены в стоимость'
    },
    {
      icon: '📁',
      title: 'Исходники в подарок',
      description: 'Все файлы в удобных форматах'
    }
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0 && value[0] === '3') {
      value = '375' + value.substring(3);
    }

    let formatted = value;
    if (value.startsWith('375')) {
      formatted = '+375';
      if (value.length > 3) formatted += ' (' + value.substring(3, 5);
      if (value.length > 5) formatted += ') ' + value.substring(5, 8);
      if (value.length > 8) formatted += '-' + value.substring(8, 10);
      if (value.length > 10) formatted += '-' + value.substring(10, 12);
    }

    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    const WEB3FORMS_ACCESS_KEY = 'dd5abd14-7c0c-4f05-9938-90d555fc6a48';

    const submitData = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'Новый заказ дизайна полиграфии - PrintCore',
      from_name: formData.name,
      email: formData.email || 'noreply@printcore.by',
      'Имя клиента': formData.name,
      'Телефон': formData.phone,
      'Email клиента': formData.email || 'не указан',
      'Услуга': formData.service,
      'Описание проекта': formData.description
    };

    if (files && files.length > 0) {
      const fileNames = Array.from(files).map(f => f.name).join(', ');
      Object.assign(submitData, {
        'Прикрепленные файлы': `Файлов: ${files.length} - ${fileNames}`
      });
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submitData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setShowSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          description: ''
        });
        setFiles(null);
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        throw new Error(result.message || 'Ошибка отправки');
      }
    } catch (error) {
      console.error('Error:', error);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Дизайн полиграфии",
            "description": "Профессиональный дизайн визиток, листовок, брошюр, логотипов и фирменного стиля в Минске",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PrintCore",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "пр. Дзержинского 3Б",
                "addressLocality": "Минск",
                "addressCountry": "BY"
              },
              "telephone": "+375333365678"
            },
            "areaServed": "BY",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "BYN",
              "price": "17",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "17",
                "priceCurrency": "BYN"
              }
            }
          })
        }}
      />
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Header */}
          <div className={styles.header}>
            <h1>
              <span className={styles.icon}>🎨</span> Дизайн полиграфии
            </h1>
            <p>Создадим уникальный дизайн для вашего бизнеса</p>
          </div>

          {/* Main Content */}
          <div className={styles.mainContent}>
            {/* Services Card */}
            <div className={styles.servicesCard}>
              <h2>
                <span className={styles.sectionIcon}>✨</span> Наши услуги
              </h2>
              <ul className={styles.serviceList}>
                {services.map((service, index) => (
                  <li key={index} className={styles.serviceItem}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                    <div>
                      <strong>{service.title}</strong>
                      <p>{service.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Form Card */}
            <div className={styles.orderFormCard}>
              <h2>
                <span className={styles.sectionIcon}>📝</span> Форма заказа
              </h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Ваше имя *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Иван Иванов"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Телефон *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneInput}
                    required
                    placeholder="+375 (33) 123-45-67"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@mail.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service">Выберите услугу *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Выберите услугу --</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.value}>
                        {service.title}
                      </option>
                    ))}
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="description">Описание проекта *</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Опишите ваши пожелания, целевую аудиторию, стиль, цвета и т.д."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Приложить файлы (примеры, брендбук, логотип)</label>
                  <div className={styles.fileUpload}>
                    <input
                      type="file"
                      id="files"
                      name="files"
                      onChange={handleFileChange}
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf,.ai,.psd"
                    />
                    <label htmlFor="files" className={styles.fileUploadLabel}>
                      <span className={styles.uploadIcon}>☁️</span>
                      <span>
                        {files && files.length > 0
                          ? `Выбрано файлов: ${files.length}`
                          : 'Выбрать файлы'}
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner}>⏳</span>
                      Отправка...
                    </>
                  ) : (
                    <>
                      <span>✈️</span>
                      Отправить заказ
                    </>
                  )}
                </button>

                {showSuccess && (
                  <div className={styles.successMessage}>
                    <span className={styles.messageIcon}>✅</span>
                    <p>Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.</p>
                  </div>
                )}

                {showError && (
                  <div className={styles.errorMessage}>
                    <span className={styles.messageIcon}>⚠️</span>
                    <p>Произошла ошибка при отправке. Пожалуйста, позвоните нам: +375 33 336 5678</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Features */}
          <div className={styles.features}>
            <h2>Почему выбирают нас?</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className={styles.backButtonWrapper}>
            <Link href="/services" className={styles.backBtn}>
              <span>←</span> Назад к услугам
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

