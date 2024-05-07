import Page from '@/components/Page';
import ScrollView from '@/components/ScrollView/ScrollView';
import TopNav from '@/components/TopNav';
import { fixedSize } from '@/systems/constants/fixedSize';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Layout/ScrollView',
  component: ScrollView,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    topSpacing: fixedSize.topNav.md.height,
    bottomSpacing: 0,
  },
  argTypes: {},
  decorators: [
    Story => {
      return (
        <div style={{ minWidth: 390, height: '844px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof ScrollView>;

type Story = StoryObj<typeof meta>;

/** ScrollView 내부 콘텐츠가 짧을 때 */
export const ShortView: Story = {
  args: {},
  render: props => {
    return (
      <Page backgroundColor="beige_01">
        <TopNav size="md">
          <TopNav.Title>장바구니</TopNav.Title>
        </TopNav>
        <ScrollView {...props}>짧은 콘텐츠</ScrollView>
      </Page>
    );
  },
};

/** ScrollView 내부 콘텐츠가 길 때 */
export const LongView: Story = {
  args: {},
  render: props => {
    return (
      <Page backgroundColor="beige_01">
        <TopNav size="md">
          <TopNav.Title>장바구니</TopNav.Title>
        </TopNav>
        <ScrollView {...props}>
          <div style={{ height: 2000 }}>긴 콘텐츠</div>
        </ScrollView>
      </Page>
    );
  },
};

export default meta;
