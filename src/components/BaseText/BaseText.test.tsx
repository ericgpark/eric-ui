import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BaseText from './BaseText';

describe('BaseText', () => {
  it('renders children', () => {
    render(<BaseText type="body">Hello World</BaseText>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies bold style', () => {
    render(<BaseText type="body" bold>Bold Text</BaseText>);
    const el = screen.getByText('Bold Text');
    expect(el).toHaveStyle('font-weight: bold');
  });

  it('applies italic style', () => {
    render(<BaseText type="body" italic>Italic Text</BaseText>);
    const el = screen.getByText('Italic Text');
    expect(el).toHaveStyle('font-style: italic');
  });

  it('applies underline style', () => {
    render(<BaseText type="body" underline>Underline Text</BaseText>);
    const el = screen.getByText('Underline Text');
    expect(el).toHaveStyle('text-decoration: underline');
  });

  it('applies highlight style', () => {
    render(<BaseText type="body" highlight>Highlight Text</BaseText>);
    const el = screen.getByText('Highlight Text');
    expect(el).toHaveStyle('background-color: yellow');
  });

  it('applies type styles', () => {
    render(<BaseText type="heading">Heading</BaseText>);
    const el = screen.getByText('Heading');
    expect(el).toHaveStyle('font-size: 2rem');
  });

  it('applies size override', () => {
    render(<BaseText type="body" size="xl">XL Text</BaseText>);
    const el = screen.getByText('XL Text');
    expect(el).toHaveStyle('font-size: 2rem');
  });

  it('renders with correct tag', () => {
    render(<BaseText type="body" tag="span">Span Text</BaseText>);
    const el = screen.getByText('Span Text');
    expect(el.tagName.toLowerCase()).toBe('span');
  });
});
