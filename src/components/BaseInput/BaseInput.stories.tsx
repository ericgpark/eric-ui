import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BaseInput, BaseInputProps } from './BaseInput';

const meta: Meta<typeof BaseInput> = {
  title: 'Components/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'checkbox', 'radio', 'select'],
      description: 'Type of input element.'
    },
    label: { control: 'text', description: 'Label for the input.' },
    placeholder: { control: 'text', description: 'Placeholder text for text input.' },
    selected: { control: 'boolean', description: 'Checked/selected state for checkbox/radio.' },
    options: { control: 'object', description: 'Options for select input.' },
    handleChange: { action: 'changed', description: 'Change handler function.' },
  },
};

export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Text: Story = {
  args: {
    type: 'text',
    label: 'Text Input',
    placeholder: 'Enter text...',
    value: '',
    handleChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return <BaseInput {...args} value={value} handleChange={setValue} />;
  },
};

export const Checkbox: Story = {
  args: {
    type: 'checkbox',
    label: 'Checkbox',
    selected: false,
    handleChange: () => {},
  },
  render: (args) => {
    const [selected, setSelected] = useState(false);
    return <BaseInput {...args} selected={selected} handleChange={setSelected} />;
  },
};

export const Radio: Story = {
  args: {
    type: 'radio',
    label: 'Radio',
    selected: false,
    handleChange: () => {},
  },
  render: (args) => {
    const [selected, setSelected] = useState(false);
    return <BaseInput {...args} selected={selected} handleChange={setSelected} />;
  },
};

export const Select: Story = {
  args: {
    type: 'select',
    label: 'Select',
    options: [
      { name: 'Option 1', value: '1' },
      { name: 'Option 2', value: '2' },
    ],
    value: '',
    handleChange: () => {},
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return <BaseInput {...args} value={value} handleChange={setValue} />;
  },
};
