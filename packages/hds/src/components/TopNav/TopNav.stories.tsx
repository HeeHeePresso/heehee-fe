import TopNav from '@/components/TopNav/TopNav';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Nav/TopNav',
  component: TopNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    size: 'md',
    hasShadow: false,
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['md', 'lg'],
    },
    hasShadow: {
      control: 'boolean',
    },
  },
  decorators: [
    Story => {
      return (
        <div style={{ minWidth: 390, maxWidth: 400, backgroundColor: 'beige', minHeight: 200 }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof TopNav>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: props => {
    return (
      <TopNav {...props}>
        <TopNav.Btn icon="icon_chevron_left" />
        <TopNav.Title>메뉴 수정</TopNav.Title>
        <TopNav.LinkBtn href="/cart" icon="icon_menu" size="md" />
      </TopNav>
    );
  },
};

/** 제목만 있는 경우 */
export const OnlyTitle: Story = {
  args: {},
  render: props => {
    return (
      <TopNav hasShadow size="lg" {...props}>
        <TopNav.Title>마이페이지</TopNav.Title>
      </TopNav>
    );
  },
};

/** 로고와 함께 사용하는 케이스 */
export const Logo: Story = {
  args: {},
  render: props => {
    return (
      <TopNav {...props}>
        <TopNav.Spacing />
        <TopNav.Title type="logo" />
        <TopNav.LinkBtn href="/cart" icon="icon_basket_outline" fill="main_01" />
      </TopNav>
    );
  },
};

export const LeftIconAndTitle: Story = {
  args: {},
  render: props => {
    return (
      <TopNav size="lg" {...props}>
        <TopNav.Btn icon="icon_chevron_left" />
        <TopNav.Title>메뉴</TopNav.Title>
        <TopNav.Spacing />
      </TopNav>
    );
  },
};

export default meta;
