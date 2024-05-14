import ItemHorizontalCard from '@/components/Item/ItemHorizontalCard/ItemHorizontalCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Item/Horizontal/ItemHorizontalCard',
  component: ItemHorizontalCard,
  parameters: {
    layout: 'centered',
    controls: { include: ['href', 'src', 'title', 'subTitle', 'content'] },
  },
  tags: ['autodocs'],
  args: {
    href: '/',
    src: 'https://picsum.photos/400/400',
    title: '제주감귤에이드',
    subTitle: 'Berry Orange Ade',
    content: '4,200원',
  },
  argTypes: {},
} satisfies Meta<typeof ItemHorizontalCard>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
