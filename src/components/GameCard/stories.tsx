import { Meta, Story } from '@storybook/react';
import GameCard, { GameCardProps } from '.';

export default {
  title: `GameCard`,
  component: GameCard,
  args: {
    title: "Population Zero",
    developer: "Rockstar Games",
    img: "/img/banner-game-card.jpg",
    price: "R$ 230,00",
    promotionalPrice: "R$ 200,00",
    ribbon: '20% 0FF',
    ribbonColor: 'primary',
    ribbonSize: 'small'
  },
  argTypes: {
    onFav: { action: 'Clicked' }
  }
}

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
