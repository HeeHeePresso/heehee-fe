import { useState } from 'react';
import Tab from '@/components/Tabs/Tab';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Tabs/Tab',
  component: Tab,
  parameters: {
    layout: 'padded',
    controls: { include: ['href', 'children', 'isActive'] }, // 콘트롤 패널 필터링
  },
  tags: ['autodocs'],
  args: {
    children: 'COFFEE',
    href: '/',
    isActive: false,
  },
  argTypes: {},
} satisfies Meta<typeof Tab>;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  args: {},
  render: args => {
    const [isActive, setIsActive] = useState(false);

    return (
      <Tab
        {...args}
        isActive={isActive}
        onClick={() => {
          setIsActive(prev => !prev);
        }}
      />
    );
  },
};

export const Default: Story = {
  ...Template,
};

export const Active: Story = {
  args: { isActive: true },
};

export const MinWidth: Story = {
  ...Template,
  args: {
    children: '짧음',
  },
};

export const LongText: Story = {
  ...Template,
  args: {
    children: 'BANACCINO & SMOOTHIE',
  },
};

export default meta;
