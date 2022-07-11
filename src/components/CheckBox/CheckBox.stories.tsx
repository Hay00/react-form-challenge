import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckBox } from './';

export default {
  title: 'Example/CheckBox',
  component: CheckBox,
  argTypes: {
    checked: { control: 'boolean' },
    required: { control: 'boolean' },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args}>{args.children}</CheckBox>
);

export const Default = Template.bind({});
Default.args = { children: 'Content' };
