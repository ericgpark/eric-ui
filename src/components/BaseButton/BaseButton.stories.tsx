import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BaseButton, BaseButtonProps } from './BaseButton';

const meta: Meta<BaseButtonProps> = {
  title: 'Components/BaseButton',
  component: BaseButton,
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    size: {
      control: 'select',
      options: [
        'sm',
        'md',
        'lg'
      ]
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
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
    children: 'Disabled',
    variant: 'primary',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    disabled: false,
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    variant: 'tertiary',
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
    disabled: false,
  },
};
