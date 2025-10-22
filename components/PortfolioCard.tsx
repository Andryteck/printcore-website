'use client';

import Link from 'next/link';
import styles from '@/styles/components/PortfolioCard.module.css';

interface PortfolioCardProps {
  title: string;
  category: string;
  image?: string;
  icon?: string;
  description?: string;
  onClick?: () => void;
  link?: string;
}

export default function PortfolioCard({
  title,
  category,
  image,
  icon,
  description,
  onClick,
  link
}: PortfolioCardProps) {
  const content = (
    <>
      <div className={styles.imageContainer}>
        {image ? (
          <>
            <img
              className={styles.image}
              src={image}
              alt={title}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <div className={styles.badge}>{category}</div>
                <h3 className={styles.title}>{title}</h3>
                {description && (
                  <p className={styles.description}>{description}</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.icon}>{icon || '📄'}</div>
        )}
      </div>

      {!image && (
        <div className={styles.content}>
          <div className={styles.badge}>{category}</div>
          <h3 className={styles.title}>{title}</h3>
          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <Link href={link} className={styles.card}>
        {content}
      </Link>
    );
  }

  return (
    <div className={styles.card} onClick={onClick}>
      {content}
    </div>
  );
}

