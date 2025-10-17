'use client';

import Link from 'next/link';
import { Service } from '@/lib/features/services/servicesSlice';
import styles from '@/styles/components/ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = () => {
    const icons: Record<string, string> = {
      digital: '🖨️',
      'wide-format': '📐',
      offset: '📰',
      uv: '☀️',
      'business-cards': '💼',
      design: '🎨',
    };
    return icons[service.category] || '📄';
  };

  return (
    <Link href={`/services/${service.category}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.icon}>{getIcon()}</div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.description}</p>

        <div className={styles.footer}>
          <span>
            Подробнее <span className={styles.arrow}>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

