import Button from '@/components/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['scale', 'disabled'],
    },
  },
  tags: ['autodocs'],
  args: {
    children: '버튼',
    scale: 'md',
    disabled: false,
  },
  argTypes: {
    children: {
      table: {
        disabled: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
