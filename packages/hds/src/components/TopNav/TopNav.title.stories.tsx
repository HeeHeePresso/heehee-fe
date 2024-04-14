import TopNavTitle from '@/components/TopNav/TopNav.title';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Nav/TopNav/TopNavTitle',
  component: TopNavTitle,
  parameters: {
    layout: 'centered',
    control: {
      include: ['type'],
    },
  },
  tags: ['autodocs'],
  args: {
    type: 'default',
    children: '장바구니',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'logo'],
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof TopNavTitle>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
