import { Meta, Story } from '@storybook/react';
import Highlight, { HighlightProps } from '.';
import item from './mock'

export default {
  title: `Highlight`,
  component: Highlight,
  args: {...item}
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const HighlightWithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

HighlightWithFloatImage.args = {
  title: "Read Dead it's back",
  subtitle: "Come see john's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/banner.svg',
  floatImage: '/img/wonan-rd2.svg'
}

