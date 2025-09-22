import React from 'react';

type IconName = keyof typeof ICONS;

export interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  color?: string;
  title?: string;
}

const ICONS: Record<string, React.ReactNode> = {
  close: 'close.svg',
  star: 'star.svg',
  user: 'user.svg',
  settings: 'settings.svg',
  info: 'info.svg',
  check: 'check.svg',
  question: 'question.svg',
  exclamation: 'exclamation.svg',
};
export const BaseIcon: React.FC<BaseIconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  title,
  ...rest
}) => {
  const icon = ICONS[name];

  // If the icon is a string, treat it as an image src (e.g., external SVG file)
  if (typeof icon === 'string') {
    return (
      <img
        src={icon}
        width={size}
        height={size}
        alt={title || name}
        {...rest}
      />
    );
  }

  // Otherwise, render as SVG
  return (
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
      {icon}
    </svg>
  );
};

export default BaseIcon;
