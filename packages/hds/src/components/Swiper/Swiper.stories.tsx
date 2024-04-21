import Swiper from '@/components/Swiper/Swiper';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Swiper',
  component: Swiper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    slidesPerView: 'auto',
    loop: true,
    autoplay: false,
    on: {
      slideChange: () => console.log('slide changed'),
    },
  },
  argTypes: {},
  decorators: [
    Story => {
      return (
        <div style={{ minWidth: 390, minHeight: 200 }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Swiper>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: props => {
    return (
      <Swiper {...props}>
        {Array(5)
          .fill(0)
          .map((_a, index) => {
            return (
              <Swiper.Slide key={index} style={{ backgroundColor: 'aliceblue', height: '100%' }}>
                {index + 1}
              </Swiper.Slide>
            );
          })}
      </Swiper>
    );
  },
};

export default meta;
