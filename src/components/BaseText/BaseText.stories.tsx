import type { Meta, StoryObj } from '@storybook/react';
import BaseText from './BaseText';

const meta: Meta<typeof BaseText> = {
  title: 'Components/BaseText',
  component: BaseText,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['heading', 'subheading', 'body', 'caption'],
      description: 'The type of text to render.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the text.',
    },
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      description: 'The HTML tag to use for the text.',
    },
    bold: { control: 'boolean', description: 'Whether to render the text in bold.' },
    italic: { control: 'boolean', description: 'Whether to render the text in italic.' },
    underline: { control: 'boolean', description: 'Whether to render the text with underline.' },
    highlight: { control: 'boolean', description: 'Whether to highlight the text.' },
    children: { control: 'text', description: 'The content of the text.' },
  },
};

export default meta;
type Story = StoryObj<typeof BaseText>;

export const Heading: Story = {
  args: {
    type: 'heading',
    tag: 'h1',
    children: 'Heading Text',
  },
};

export const Subheading: Story = {
  args: {
    type: 'subheading',
    tag: 'h2',
    children: 'Subheading Text',
  },
};

export const Body: Story = {
  args: {
    type: 'body',
    tag: 'p',
    children: 'Body Text',
  },
};

export const Caption: Story = {
  args: {
    type: 'caption',
    tag: 'span',
    children: 'Caption Text',
  },
};
