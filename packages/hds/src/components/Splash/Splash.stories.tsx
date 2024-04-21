import Splash from '@/components/Splash/Splash';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Splash',
  component: Splash,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {
    className: {
      table: { disable: true },
    },
  },
  decorators: Story => {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'aliceblue',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            minHeight: '844px',
            maxWidth: '390px',
          }}
        >
          <Story />
        </div>
      </div>
    );
  },
} satisfies Meta<typeof Splash>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
