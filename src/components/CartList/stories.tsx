import { Meta, Story } from '@storybook/react';
import CartList, { CartListProps } from '.';

import mockItems from './mock';

export default {
  title: `CartList`,
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },
  argTypes: {
    items: {
      type: '',
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
}

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

export const WithButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)


export const Empty: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
