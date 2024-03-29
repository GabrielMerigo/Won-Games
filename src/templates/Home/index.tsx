import Base from '../../templates/Base'

import { Container } from '../../components/Container'
import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'
import BannerSlider from '../../components/BannerSlider'
import ShowCase from '../../components/ShowCase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  newGamesTitle: string;
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  mostPopularGamesTitle: string;
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingGamesTitle: string;
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
  freeGamesTitle: string;
}

const Home = ({
  banners,
  freeGames,
  freeHighlight,
  freeGamesTitle,
  mostPopularGamesTitle,
  mostPopularGames,
  mostPopularHighlight,
  upcomingGames,
  upcomingHighlight,
  upcomingGamesTitle,
  newGames,
  newGamesTitle
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase
        title={newGamesTitle}
        games={newGames}
        color="black"
      />
    </S.SectionNews>

    <ShowCase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <ShowCase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcomingHighlight}
    />

    <ShowCase
      title={freeGamesTitle}
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
)

export default Home
