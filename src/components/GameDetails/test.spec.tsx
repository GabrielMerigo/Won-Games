import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from './'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  publisher: '2K',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}


describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('heading', { name: /developer/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /release date/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /platforms/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /publisher/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument();
  })

  it('should render platforms icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  })


  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} rating="BR0" />)
    expect(screen.getByText(/free/i)).toBeInTheDocument();
  })

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR12" />)
    expect(screen.getByText(/12\+/i)).toBeInTheDocument();
  })

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  })

  it('should render the developer', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  })

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument();
  })

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument();
  })
})
