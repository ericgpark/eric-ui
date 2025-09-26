
import { Meta, StoryObj } from '@storybook/react';
import { BaseCard, BaseCardProps } from './BaseCard';
import { BaseText } from '../BaseText/BaseText';

const meta: Meta<BaseCardProps> = {
  title: 'Components/BaseCard',
  component: BaseCard,
  argTypes: {
    heading: { control: 'text' },
    subheading: { control: 'text' },
    footer: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<BaseCardProps>;

export const Default: Story = {
  args: {
    heading: 'Header',
    subheading: 'This is the header section',
    footer: 'This is the footer section',
    children: <BaseText type="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, lectus facilisis commodo pretium, sapien nisl pellentesque justo, eu tristique lorem felis porta magna. Duis orci augue, porta et venenatis at, semper in metus. Etiam arcu ipsum, vehicula vel risus vitae, facilisis ultrices leo. Fusce at orci dictum, facilisis orci sit amet, condimentum sapien. Vivamus ut est gravida, rhoncus ante ornare, mollis felis. Curabitur a lorem pellentesque, dapibus erat sit amet, porttitor felis. Donec bibendum velit nulla, eu imperdiet tellus consequat nec. Vestibulum a posuere nibh. Pellentesque eleifend ipsum et ipsum tempus vestibulum. Curabitur eu nisi orci.</BaseText>
  }
};
