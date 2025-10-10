import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Toast } from './Toast';

describe('Toast', () => {
  it('renders message', () => {
    render(<Toast message="This is a toast message" />);
    expect(screen.getByText('This is a toast message')).toBeInTheDocument();
  });

  it('applies success type styles', () => {
    render(<Toast message="Success!" type="success" />);
    const toast = screen.getByText('Success!').parentElement;
    expect(toast).toHaveClass('toast success');
    expect(toast).toHaveStyle('background-color: var(--color-success)');
  });

  it('applies error type styles', () => {
    render(<Toast message="Error!" type="error" />);
    const toast = screen.getByText('Error!').parentElement;
    expect(toast).toHaveClass('toast error');
    expect(toast).toHaveStyle('background-color: var(--color-error)');
  });

  it('applies info type styles', () => {
    render(<Toast message="Info!" type="info" />);
    const toast = screen.getByText('Info!').parentElement;
    expect(toast).toHaveClass('toast info');
    expect(toast).toHaveStyle('background-color: var(--color-info)');
  });

  it('applies warning type styles', () => {
    render(<Toast message="Warning!" type="warning" />);
    const toast = screen.getByText('Warning!').parentElement;
    expect(toast).toHaveClass('toast warning');
    expect(toast).toHaveStyle('background-color: var(--color-warning)');
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Toast message="Closable" onClose={onClose} />);
    const closeButton = screen.getByRole('button');
    closeButton.click();
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
