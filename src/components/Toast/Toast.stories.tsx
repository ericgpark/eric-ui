import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProps } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
      description: 'Type of toast notification.'
    },
    message: { control: 'text', description: 'Message to display in the toast.' },
    onClose: { action: 'closed', description: 'Callback when the close button is clicked.' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Operation completed successfully!',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'This is an informational message.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'This is a warning message.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'An error occurred.',
  },
};

