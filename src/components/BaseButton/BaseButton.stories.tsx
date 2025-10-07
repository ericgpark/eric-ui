import { Meta, StoryObj } from '@storybook/react';
import { BaseButton, BaseButtonProps } from './BaseButton';

const meta: Meta<BaseButtonProps> = {
  title: 'Components/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'The copy of the button.' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'inline'],
      description: 'The styling variant of the button.',
    },
    size: {
      control: 'select',
      options: [
        'sm',
        'md',
        'lg'
      ],
      description: 'The size of the button.',
    },
    disabled: { control: 'boolean', description: 'Whether the button is disabled.' },
    onClick: { action: 'clicked', description: 'Callback function to handle click events.' },
  },
};

export default meta;

type Story = StoryObj<BaseButtonProps>;

export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Click Me',
    variant: 'secondary',
    disabled: false,
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Click Me',
    variant: 'tertiary',
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    children: 'Click Me',
    variant: 'danger',
    disabled: false,
  },
};

export const Inline: Story = {
  args: {
    children: 'Click Me',
    variant: 'inline',
    disabled: false,
  }
};
