import { defaultFonts } from '../../theme/fonts';

type BaseTextType = 'heading' | 'subheading' | 'body' | 'caption';
type BaseTextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BaseTextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface BaseTextProps {
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
    fontSize: '2rem',
  },
  subheading: {
    fontSize: '1.5rem',
  },
  body: {
    fontSize: '1rem',
  },
  caption: {
    fontSize: '0.875rem',
  },
};

const sizeStyles: Record<string, TextStyle> = {
  xs: {
    fontSize: '0.875rem',
  },
  sm: {
    fontSize: '1rem',
  },
  md: {
    fontSize: '1.125rem',
  },
  lg: {
    fontSize: '1.5rem',
  },
  xl: {
    fontSize: '2rem',
  }
};

const BaseText = ({ type, size, tag = 'p', bold = false, italic = false, underline = false, highlight = false, children }: BaseTextProps) => {
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

export default BaseText as React.FC<BaseTextProps>;
