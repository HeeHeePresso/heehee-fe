import { type Meta, type StoryFn, type StoryObj } from '@storybook/react';
import Example from './Example';

const meta = {
  title: 'General/Example',
  component: Example,
  parameters: {
    layout: 'centered',
    include: ['children'],
  },
  tags: ['autodocs'],
  args: {
    name: '바로 렌더 하는 경우',
  },
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryFn<typeof Example> = props => <Example {...props} />;

export const Sample: Story = {
  args: { name: 'StoryObj 쓰는 경우' },
};
