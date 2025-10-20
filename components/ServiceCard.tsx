import Link from 'next/link';
import { Service } from '@/lib/features/services/servicesSlice';
import styles from '@/styles/components/ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
  badge?: string;
}

export default function ServiceCard({ service, badge }: ServiceCardProps) {
  const getIcon = () => {
    const icons: Record<string, string> = {
      photo: '📸',
      poligrafy: '📄',
      'wide-format': '📐',
      binding: '📚',
      design: '🎨',
      documents: '🖨️',
      stickers: '🏷️',
      souvenirs: '🎁',
    };
    return icons[service.category] || '📄';
  };

  return (
    <Link href={`/services/${service.category}`} className={styles.card}>
      {service.image ? (
        <img
          className={styles.image}
          src={service.image}
          alt={service.title}
        />
      ) : (
        <div className={styles.imageContainer}>
          <div className={styles.icon}>{getIcon()}</div>
        </div>
      )}
      
      {badge && (
        <div className={styles.badge}>{badge}</div>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{service.title}</h3>
        {service.description && (
          <p className={styles.description}>{service.description}</p>
        )}
        {service.price && (
          <div className={styles.price}>от {service.price} руб</div>
        )}
      </div>
    </Link>
  );
}

