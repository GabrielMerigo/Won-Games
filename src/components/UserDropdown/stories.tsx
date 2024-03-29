import { Meta, Story } from '@storybook/react';
import UserDropdown, { UserDropdownProps } from '.';

export default {
  title: `UserDropdown`,
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<UserDropdownProps> = ({ username }) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown username={username} />
  </div>
)

Default.args = {
  username: 'Gabriel'
}
