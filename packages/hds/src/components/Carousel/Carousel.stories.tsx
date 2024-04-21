import Carousel from '@/components/Carousel/Carousel';
import type { Meta, StoryFn } from '@storybook/react';

const meta = {
  title: 'General/Swiper/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    type: 'horizontal',
  },
  argTypes: {},
} satisfies Meta<typeof Carousel>;

type Story = StoryFn<typeof Carousel>;

type Slide = { id: number; label: number };

const slides: Slide[] = [
  { id: 1, label: 1 },
  { id: 2, label: 2 },
  { id: 3, label: 3 },
  { id: 4, label: 4 },
  { id: 5, label: 5 },
];

export const Horizontal: Story = ({ slides: _slides, renderSlide: _renderSlide, ...args }) => {
  return (
    <Carousel<Slide, 'id'>
      slides={slides}
      keyName="id"
      renderSlide={({ label }) => <div style={{ width: 100, background: 'tan' }}>{label}</div>}
      {...args}
    />
  );
};

export default meta;
