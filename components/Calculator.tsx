'use client';

import { useState } from 'react';
import { Service } from '@/lib/features/services/servicesSlice';
import styles from '@/styles/components/Calculator.module.css';

interface CalculatorProps {
  service: Service;
}

interface PriceOption {
  quantity: number;
  price: number;
  pricePerUnit: number;
}

export default function Calculator({ service }: CalculatorProps) {
  const [printType, setPrintType] = useState<'one-side' | 'two-side'>('one-side');
  const [selectedQuantity, setSelectedQuantity] = useState(250);
  const [designOption, setDesignOption] = useState<'template' | 'constructor' | 'upload'>('template');
  const [designFromScratch, setDesignFromScratch] = useState(false);
  const [designWishes, setDesignWishes] = useState('');
  const [showAllPrices, setShowAllPrices] = useState(false);

  const priceOptions: PriceOption[] = [
    { quantity: 250, price: 845, pricePerUnit: 3.38 },
    { quantity: 500, price: 940, pricePerUnit: 1.88 },
    { quantity: 1000, price: 1090, pricePerUnit: 1.09 },
    { quantity: 2000, price: 2100, pricePerUnit: 1.05 },
    { quantity: 3000, price: 3090, pricePerUnit: 1.03 },
    { quantity: 5000, price: 5100, pricePerUnit: 1.02 },
  ];

  const selectedPrice = priceOptions.find(p => p.quantity === selectedQuantity);
  const totalPrice = selectedPrice ? selectedPrice.price : 0;
  const bonusPoints = (totalPrice * 0.05).toFixed(2);
  const designPrice = designFromScratch ? 500 : 0;
  const finalPrice = totalPrice + designPrice + (printType === 'two-side' ? 200 : 0);

  const visiblePrices = showAllPrices ? priceOptions : priceOptions.slice(0, 5);

  const handleAddToCart = () => {
    alert(`Добавлено в корзину!\n\nУслуга: ${service.title}\nТираж: ${selectedQuantity} шт.\nПечать: ${printType === 'one-side' ? 'односторонняя' : 'двусторонняя'}\nИтого: ${finalPrice} руб.`);
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.header}>
        <h2>Рассчитайте стоимость и оформите заказ</h2>
      </div>

      {/* Step 1: Print Options */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <span className={styles.stepNumber}>1</span>
          <h3>Выберите опции печати</h3>
        </div>

        <div className={styles.printOptions}>
          <label className={`${styles.optionCard} ${printType === 'one-side' ? styles.selected : ''}`}>
            <input
              type="radio"
              name="printType"
              value="one-side"
              checked={printType === 'one-side'}
              onChange={() => setPrintType('one-side')}
            />
            <div className={styles.optionIcon}>
              <img src="https://static.wow2print.com/storage/2177/store/productModule/89658727863eb610a4bedf5.84158351.png" alt="1-сторонняя" />
            </div>
            <div className={styles.optionLabel}>1-сторонняя цветная печать</div>
          </label>

          <label className={`${styles.optionCard} ${printType === 'two-side' ? styles.selected : ''}`}>
            <input
              type="radio"
              name="printType"
              value="two-side"
              checked={printType === 'two-side'}
              onChange={() => setPrintType('two-side')}
            />
            <div className={styles.optionIcon}>
              <img src="https://static.wow2print.com/storage/2177/store/productModule/124914042763eb60e66c9e32.99976629.png" alt="2-сторонняя" />
            </div>
            <div className={styles.optionLabel}>2-сторонняя цветная печать</div>
          </label>
        </div>
      </div>

      {/* Step 2: Quantity */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <span className={styles.stepNumber}>2</span>
          <h3>Выберите тираж</h3>
        </div>

        <div className={styles.alert}>
          Чем больше тираж, тем выгоднее цена за шт.
        </div>

        <div className={styles.priceGrid}>
          <div className={styles.gridHeader}>
            <div>Тираж (шт)</div>
            <div>Срок изгот. 27.10.25</div>
          </div>
          
          {visiblePrices.map((option) => (
            <div
              key={option.quantity}
              className={`${styles.priceRow} ${selectedQuantity === option.quantity ? styles.selected : ''}`}
              onClick={() => setSelectedQuantity(option.quantity)}
            >
              <div className={styles.quantity}>
                {option.quantity.toLocaleString('ru-RU')}
              </div>
              <div className={styles.priceBlock}>
                <div className={styles.totalPrice}>
                  {option.price.toFixed(2)} ₽
                </div>
                <div className={styles.unitPrice}>
                  {option.pricePerUnit.toFixed(2)} ₽ за шт.
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className={styles.showAllBtn}
          onClick={() => setShowAllPrices(!showAllPrices)}
        >
          {showAllPrices ? 'Свернуть' : 'Развернуть все цены'}
        </button>
      </div>

      {/* Step 3: Design Options */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <span className={styles.stepNumber}>3</span>
          <h3>Опции дизайна</h3>
        </div>

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={designFromScratch}
            onChange={(e) => setDesignFromScratch(e.target.checked)}
          />
          <span>Разработка дизайна с нуля</span>
          <span className={styles.priceTag}>(от +500.00 ₽)</span>
        </label>

        {designFromScratch && (
          <>
            <div className={styles.textarea}>
              <label>НАПИШИТЕ СВОИ ПОЖЕЛАНИЯ ПО ДИЗАЙНУ, МЫ ОБЯЗАТЕЛЬНО ИХ УЧТЁМ</label>
              <textarea
                value={designWishes}
                onChange={(e) => setDesignWishes(e.target.value)}
                placeholder="Опишите ваши пожелания..."
                maxLength={255}
              />
            </div>

            <div className={styles.fileUpload}>
              <label>ЗАГРУЗИТЕ ПРИМЕР ЖЕЛАЕМОГО ДИЗАЙНА</label>
              <button className={styles.uploadBtn}>Загрузить</button>
              <p className={styles.fileInfo}>Допустимые форматы: PDF, PNG, JPG, JPEG, PSD, GIF, CDR, AI</p>
            </div>
          </>
        )}
      </div>

      {/* Design Selection */}
      <div className={styles.section}>
        <h3 className={styles.designTitle}>Дизайн</h3>
        <div className={styles.designOptions}>
          <label className={`${styles.designCard} ${designOption === 'template' ? styles.active : ''}`}>
            <input
              type="radio"
              name="designOption"
              value="template"
              checked={designOption === 'template'}
              onChange={() => setDesignOption('template')}
            />
            <div className={styles.designIcon} style={{ backgroundColor: '#E2F6E8' }}>📋</div>
            <div>
              <div className={styles.designCardTitle}>Готовый дизайн</div>
              <div className={styles.designCardDesc}>Выберите вариант из шаблонов</div>
            </div>
          </label>

          <label className={`${styles.designCard} ${designOption === 'constructor' ? styles.active : ''}`}>
            <input
              type="radio"
              name="designOption"
              value="constructor"
              checked={designOption === 'constructor'}
              onChange={() => setDesignOption('constructor')}
            />
            <div className={styles.designIcon} style={{ backgroundColor: '#FEEBC8' }}>🎨</div>
            <div>
              <div className={styles.designCardTitle}>Создать с нуля</div>
              <div className={styles.designCardDesc}>Конструктор поможет вам сделать все что вы хотите</div>
            </div>
          </label>

          <label className={`${styles.designCard} ${designOption === 'upload' ? styles.active : ''}`}>
            <input
              type="radio"
              name="designOption"
              value="upload"
              checked={designOption === 'upload'}
              onChange={() => setDesignOption('upload')}
            />
            <div className={styles.designIcon} style={{ backgroundColor: '#DBF0FC' }}>📤</div>
            <div>
              <div className={styles.designCardTitle}>Свой макет</div>
              <div className={styles.designCardDesc}>Выберите файл с компьютера и загрузите его</div>
            </div>
          </label>
        </div>
      </div>

      {/* Summary */}
      <div className={styles.summary}>
        <h3>Итог</h3>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryPrice}>
            <div className={styles.finalPrice}>{finalPrice.toFixed(2)} ₽</div>
            <div className={styles.bonusInfo}>
              Вы получите <strong>{bonusPoints}</strong> бонусов
            </div>
          </div>

          <div className={styles.summaryDetails}>
            <div className={styles.productName}>{service.title}</div>
            <div className={styles.productQty}>{selectedQuantity} шт.</div>
            <div className={styles.productParams}>
              {printType === 'one-side' ? '1-сторонняя' : '2-сторонняя'} цветная печать.
            </div>
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className={styles.actions}>
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          {designOption === 'template' ? 'Выбрать дизайн' : 
           designOption === 'constructor' ? 'Создать в конструкторе' : 
           'Загрузить макет'}
        </button>
      </div>
    </div>
  );
}

