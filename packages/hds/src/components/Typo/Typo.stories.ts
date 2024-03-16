import Typo from './Typo';
import type { TypoVariants } from '@/components/Typo/Typo.css';
import type { Meta, StoryObj } from '@storybook/react';

const DUMMY_TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const meta = {
  title: 'General/Typo',
  component: Typo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: DUMMY_TEXT,
    color: 'text_01',
    variant: 'text_regular',
    size: 18,
    lines: 1,
    wrap: true,
  },
  argTypes: {
    color: {
      control: 'select',
      defaultValue: 'text_01',
      options: [
        'main_01',
        'main_02',
        'text_01',
        'text_02',
        'background',
        'beige_01',
        'beige_02',
      ] as NonNullable<TypoVariants>['color'][],
    },
    variant: {
      control: 'select',
      defaultValue: 'text_regular',
      options: [
        'header',
        'subtitle',
        'text',
        'text_regular',
        'text_bold',
        'small_regular',
        'small_bold',
      ] as NonNullable<TypoVariants>['variant'][],
    },
    size: {
      control: 'select',
      defaultValue: 18,
      options: [24, 18, 14] as NonNullable<TypoVariants>['size'][],
    },
    lines: {
      control: 'select',
      defaultValue: 1,
      options: [1, 2, 3] as NonNullable<TypoVariants>['lines'][],
    },
  },
} satisfies Meta<typeof Typo>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
