import ItemVerticalCard from '@/components/Item/ItemVerticalCard/ItemVerticalCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Item/Vertical/ItemVerticalCard',
  component: ItemVerticalCard,
  parameters: {
    layout: 'centered',
    controls: { include: ['href', 'src', 'title', 'subTitle'] },
    componentSubtitle: '세로형 상품 카드',
    docs: {
      description: {
        component: '너비(fixed 100px), 높이(auto),',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    href: '/',
    src: 'https://picsum.photos/400/400',
    title: '딸기피치아이스티',
    subTitle: '4,200원',
  },
  argTypes: {},
} satisfies Meta<typeof ItemVerticalCard>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
