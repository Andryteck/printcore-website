import styles from '@/styles/components/PhoneLink.module.css';

interface PhoneLinkProps {
  className?: string;
}

export default function PhoneLink({ className }: PhoneLinkProps) {
  const phoneNumber = '+375 33 336 5678';
  const phoneNumberClean = '+375333365678';
  
  return (
    <>
      {/* Мобильная версия - звонок */}
      <a 
        href={`tel:${phoneNumberClean}`}
        className={`${styles.phoneLinkMobile} ${className || ''}`}
      >
        {phoneNumber}
      </a>
      
      {/* Десктопная версия - Telegram */}
      <a 
        href={`https://t.me/${phoneNumberClean}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.phoneLinkDesktop} ${className || ''}`}
      >
        {phoneNumber}
      </a>
    </>
  );
}


