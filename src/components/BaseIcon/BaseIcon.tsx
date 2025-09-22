import React from 'react';

type IconName = keyof typeof ICONS;

export interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  color?: string;
  title?: string;
}

const ICONS: Record<string, React.ReactNode> = {
  close: <path d="M19.293 4.293a1 1 0 00-1.414 0L12 10.586 6.121 4.707a1 1 0 00-1.415 1.415L10.586 12l-5.88 5.879a1 1 0 001.415 1.415L12 13.414l5.879 5.879a1 1 0 001.415-1.415L13.414 12l5.879-5.879a1 1 0 000-1.414z" />,
  star: <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />,
  user: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />,
  settings: <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.11-.2-.35-.28-.57-.22l-2.39.96c-.5-.38-1.03-.7-1.61-.94l-.36-2.54A.488.488 0 0014 3h-4c-.24 0-.45.17-.49.41l-.36 2.54c-.58.24-1.11.56-1.61.94l-2.39-.96c-.22-.09-.46 0-.57.22l-1.92 3.32c-.11.2-.06.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.11.2.35.28.57.22l2.39-.96c.5.38 1.03.7 1.61.94l.36 2.54c.04.24.25.41.49.41h4c.24 0 .45-.17.49-.41l.36-2.54c.58-.24 1.11-.56 1.61-.94l2.39.96c.22.09.46 0 .57-.22l1.92-3.32c.11-.2.06-.47-.12-.61l-2.03-1.58z" />,
  info: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15h-1v-6h1v6zm0-8h-1V7h1v2z" />,
  check_circle: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />,
  question: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 13.9 12 14.5 12 16h-2v-.5c0-1 .45-1.99 1.17-2.71l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />,
  exclamation: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15h-1v-1h1v1zm0-2h-1V7h1v8z" />,
};
export const BaseIcon: React.FC<BaseIconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
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
    {ICONS[name] || null}
  </svg>
);

export default BaseIcon;
