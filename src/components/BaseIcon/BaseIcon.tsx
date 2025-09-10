import React from 'react';

export interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  children: React.ReactNode;
  title?: string;
}

export const BaseIcon: React.FC<BaseIconProps> = ({
  size = 24,
  color = 'currentColor',
  children,
  title,
  ...rest
}) => (
  <svg
    width={size}
    height={size}
    fill={color}
    aria-label={title}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    {title ? <title>{title}</title> : null}
    {children}
  </svg>
);

export default BaseIcon;
