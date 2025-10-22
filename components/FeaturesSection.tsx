import Image from 'next/image';
import styles from '@/styles/components/FeaturesSection.module.css';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/images/features/calculator.png',
      title: 'Онлайн-калькулятор',
      description: 'Узнайте стоимость печати в онлайн-калькуляторе здесь и сейчас.',
      alt: 'Онлайн-калькулятор'
    },
    {
      icon: '/images/features/order-247.png',
      title: 'Заказывайте 24/7',
      description: 'Размещайте свои заказы в 2 клика в удобное для вас время.',
      alt: 'Заказывайте 24/7'
    },
    {
      icon: '/images/features/design.png',
      title: 'Нет макета?',
      description: 'Создайте макет с помощью наших профессиональных дизайнеров и сразу отправьте в печать.',
      alt: 'Нет макета?'
    },
    {
      icon: '/images/features/delivery.png',
      title: 'Отправим в ваш город',
      description: 'Доставим прямо в офис или домой. Выбирайте: БелПочта, Европочта, CDEK, Яндекс и др.',
      alt: 'Отправим в ваш город'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  title={feature.title}
                  width={120}
                  height={120}
                  className={styles.icon}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

