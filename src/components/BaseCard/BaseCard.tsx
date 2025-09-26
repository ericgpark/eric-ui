import React from 'react';
import { BaseText } from '../BaseText/BaseText';

export interface BaseCardProps {
  heading: string;
  subheading: string;
  footer: string;
  children: any;
}

export const BaseCard: React.FC<BaseCardProps> = ({ heading, subheading, footer, children }) => {
  return (
    <div className="base-card">
      <div className="base-card__header">
        <BaseText type="heading">{heading}</BaseText>
        <BaseText type="subheading">{subheading}</BaseText>
      </div>

      <div className="base-card__content">
        {children}
      </div>

      <div className="base-card__footer">
        <BaseText type="caption">
          {footer}
        </BaseText>
      </div>
    </div>
  );
};
