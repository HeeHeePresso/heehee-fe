import Location from './Location';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Location',
  component: Location,
  tags: ['autodocs'],
  args: {
    text: '수원영통점',
  },
  argTypes: {
    text: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Location>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
