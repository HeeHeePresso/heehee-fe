import Page from '@/components/Page/Page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Layout/Page',
  component: Page,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    backgroundColor: 'background',
  },
  argTypes: {},
  decorators: [
    Story => {
      return (
        <div style={{ minWidth: 390, minHeight: 200 }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Page>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: props => {
    return (
      <Page {...props}>
        <div style={{ height: 200 }}>내부 콘텐츠</div>
      </Page>
    );
  },
};

export default meta;
