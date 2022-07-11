import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Content' };

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = { label: 'Content', placeholder: 'Placeholder' };

export const Required = Template.bind({});
Required.args = { label: 'Required Input', required: true };