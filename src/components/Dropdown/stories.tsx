import React from 'react';
import { Meta, Story } from '@storybook/react';
import Dropdown, { DropdownProps } from '.';

export default {
  title: `Dropdown`,
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<DropdownProps> = (args) => (
  <div>
    <Dropdown {...args} />
  </div>
)


Default.args = {
  title: 'Click here',
  children: 'content'
}
