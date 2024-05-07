import EventBanner from '@/components/EventBanner/EventBanner';
import type { Meta, StoryObj } from '@storybook/react';

const events = [
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
  'https://picsum.photos/400/400',
];

const meta = {
  title: 'HomePage/EventBanner',
  component: EventBanner,
  parameters: {
    layout: 'padded',
    componentSubtitle: '홈페이지에서 사용하는 이벤트 배너 캐로셀',
    docs: {
      description: {
        component: '자동재생되는 루프 형태의 Swiper 를 사용',
      },
    },
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {
    slides: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof EventBanner>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    return <EventBanner slides={events} />;
  },
};

export const Single: Story = {
  args: {},
  render: () => {
    return <EventBanner slides={events.slice(0, 1)} />;
  },
};

export default meta;
