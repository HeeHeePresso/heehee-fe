import FullScreenLoader from '@/components/FullScreenLoader/FullScreenLoader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/FullScreenLoader',
  component: FullScreenLoader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    isTransparent: false,
  },
  argTypes: {},
} satisfies Meta<typeof FullScreenLoader>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
