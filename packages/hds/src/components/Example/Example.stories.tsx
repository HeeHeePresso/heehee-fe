import { type Meta, type StoryFn, type StoryObj } from '@storybook/react';
import Example from './Example';

const meta = {
  title: 'General/Example', // 폴더 경로
  component: Example,
  parameters: {
    layout: 'centered', // 'centered'(가운데 정렬) | 'fullscreen'(컴포넌트 사이즈 fit) | 'padded'(패딩추가)
    componentSubtitle: 'parameters-componentSubtitle은 이곳을 설명합니다.',
    docs: {
      description: {
        component: 'parameters-docs-description-component는 이곳을 설명합니다.',
      },
    },
    // controls: { include: ['href', 'src', 'title', 'subTitle'] }, // 콘트롤 패널 필터링
  },
  tags: ['autodocs'], // doc 자동 생성
  args: {
    name: '바로 렌더 하는 경우', // 기본 props
  },
  argTypes: {
    // name: {
    //   table: {
    //     disable: true,
    //   },
    // }, // 콘트롤 패널에서 제외
  },
  // decorators: [
  //   Story => {
  //     return (
  //       <div>
  //         <Story />
  //       </div>
  //     );
  //   },
  // ], // 스토리 컴포넌트를 래핑해야할 때 사용, 예시) 고정 너비가 필요한 컴포넌트 개발할 때, 배경색을 설정하고 싶을 떄
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryFn<typeof Example> = props => <Example {...props} />;

export const Sample: Story = {
  args: { name: 'StoryObj 쓰는 경우' },
};
