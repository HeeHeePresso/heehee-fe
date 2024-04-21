import Link from '@/components/Link/Link';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['href', 'scale', 'disabled'],
    },
  },
  tags: ['autodocs'],
  args: {
    href: '/docs',
    children: '내부 링크',
    scale: 'md',
    disabled: false,
  },
  argTypes: {
    children: {
      table: {
        disabled: true,
      },
    },
  },
} satisfies Meta<typeof Link>;

type Story = StoryObj<typeof meta>;

/**
 * 내부 url 인 경우
 * */
export const InternalLink: Story = {
  args: {},
};

/** 외부 URL 인 경우 > 새 창으로 열림 */
export const ExternalUrl: Story = {
  args: {
    href: 'https://www.naver.com',
    children: '외부 링크',
    disabled: true,
  },
};

export default meta;
