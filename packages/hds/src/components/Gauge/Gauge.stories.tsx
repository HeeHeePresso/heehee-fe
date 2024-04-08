import { type Meta, type StoryFn, type StoryObj } from '@storybook/react';
import globalVars from '@/styles/globalVars.css';
import Gauge from './Gauge';

const meta = {
  title: 'General/Gauge',
  component: Gauge,
  parameters: {
    layout: 'centered',
    include: ['children'],
  },
  tags: ['autodocs'],
  args: {
    bgColor: globalVars.color.beige_01,
    gauageColor: globalVars.color.main_01,
    progress: 0,
  },
  argTypes: {
    progress: {
      control: 'number',
      defaultValue: 0,
    },
  },
} satisfies Meta<typeof Gauge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryFn<typeof Gauge> = props => <Gauge {...props} />;

export const Sample: Story = {
  args: {
    bgColor: globalVars.color.beige_01,
    gauageColor: globalVars.color.main_01,
    progress: 25,
  },
};
