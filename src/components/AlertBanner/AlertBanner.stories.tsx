import type { Meta, StoryObj } from '@storybook/react';
import { AlertBanner, AlertBannerProps } from './AlertBanner';

const meta: Meta<typeof AlertBanner> = {
  title: 'Components/AlertBanner',
  component: AlertBanner,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'alert', 'warning', 'error'],
      description: 'Type of alert banner.'
    },
    heading: { control: 'text', description: 'Heading text for the alert.' },
    message: { control: 'text', description: 'Message body of the alert.' },
    isClosable: { control: 'boolean', description: 'Whether the alert can be closed.' },
    onClose: { action: 'closed', description: 'Callback when close button is clicked.' },
  },
};

export default meta;
type Story = StoryObj<typeof AlertBanner>;

export const Info: Story = {
  args: {
    type: 'info',
    heading: 'Info',
    message: 'This is an informational alert.',
    isClosable: true,
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    heading: 'Success',
    message: 'Your action was successful!',
    isClosable: true,
  },
};

export const Alert: Story = {
  args: {
    type: 'alert',
    heading: 'Alert',
    message: 'Please pay attention to this alert.',
    isClosable: true,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    heading: 'Error',
    message: 'An error has occurred.',
    isClosable: true,
  },
};
