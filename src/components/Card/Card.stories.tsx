import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './index';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>{args.children}</Card>
);

export const Default = Template.bind({});
Default.args = { children: 'Content' };

export const Colored = Template.bind({});
Colored.args = { color: '#7fd354', children: 'Colored Card Content' };
