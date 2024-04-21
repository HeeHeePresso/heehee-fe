import Carousel from '@/components/Carousel';
import ItemVerticalCard from '@/components/Item/ItemVerticalCard';
import ItemVerticalGroup from '@/components/Item/ItemVerticalGroup/ItemVerticalGroup';
import type { Meta, StoryObj } from '@storybook/react';

const menus = [
  { menuId: '1111', src: 'https://picsum.photos/400/400', name: '딸기오쇼콜라', price: 6000 },
  { menuId: '1112', src: 'https://picsum.photos/400/400', name: '퐁당오쇼콜라', price: 400 },
  { menuId: '1113', src: 'https://picsum.photos/400/400', name: '아메리카노', price: 3000 },
  { menuId: '1114', src: 'https://picsum.photos/400/400', name: '슈크림라떼', price: 7200 },
  { menuId: '1115', src: 'https://picsum.photos/400/400', name: '아포가토', price: 8000 },
  { menuId: '1116', src: 'https://picsum.photos/400/400', name: '딸기라떼', price: 6400 },
];

const meta = {
  title: 'Item/Vertical/ItemVerticalGroup',
  component: ItemVerticalGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    title: 'season special menu',
    titleLang: 'en',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ItemVerticalGroup>;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  args: {},
  render: args => {
    return (
      <ItemVerticalGroup {...args}>
        <Carousel
          slides={menus}
          renderSlide={props => {
            return (
              <ItemVerticalCard
                href={`/item/${props.menuId}`}
                src={props.src}
                title={props.name}
                subTitle={`${props.price.toLocaleString()}원`}
              />
            );
          }}
        />
      </ItemVerticalGroup>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const KRTitle: Story = {
  ...Template,
  args: {
    title: '이런 메뉴도 있어요',
    titleLang: 'kr',
  },
};

export default meta;
