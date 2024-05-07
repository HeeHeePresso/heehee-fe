import Img from './Image';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Image',
  parameters: {
    layout: 'padded',
    controls: { include: ['src', 'ratio', 'width', 'height'] },
  },
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'select',
      options: [undefined, '1/1', '16/9', '3/4'],
    },
  },
  args: {
    src: 'https://picsum.photos/200/400',
    width: 100,
    height: 100,
    ratio: '1/1',
  },
} satisfies Meta<typeof Img>;

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {},
};

/** src 에 잘못된 이미지 url 이 들어간 경우 */
export const ImageError: Story = {
  args: {
    src: 'ddddd',
  },
};
