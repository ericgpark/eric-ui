export interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

interface BaseButtonStyles {
  border: string;
  'border-radius': string;
  backgroundColor: string;
  color: string;
  padding: string;
  opacity: number;
  cursor: string;
  fontWeight: string;
}

export const BaseButton: React.FC<BaseButtonProps> = ({ variant = 'primary', size = 'md', disabled = false, onClick, children }: BaseButtonProps) => {
  const styles: BaseButtonStyles = {
    'border-radius': '8px',
    border: 'none',
    backgroundColor: 'transparent',
    color: 'black',
    padding: '10px 16px',
    opacity: 1,
    cursor: 'pointer',
    fontWeight: '500',
  };

  switch(variant) {
    case 'primary':
      // Primary button styles
      styles.backgroundColor = 'var(--color-primary)';
      styles.color = 'var(--text-color-600)';
      break;
    case 'secondary':
      // Secondary button styles
      styles.backgroundColor = 'var(--color-secondary)';
      styles.color = 'var(--text-color-600)';
      break;
    case 'tertiary':
      // Tertiary button styles
      styles.backgroundColor = 'var(--color-tertiary)';
      styles.color = 'var(--text-color-100)';
      break;
    case 'danger':
      // Danger button styles
      styles.backgroundColor = 'var(--color-danger)';
      styles.color = 'var(--text-color-600)';
      styles.fontWeight = 'bold';
      break;
  }

  switch(size) {
    case 'sm':
      styles.padding = '8px 12px';
      break;
    case 'md':
      styles.padding = '10px 16px';
      break;
    case 'lg':
      styles.padding = '12px 20px';
      break;
  }

  if (disabled) {
    styles.opacity = 0.5;
    styles.cursor = 'not-allowed';
  }

  return (
    <button
      className={`base-button ${variant} ${size}`}
      style={styles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
