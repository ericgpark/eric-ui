import React from 'react';
import { BaseText } from '../BaseText/BaseText';
import { BaseButton } from '../BaseButton/BaseButton';
import BaseIcon from '../BaseIcon/BaseIcon';
import './Toast.css';

export interface ToastProps {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  onClose?: () => void;
}

export const Toast = ({ type, message, onClose }: ToastProps) => {
  return (
    <div className={`toast toast-${type}`}>
      <BaseText type="body">
        {message}
      </BaseText>

      {onClose && (
        <BaseButton
          variant="tertiary"
          onClick={onClose}
        >
          <BaseIcon name="close" />
        </BaseButton>
      )}
    </div>
  );
};
