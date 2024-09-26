import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '../ui/Button';

const meta: Meta = {
  title: 'Welcome',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = (
  args: React.JSX.IntrinsicAttributes & ButtonProps
) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  onClick: () => alert('hello user'),
  children: 'test button',
};
