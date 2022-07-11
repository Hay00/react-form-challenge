import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: { control: 'select', options: ['button', 'submit'] },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Button' };

export const Small = Template.bind({});
Small.args = { size: 'sm', children: 'Button' };

export const Medium = Template.bind({});
Medium.args = { size: 'md', children: 'Button' };

export const Large = Template.bind({});
Large.args = { size: 'lg', children: 'Button' };
