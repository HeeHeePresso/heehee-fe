import Typo from '@/components/Typo';
import * as icons from '@/systems/icons';
import Icon from './Icon';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    icon: 'icon_arrow_left',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons),
    },
  },
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AllIconsWithName: Story = {
  argTypes: {
    icon: {
      table: { disable: true },
    },
    size: {
      table: { disable: true },
    },
  },
  render: ({ icon: _icon, ...rest }) => {
    return (
      <section style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(6, 1fr)' }}>
        {(Object.keys(icons) as (keyof typeof icons)[]).map(icon => {
          return (
            <div
              key={icon}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid gray',
                padding: 8,
                borderRadius: 8,
              }}
            >
              <Icon icon={icon} size={24} {...rest} />
              <Typo as="p" color="text_02" size={14} style={{ wordBreak: 'break-all' }}>
                {icon}
              </Typo>
            </div>
          );
        })}
      </section>
    );
  },
};

export default meta;
