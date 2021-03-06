import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextContent from './'

const props = {
  title: 'title',
  content: `<h1>content</h1>`
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(screen.getByRole('heading', { name: /title/i})).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /content/i })).toBeInTheDocument();
  })

  it('should render without title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(screen.getByRole('heading', { name: /content/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /title/i})).not.toBeInTheDocument();
  })

  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)
    const wrapper = screen.getByRole('heading', { name: /title/i }).parentElement;

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })

    expect(wrapper).toHaveStyleRule('background', '#FAFAFA', {
      media: '(min-width: 768px)'
    })
  })
})
