import Spinner from '@/components/Spinner/Spinner';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    componentSubtitle: '로딩 상태임을 표시하는 `스피너` 컴포넌트',
    docs: {
      description: {
        component: 'figma의 angular gradient 미지원으로 svg 대신 이미지를 사용',
      },
    },
    controls: {
      include: ['size'],
    },
  },
  tags: ['autodocs'],
  args: {
    size: 40,
  },
  argTypes: {},
} satisfies Meta<typeof Spinner>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
