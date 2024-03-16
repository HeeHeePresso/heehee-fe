import * as icons from '@/systems/icons';
import Icon from './Icon';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    icon: 'ic_topNav_arrow_left',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons),
    },
  },
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
