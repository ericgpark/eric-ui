import { render, screen, fireEvent } from '@testing-library/react';
import { AlertBanner } from './AlertBanner';

describe('AlertBanner', () => {
  it('renders heading and message', () => {
    render(
      <AlertBanner
        type="info"
        heading="Test Heading"
        message="Test message body."
        isClosable={false}
      />
    );
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test message body.')).toBeInTheDocument();
  });

  it('renders the correct icon for each type', () => {
    const { rerender } = render(
      <AlertBanner type="info" heading="h" message="m" isClosable={false} />
    );
    expect(screen.getByLabelText(/info|check|question|exclamation/i)).toBeInTheDocument();
    rerender(<AlertBanner type="success" heading="h" message="m" isClosable={false} />);
    expect(screen.getByLabelText(/info|check|question|exclamation/i)).toBeInTheDocument();
    rerender(<AlertBanner type="alert" heading="h" message="m" isClosable={false} />);
    expect(screen.getByLabelText(/info|check|question|exclamation/i)).toBeInTheDocument();
    rerender(<AlertBanner type="error" heading="h" message="m" isClosable={false} />);
    expect(screen.getByLabelText(/info|check|question|exclamation/i)).toBeInTheDocument();
  });

  it('renders close button if isClosable is true', () => {
    render(
      <AlertBanner
        type="info"
        heading="h"
        message="m"
        isClosable={true}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('does not render close button if isClosable is false', () => {
    render(
      <AlertBanner
        type="info"
        heading="h"
        message="m"
        isClosable={false}
      />
    );
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <AlertBanner
        type="info"
        heading="h"
        message="m"
        isClosable={true}
        onClose={onClose}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
