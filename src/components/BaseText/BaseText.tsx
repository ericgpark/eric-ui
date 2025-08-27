

interface BaseButtonProps {
  type: 'heading' | 'subheading' | 'body' | 'caption';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  highlight?: boolean;
  children: any;
}

const BaseText = ({ type, tag = 'p', bold = false, italic = false, underline = false, highlight = false, children }: BaseButtonProps) => {
  const TextTag = tag;

  return (
    <>
      <TextTag
        style={{
          fontWeight: bold ? 'bold' : undefined,
          fontStyle: italic ? 'italic' : undefined,
          textDecoration: underline ? 'underline' : undefined,
          backgroundColor: highlight ? 'yellow' : undefined,
        }}
      >
        {children}
      </TextTag>
    </>
  );
};

export default BaseText as React.FC<BaseButtonProps>;
