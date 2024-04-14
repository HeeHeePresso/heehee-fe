import BottomNavButton from '@/components/BottomNav/BottomNav.button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Nav/BottomNav/BottomNavButton',
  component: BottomNavButton,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['href', 'label', 'icon'],
    },
  },
  tags: ['autodocs'],
  args: {
    href: '/home',
    label: '홈',
    icon: 'icon_home',
    disabled: false,
  },
} satisfies Meta<typeof BottomNavButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
