import { useState } from 'react';
import Tabs from '@/components/Tabs/Tabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    value: 'reco',
  },
  argTypes: {},
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => {
    const [value, setValue] = useState(args.value);

    return (
      <Tabs
        {...args}
        value={value}
        onClick={(_e, newValue) => {
          setValue(newValue);
        }}
      >
        <Tabs.Tab href="/1" value="reco">
          추천
        </Tabs.Tab>
        <Tabs.Tab href="/2" value="setmenu">
          SET MENU
        </Tabs.Tab>
        <Tabs.Tab href="/3" value="coffee">
          COFFEE
        </Tabs.Tab>
        <Tabs.Tab href="/4" value="decafineCoffee">
          DECAFEINE COFFEE
        </Tabs.Tab>
        <Tabs.Tab href="/5" value="banaccino&smoothie">
          BANACCINO & SMOOTHIE
        </Tabs.Tab>
        <Tabs.Tab href="/6" value="tea&ade">
          TEA & ADE
        </Tabs.Tab>
        <Tabs.Tab href="/7" value="bread&dessert">
          BREAD&DESSERT
        </Tabs.Tab>
      </Tabs>
    );
  },
};

export default meta;
