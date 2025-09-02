import { render, screen, fireEvent } from '@testing-library/react';
import { BaseButton } from './BaseButton';

describe('BaseButton', () => {
  it('renders children', () => {
    render(<BaseButton>Click Me</BaseButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies primary variant styles', () => {
    render(<BaseButton variant="primary">Primary</BaseButton>);
    const btn = screen.getByText('Primary');
    expect(btn).toHaveClass('base-button primary md');
    expect(btn).toHaveStyle('background-color: var(--color-primary)');
  });

  it('applies secondary variant styles', () => {
    render(<BaseButton variant="secondary">Secondary</BaseButton>);
    const btn = screen.getByText('Secondary');
    expect(btn).toHaveClass('base-button secondary md');
    expect(btn).toHaveStyle('background-color: var(--color-secondary)');
  });

  it('applies danger variant styles', () => {
    render(<BaseButton variant="danger">Danger</BaseButton>);
    const btn = screen.getByText('Danger');
    expect(btn).toHaveClass('base-button danger md');
    expect(btn).toHaveStyle('background-color: var(--color-danger)');
    expect(btn).toHaveStyle('font-weight: bold');
  });

  it('applies size styles', () => {
    render(<BaseButton size="lg">Large</BaseButton>);
    const btn = screen.getByText('Large');
    expect(btn).toHaveClass('base-button primary lg');
    expect(btn).toHaveStyle('padding: 12px 20px');
  });

  it('is disabled when disabled prop is true', () => {
    render(<BaseButton disabled>Disabled</BaseButton>);
    const btn = screen.getByText('Disabled');
    expect(btn).toBeDisabled();
    expect(btn).toHaveStyle('opacity: 0.5');
    expect(btn).toHaveStyle('cursor: not-allowed');
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<BaseButton onClick={handleClick}>Click</BaseButton>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
