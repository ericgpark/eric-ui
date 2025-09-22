import React from 'react';
import { BaseText } from '../BaseText/BaseText';
import { BaseIcon } from '../BaseIcon/BaseIcon';
import './AlertBanner.css';

export interface AlertBannerProps {
  type: 'info' | 'success' | 'alert' | 'error';
  heading: string;
  message: string;
  isClosable: boolean;
  onClose?: () => void;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({
  type, heading, message, isClosable, onClose, ...children
}) => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 'var(--spacing-300)',
    backgroundColor: '',
    borderColor: '',
    textColor: '',
    borderRadius: '8px',
  }

  switch(type) {
    case 'info':
      styles.backgroundColor = 'var(--color-info-light)';
      styles.textColor = 'var(--text-color-100)';
      break;
    case 'success':
      styles.backgroundColor = 'var(--color-success-light)';
      styles.textColor = 'var(--text-color-100)';
      break;
    case 'alert':
      styles.backgroundColor = 'var(--color-alert-light)';
      styles.textColor = 'var(--text-color-100)';
      break;
    case 'error':
      styles.backgroundColor = 'var(--color-error-light)';
      styles.textColor = 'var(--text-color-100)';
      break;
  }

  const iconName = type === 'info' ? 'info' : type === 'success' ? 'check_circle' : type === 'alert' ? 'question' : 'exclamation';

  return (
    <div className="alert-banner" style={styles}>
      <div className="alert-banner__main">
        <BaseIcon name={iconName} size="24" color={styles.textColor} />
        <div className="alert-banner__content">
          <BaseText type="subheading" color={styles.textColor} bold>
            {heading}
          </BaseText>
          <BaseText type="body" color={styles.textColor}>
            {message}
          </BaseText>
        </div>
      </div>
      {isClosable && (
        <button className="alert-banner__close" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};
