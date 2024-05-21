import CartIcon from './CartIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/CartIcon',
  component: CartIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof CartIcon>;
export default meta;

type Story = StoryObj<typeof CartIcon>;

export const Primary: Story = {
  args: {},
};
