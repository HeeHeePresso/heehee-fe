import { type Meta, type StoryFn, type StoryObj } from '@storybook/react';
import globalVars from '@/styles/globalVars.css';
import GaugeSteps from './GaugeSteps';


const meta = {
  title: 'General/GaugeSteps',
  component: GaugeSteps,
  parameters: {
    layout: 'centered',
    include: ['children'],
  },
  tags: ['autodocs'],
  args: {
    bgColor: globalVars.color.beige_01,
    gauageColor: globalVars.color.main_01,
    progress: 0,
    steps:['결제완료', '주문요청', '주문승인', '준비완료'],
  },
  argTypes: {
    progress: {
      control: 'number',
      defaultValue: 0,
    },

  },
} satisfies Meta<typeof GaugeSteps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryFn<typeof GaugeSteps> = props => <GaugeSteps {...props} />;

export const Sample: Story = {
  args: { 
    bgColor:globalVars.color.beige_01,
    gauageColor:globalVars.color.main_01,
    progress: 25,
    steps:['결제완료', '주문요청', '주문승인', '준비완료'],
  },
};
