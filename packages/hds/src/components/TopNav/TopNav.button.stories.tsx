import TopNavButton from '@/components/TopNav/TopNav.button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Nav/TopNav/TopNavButton',
  component: TopNavButton,
  parameters: {
    layout: 'centered',
    control: {
      include: ['icon', 'size', 'fill', 'disabled'],
    },
  },
  tags: ['autodocs'],
  args: {
    icon: 'icon_chevron_left',
    size: 'lg',
    disabled: false,
    scale: 'md',
    fill: 'text_01',
  },
  argTypes: {},
} satisfies Meta<typeof TopNavButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
