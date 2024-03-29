import { Meta, Story } from '@storybook/react';
import Menu, { MenuProps } from '.';

export default {
  title: `Menu`,
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<MenuProps> = (props) => <Menu {...props} />

export const Logged: Story<MenuProps> = (props) => <Menu {...props} />
Logged.args = {
  username: 'Gabriel Merigo'
}
