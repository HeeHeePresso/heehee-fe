import { useState } from 'react';
import BottomNav from '@/components/BottomNav/BottomNav';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Nav/BottomNav',
  component: BottomNav,
  parameters: {
    layout: 'fullscreen',
    controls: { include: ['selected'] },
    componentSubtitle: 'BottomNav, BottomNav.Btn 으로 바텀네비게이션을 구성',
  },
  tags: ['autodocs'],
  args: {
    selected: 0,
  },
  argTypes: {
    selected: {
      defaultValue: 0,
      description: '선택한 바텀 Nav 버튼의 index',
    },
  },
} satisfies Meta<typeof BottomNav>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: 0,
  },
  render: args => {
    const [selected, setSelected] = useState(args.selected);

    return (
      <BottomNav
        selected={selected}
        onSelected={selected => {
          setSelected(selected);
        }}
      >
        <BottomNav.Btn href="/home" icon="icon_home" label="홈" />
        <BottomNav.Btn href="/orders" icon="icon_member" label="주문내역" />
        <BottomNav.Btn href="/order" icon="icon_coffee" label="주문하기" />
        <BottomNav.Btn href="/setting" icon="icon_more" label="더보기" />
      </BottomNav>
    );
  },
};

export default meta;
