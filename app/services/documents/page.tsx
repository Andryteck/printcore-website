'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './documents.module.css';
import { useState, useEffect } from 'react';

export default function DocumentsPage() {
  const [activeTab, setActiveTab] = useState('calc');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [orderFiles, setOrderFiles] = useState<File[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    quantity: 1,
    format: 'A4',
    printType: 'Односторонняя',
    colorType: 'Полноцветная',
    paperType: 'Офсетная',
    density: 'Тонкая (80 г/м²)',
    lamination: 'Нет',
    plotterCut: 'Нет',
    scoring: 'Нет',
    roundCorners: 'Нет',
    uvPrint: 'Нет',
    urgency: 'Стандартное изготовление (от 1 рабочего дня)',
    comments: ''
  });

  const [orderFormData, setOrderFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  });

  const [modalFormData, setModalFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const priceTable = [
    { range: '1-9', a3Single: 84, a3Double: 168, a4Single: 42, a4Double: 84 },
    { range: '10-19', a3Single: 70, a3Double: 140, a4Single: 42, a4Double: 84 },
    { range: '20-39', a3Single: 63, a3Double: 126, a4Single: 35, a4Double: 70 },
    { range: '40-79', a3Single: 49, a3Double: 98, a4Single: 31.5, a4Double: 63 },
    { range: '80-159', a3Single: 42, a3Double: 84, a4Single: 24.5, a4Double: 49 },
    { range: '160-319', a3Single: 35, a3Double: 70, a4Single: 21, a4Double: 42 },
    { range: '320-639', a3Single: 28, a3Double: 56, a4Single: 17.5, a4Double: 35 },
    { range: '640-1279', a3Single: 21, a3Double: 42, a4Single: 14, a4Double: 28 },
    { range: '1280-2559', a3Single: 17.5, a3Double: 35, a4Single: 10.5, a4Double: 21 },
    { range: '2560+', a3Single: 14, a3Double: 28, a4Single: 8.75, a4Double: 17.5 }
  ];

  const paperPrices = [
    { name: 'А3 80 г/м²', price: 4 },
    { name: 'Офсетная бумага 120 г/м²', price: 7.2 },
    { name: 'Офсетная бумага 160 г/м²', price: 10.8 },
    { name: 'Мелованная 115 г/м²', price: 7.2 },
    { name: 'Мелованная 130 г/м²', price: 10 },
    { name: 'Мелованная 150 г/м²', price: 10.8 }
  ];

  const faqItems = [
    {
      question: 'Хочу распечатать много цветного с заливкой на обычной бумаге прямо сейчас! Ой что это, полосы? Как же так :(',
      answer: 'У нас в парке оборудования имеются машины как среднего, так и профессионального уровня. На профессиональных машинах качество печати будет хорошим, но заказы выполняются в порядке очереди, в зависимости от загруженности производства.'
    },
    {
      question: 'Можно А4 или А3 на простой бумаге, но без белых рамок?',
      answer: 'Да, печать без белых рамок возможна на машинах, которые находятся у нас на производстве. Мы печатаем на формате SRA3, затем режем край изображения, и оно получается без белых рамок.'
    },
    {
      question: 'Мне надо быстренько, можно на обычной бумаге напечатать и сразу порезать? У вас же есть машины для этого.',
      answer: 'Для точной и качественной резки нам нужно сделать правильный спуск, а также печатать файлы на профессиональных машинах. Этот процесс происходит у нас на производстве, где иногда бывает очередь на печать и резку.'
    },
    {
      question: 'Хочу вам в Телеграм или Вотсап переслать. Как это нельзя, почему?',
      answer: 'Телеграм и Вотсап у нас доступны только для консультаций по нашим услугам. Заказы мы принимаем только по электронной почте или через заявку на сайте.'
    },
    {
      question: 'Ой, что-то у вас всё неправильно в Ворде открылось, как же так, а можете поправить? А что делать?',
      answer: 'Word и Excel не являются печатными форматами. Для печати нужно сохранить файл в PDF-формат в той версии Word, в которой файл был создан, а затем отправить этот файл на печать.'
    }
  ];

  const handleFileUpload = (files: FileList | null, type: 'calc' | 'order') => {
    if (!files) return;
    
    const newFiles = Array.from(files).filter(file => {
      if (file.size > 50 * 1024 * 1024) {
        setAlertMessage({ type: 'error', message: `Файл ${file.name} превышает 50 МБ` });
        return false;
      }
      return true;
    });

    if (type === 'calc') {
      setUploadedFiles(prev => [...prev, ...newFiles]);
    } else {
      setOrderFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (fileName: string, type: 'calc' | 'order') => {
    if (type === 'calc') {
      setUploadedFiles(prev => prev.filter(f => f.name !== fileName));
    } else {
      setOrderFiles(prev => prev.filter(f => f.name !== fileName));
    }
  };

  const calculatePrice = () => {
    const { quantity, format, printType } = formData;
    let basePrice = 42; // Default A4 single

    if (format === 'A3') {
      basePrice = 84;
    } else if (format === 'A5') {
      basePrice = 25;
    } else if (format === 'A6') {
      basePrice = 15;
    }

    if (printType === 'Двусторонняя') {
      basePrice *= 2;
    }

    // Volume discount
    if (quantity >= 10 && quantity < 20) {
      basePrice *= 0.95;
    } else if (quantity >= 20 && quantity < 40) {
      basePrice *= 0.85;
    } else if (quantity >= 40 && quantity < 80) {
      basePrice *= 0.75;
    } else if (quantity >= 80) {
      basePrice *= 0.6;
    }

    return {
      unitPrice: basePrice.toFixed(2),
      totalPrice: (basePrice * quantity).toFixed(2)
    };
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderData = {
      service: 'Цветная печать и копирование',
      ...formData,
      files: uploadedFiles.length,
      contact: modalFormData
    };

    // Simulate API call
    setAlertMessage({ type: 'success', message: 'Заказ успешно отправлен! Мы свяжемся с вами в течение 10 минут.' });
    setShowModal(false);
    setUploadedFiles([]);
    setFormData(prev => ({ ...prev, quantity: 1, comments: '' }));
  };

  const handleQuickOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderData = {
      service: 'Цветная печать и копирование',
      ...orderFormData,
      files: orderFiles.length
    };

    // Simulate API call
    setAlertMessage({ type: 'success', message: 'Быстрый заказ отправлен! Мы свяжемся с вами в течение 10 минут.' });
    setOrderFiles([]);
    setOrderFormData({ name: '', phone: '', email: '', comment: '' });
  };

  const price = calculatePrice();

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
            "name": "Цветная печать и копирование",
            "description": "Цветная печать документов формата А7, А6, А5, А4, А3. Цветное копирование в одностороннем и двустороннем вариантах. Ламинация.",
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
              "price": "42",
              "description": "Цветная печать от 42 рублей"
            }
          })
        }}
      />
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/">Главная</Link>
            <span className={styles.divider}>»</span>
            <Link href="/services">Все услуги</Link>
            <span className={styles.divider}>»</span>
            <Link href="/services/digital-print">Цифровая печать</Link>
            <span className={styles.divider}>»</span>
            <span>Цветная печать и копирование</span>
          </div>

          {/* Page Title */}
          <div className={styles.pageTitle}>
            <h1>Цветная печать и копирование</h1>
          </div>

          {/* Content */}
          <div className={styles.contentRow}>
            <div className={styles.itemGallery}>
              <img 
                src="https://static.printcore.by/content/pechat_doc.png" 
                alt="Цветная печать и копирование"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%23999%22 font-family=%22sans-serif%22 font-size=%2224%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3EПечать и копирование%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <div className={styles.contentArea}>
              <p>Цветная печать и копирование находят широкое применение в различных областях, таких как реклама, маркетинг, дизайн, образование и офисная работа. Данная услуга позволяет получить качественные и яркие цветные копии и напечатать документы различных размеров.</p>

              <p>Мы выполняем цветную печать документов формата А7, А6, А5, А4 и А3, а также цветное копирование в одностороннем и двустороннем вариантах. При необходимости, предоставляем возможность ламинации для сохранения внешнего вида документа.</p>

              <p>Заказать печать и копирование в цвете с доставкой по всей Минску и по всей РБ вы можете в нашей типографии. Мы выполним работу быстро и качественно, независимо от количества тиража.</p>

              <p style={{ textAlign: 'right', marginTop: '20px' }}>
                <a href="#entry-actions" className={styles.ottiskButton}>Сделать заказ</a>
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <section className={styles.faqSection}>
            <div className={styles.sectionHeader}>
              <h2>Часто задаваемые вопросы</h2>
            </div>
            <div className={styles.faqContainer}>
              {faqItems.map((item, index) => (
                <div key={index} className={styles.faqItem}>
                  <div className={styles.faqHeader}>
                    {item.question}
                  </div>
                  <div className={styles.faqValue}>
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Calculator Section */}
          <section className={styles.entryActions}>
            <div className={styles.sectionHeader}>
              <h2>Стоимость цветной печати и копирования</h2>
            </div>

            <div className={styles.actionsTabs}>
              <button 
                className={`${styles.actionTab} ${activeTab === 'calc' ? styles.active : ''}`}
                onClick={() => setActiveTab('calc')}
              >
                Расчёт стоимости
              </button>
              <button 
                className={`${styles.actionTab} ${activeTab === 'table' ? styles.active : ''}`}
                onClick={() => setActiveTab('table')}
              >
                Таблица цен
              </button>
              <button 
                className={`${styles.actionTab} ${activeTab === 'order' ? styles.active : ''}`}
                onClick={() => setActiveTab('order')}
              >
                Быстрый заказ
              </button>
            </div>

            <div className={styles.actionsContainers}>
              {/* Calculator */}
              {activeTab === 'calc' && (
                <div className={styles.actionContainer}>
                  {alertMessage.message && (
                    <div className={`${styles.alert} ${styles[alertMessage.type]} ${styles.show}`}>
                      {alertMessage.message}
                    </div>
                  )}
                  <form className={styles.calculatorForm} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.formGroup}>
                      <label>Количество</label>
                      <input 
                        type="number" 
                        min="1" 
                        max="99999" 
                        value={formData.quantity}
                        onChange={(e) => setFormData(prev => ({ ...prev, quantity: parseInt(e.target.value) || 1 }))}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Формат</label>
                      <div className={styles.radioGroup}>
                        {['Евро (210×98мм)', 'A7', 'A6', 'A5', 'A4', 'A3', 'Свой размер'].map(format => (
                          <button
                            key={format}
                            type="button"
                            className={`${styles.radioButton} ${formData.format === format ? styles.selected : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, format }))}
                          >
                            {format}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Тип печати</label>
                      <div className={styles.radioGroup}>
                        {['Односторонняя', 'Двусторонняя'].map(type => (
                          <button
                            key={type}
                            type="button"
                            className={`${styles.radioButton} ${formData.printType === type ? styles.selected : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, printType: type }))}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Цветность</label>
                      <div className={styles.radioGroup}>
                        {['Полноцветная', 'Черно-белая'].map(color => (
                          <button
                            key={color}
                            type="button"
                            className={`${styles.radioButton} ${formData.colorType === color ? styles.selected : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, colorType: color }))}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Бумага</label>
                      <div className={styles.radioGroup}>
                        {['Матовая мелованная', 'Глянцевая мелованная', 'Немелованная бумага ColorCopy', 'Немелованная бумага WoodFree', 'Офсетная', 'Дизайнерская'].map(paper => (
                          <button
                            key={paper}
                            type="button"
                            className={`${styles.radioButton} ${formData.paperType === paper ? styles.selected : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, paperType: paper }))}
                          >
                            {paper}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Плотность</label>
                      <div className={styles.radioGroup}>
                        {['Тонкая (80 г/м²)', 'Тонкая (120 г/м²)', 'Средняя (160 г/м²)'].map(density => (
                          <button
                            key={density}
                            type="button"
                            className={`${styles.radioButton} ${formData.density === density ? styles.selected : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, density }))}
                          >
                            {density}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Ламинация</label>
                      <div className={styles.radioGroup}>
                        {['Нет', 'Soft Touch', 'Матовая', 'Глянцевая', 'Песок', 'Anti Scuff'].map(lamination => (
                          <button
                            key={lamination}
                            type="button"
                            className={`${styles.radioButton} ${formData.lamination === lamination ? styles.selected : ''}`}
                            onClick={() => setFormData(prev => ({ ...prev, lamination }))}
                          >
                            {lamination}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Загрузите ваши файлы</label>
                      <div 
                        className={styles.fileUpload}
                        onClick={() => document.getElementById('fileInput')?.click()}
                      >
                        <input 
                          type="file" 
                          id="fileInput"
                          accept=".png,.jpg,.jpeg,.pdf,.psd,.ai,.cdr,.zip,.rar,.7z,.indd,.eps,.docx"
                          multiple
                          onChange={(e) => handleFileUpload(e.target.files, 'calc')}
                          style={{ display: 'none' }}
                        />
                        <p>📁 Перетащите файлы сюда или <strong>Выберите файлы</strong></p>
                        <p style={{ fontSize: '12px', color: '#999' }}>Размер файла не должен превышать 50 МБ</p>
                      </div>
                      <div className={styles.fileList}>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className={styles.fileItem}>
                            <span>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} МБ)</span>
                            <button type="button" onClick={() => removeFile(file.name, 'calc')}>Удалить</button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="comments">Комментарии к услуге:</label>
                      <textarea 
                        id="comments"
                        rows={3}
                        placeholder="Пожелания по выполнению этой услуги, ссылки на файлы на файлообменниках."
                        value={formData.comments}
                        onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                      />
                    </div>

                    <div className={styles.priceDisplay}>
                      <div className={styles.label}>Стоимость за штуку: <span>{price.unitPrice} ₽</span></div>
                      <div className={styles.label}>Общая стоимость:</div>
                      <div className={styles.price}>{price.totalPrice} ₽</div>
                    </div>

                    <button 
                      type="button" 
                      className={styles.submitButton}
                      onClick={() => setShowModal(true)}
                    >
                      Сделать заказ
                    </button>
                  </form>
                </div>
              )}

              {/* Price Table */}
              {activeTab === 'table' && (
                <div className={styles.actionContainer}>
                  <table className={styles.tableee}>
                    <thead>
                      <tr>
                        <th>Тираж</th>
                        <th>Односторонняя A3</th>
                        <th>Двусторонняя A3</th>
                        <th>Односторонняя A4</th>
                        <th>Двусторонняя A4</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceTable.map((row, index) => (
                        <tr key={index}>
                          <th>{row.range}</th>
                          <td>{row.a3Single}</td>
                          <td>{row.a3Double}</td>
                          <td>{row.a4Single}</td>
                          <td>{row.a4Double}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <table className={styles.tableee}>
                    <caption>Стоимость наценки за бумагу</caption>
                    <thead>
                      <tr>
                        <th>Наименование</th>
                        <th>Цена за SRA3, ₽</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paperPrices.map((paper, index) => (
                        <tr key={index}>
                          <th>{paper.name}</th>
                          <td>{paper.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <button 
                      className={styles.ottiskButton}
                      onClick={() => setActiveTab('order')}
                    >
                      Оформить заказ
                    </button>
                  </div>
                </div>
              )}

              {/* Quick Order Form */}
              {activeTab === 'order' && (
                <div className={styles.actionContainer}>
                  {alertMessage.message && (
                    <div className={`${styles.alert} ${styles[alertMessage.type]} ${styles.show}`}>
                      {alertMessage.message}
                    </div>
                  )}
                  <form className={styles.calculatorForm} onSubmit={handleQuickOrder}>
                    <div className={styles.formGroup}>
                      <label>Ваше имя <span style={{ color: 'red' }}>*</span></label>
                      <input 
                        type="text" 
                        required
                        value={orderFormData.name}
                        onChange={(e) => setOrderFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Телефон <span style={{ color: 'red' }}>*</span></label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__" 
                        required
                        value={orderFormData.phone}
                        onChange={(e) => setOrderFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Ваш Email <span style={{ color: 'red' }}>*</span></label>
                      <input 
                        type="email" 
                        required
                        value={orderFormData.email}
                        onChange={(e) => setOrderFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label>Загрузите ваши файлы</label>
                      <div 
                        className={styles.fileUpload}
                        onClick={() => document.getElementById('orderFileInput')?.click()}
                      >
                        <input 
                          type="file" 
                          id="orderFileInput"
                          accept=".png,.jpg,.jpeg,.pdf,.psd,.ai,.cdr,.zip,.rar,.7z,.indd,.eps,.docx"
                          multiple
                          onChange={(e) => handleFileUpload(e.target.files, 'order')}
                          style={{ display: 'none' }}
                        />
                        <p>📁 Перетащите файлы сюда или <strong>Выберите файлы</strong></p>
                        <p style={{ fontSize: '12px', color: '#999' }}>Размер файла не должен превышать 50 МБ</p>
                      </div>
                      <div className={styles.fileList}>
                        {orderFiles.map((file, index) => (
                          <div key={index} className={styles.fileItem}>
                            <span>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} МБ)</span>
                            <button type="button" onClick={() => removeFile(file.name, 'order')}>Удалить</button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="order-comment">Комментарий к заказу</label>
                      <textarea 
                        id="order-comment"
                        rows={3}
                        value={orderFormData.comment}
                        onChange={(e) => setOrderFormData(prev => ({ ...prev, comment: e.target.value }))}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <p style={{ fontSize: '14px', color: '#666' }}>
                        Отправляя заказ, вы даете согласие на обработку данных в соответствии с{' '}
                        <Link href="/personal-data-privacy-policy" target="_blank">Политикой конфиденциальности</Link>{' '}
                        и <Link href="/offer" target="_blank">Договором Оферты</Link>
                      </p>
                    </div>

                    <button type="submit" className={styles.submitButton}>Отправить</button>
                  </form>
                </div>
              )}
            </div>
          </section>

          {/* Related Services */}
          <section className={styles.related}>
            <div className={styles.sectionHeader}>
              <h2>Вас также могут заинтересовать</h2>
            </div>
            <div className={styles.relatedContainer}>
              <Link href="/business-cards" className={styles.relatedService}>
                <div className={styles.relatedThumbnail} style={{ backgroundImage: 'url(https://static.printcore.by/content/business_card_core.png)' }}></div>
                <span>Визитные карточки</span>
              </Link>
              <Link href="/brochures" className={styles.relatedService}>
                <div className={styles.relatedThumbnail} style={{ backgroundImage: 'url(https://static.printcore.by/content/broshures_core.png)' }}></div>
                <span>Брошюры</span>
              </Link>
              <Link href="/stikers" className={styles.relatedService}>
                <div className={styles.relatedThumbnail} style={{ backgroundImage: 'url(https://static.printcore.by/content/stiker_core.png)' }}></div>
                <span>Стикеры</span>
              </Link>
              <Link href="/menu_order" className={styles.relatedService}>
                <div className={styles.relatedThumbnail} style={{ backgroundImage: 'url(https://static.printcore.by/content/menu_core.png)' }}></div>
                <span>Меню</span>
              </Link>
            </div>
          </section>

          {/* Back Button */}
          <div className={styles.backButtonWrapper}>
            <Link href="/services" className={styles.backBtn}>
              <span>←</span> Назад к услугам
            </Link>
          </div>
        </div>
      </div>

      {/* Modal Window */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.modalClose} onClick={() => setShowModal(false)}>&times;</button>
            <div className={styles.modalHeader}>
              <h2>Оформление заказа</h2>
              <p>Заполните данные для отправки заказа</p>
            </div>
            <form className={styles.modalForm} onSubmit={handleSubmitOrder}>
              <div className={styles.formGroup}>
                <label>Ваше имя <span style={{ color: 'red' }}>*</span></label>
                <input 
                  type="text" 
                  required 
                  placeholder="Введите ваше имя"
                  value={modalFormData.name}
                  onChange={(e) => setModalFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Email <span style={{ color: 'red' }}>*</span></label>
                <input 
                  type="email" 
                  required 
                  placeholder="example@mail.com"
                  value={modalFormData.email}
                  onChange={(e) => setModalFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Телефон</label>
                <input 
                  type="tel" 
                  placeholder="+375 (__)  ___-__-__"
                  value={modalFormData.phone}
                  onChange={(e) => setModalFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <button type="submit" className={styles.submitButton}>Отправить заказ</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
