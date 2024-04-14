import TopNavLinkButton from '@/components/TopNav/TopNav.linkButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Nav/TopNav/TopNavLinkButton',
  component: TopNavLinkButton,
  parameters: {
    layout: 'centered',
    control: {
      include: ['href', 'icon', 'fill', 'size', 'disabled'],
    },
  },
  tags: ['autodocs'],
  args: {
    href: '/',
    icon: 'icon_basket_outline',
    size: 'lg',
    disabled: false,
    fill: 'text_01',
  },
  argTypes: {},
} satisfies Meta<typeof TopNavLinkButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
