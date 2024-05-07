import ItemThumbnail from '@/components/Item/Item.thumbnail';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Item/ItemThumbnail',
  component: ItemThumbnail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    src: 'https://picsum.photos/400/400',
  },
  argTypes: {},
} satisfies Meta<typeof ItemThumbnail>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
