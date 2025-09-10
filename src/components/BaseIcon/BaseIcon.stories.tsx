import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

const meta: Meta<BaseIconProps> = {
  title: 'Components/BaseIcon',
  component: BaseIcon,
  argTypes: {
    name: { control: 'text' },
    size: { control: 'number' },
    color: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<BaseIconProps>;

export const Default: Story = {
  args: {
    name: 'star',
    size: 24,
    color: '#333',
  },
};

export const Large: Story = {
  args: {
    name: 'star',
    size: 48,
    color: '#007bff',
  },
};

export const CustomColor: Story = {
  args: {
    name: 'star',
    size: 32,
    color: '#e91e63',
  },
};
