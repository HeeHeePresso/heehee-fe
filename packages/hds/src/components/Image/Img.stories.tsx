import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import Img from './Img';

const meta = {
  title: 'General/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'select',
      options: ['1/1', '16/9', '3/4'],
    },
    src: {
      control: 'text',
    },
  },
  args: {
    src: 'https://picsum.photos/200/400',
    width: 0,
    height: 0,
  },
} satisfies Meta<typeof Img>;

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: StoryFn<typeof Img> = props => <Img {...props} />;
