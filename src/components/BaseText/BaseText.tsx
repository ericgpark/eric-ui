import { defaultFonts } from '../../theme/fonts';

type BaseTextType = 'heading' | 'subheading' | 'body' | 'caption';
type BaseTextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BaseTextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export interface BaseTextProps {
  type: BaseTextType;
  size?: BaseTextSize;
  tag?: BaseTextTag;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  highlight?: boolean;
  children: any;
}

interface TextStyle {
  fontSize: string;
  fontWeight?: string;
}

const typeStyles: Record<string, TextStyle> = {
  heading: {
    fontSize: 'var(--text-size-500)',
  },
  subheading: {
    fontSize: 'var(--text-size-400)',
  },
  body: {
    fontSize: 'var(--text-size-200)',
  },
  caption: {
    fontSize: 'var(--text-size-100)',
  },
};

const sizeStyles: Record<string, TextStyle> = {
  xs: {
    fontSize: 'var(--text-size-100)',
  },
  sm: {
    fontSize: 'var(--text-size-200)',
  },
  md: {
    fontSize: 'var(--text-size-300)',
  },
  lg: {
    fontSize: 'var(--text-size-400)',
  },
  xl: {
    fontSize: 'var(--text-size-500)',
  }
};

export const BaseText: React.FC<BaseTextProps> = ({ type, size, tag = 'p', bold = false, italic = false, underline = false, highlight = false, children }: BaseTextProps) => {
  const TextTag = tag;

  return (
    <>
      <TextTag
        style={{
          fontFamily: defaultFonts[type ?? 'body'],
          margin: 0,
          fontWeight: bold ? 'bold' : undefined,
          fontStyle: italic ? 'italic' : undefined,
          textDecoration: underline ? 'underline' : undefined,
          backgroundColor: highlight ? 'yellow' : undefined,
          ...typeStyles[type],
          ...(size ? sizeStyles[size] : {}),
        }}
      >
        {children}
      </TextTag>
    </>
  );
};
