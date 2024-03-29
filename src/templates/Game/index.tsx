import * as S from './styles'
import Base from '../../templates/Base';

import GameInfo, { GameInfoProps } from '../../components/GameInfo';
import Gallery, { GalleryImageProps } from '../../components/Gallery';
import GameDetails, { GameDetailsProps } from '../../components/GameDetails';
import { GameCardProps } from '../../components/GameCard';
import { HighlightProps } from '../../components/Highlight';
import { Divider } from '../../components/Divider';
import TextContent from '../../components/TextContent';
import ShowCase from '../../components/ShowCase';

export type GameTemplateProps = {
  cover: string;
  gameInfo: GameInfoProps,
  gallery?: GalleryImageProps[],
  description: string,
  details: GameDetailsProps,
  upcomingGames: GameCardProps[],
  upcomingHighlight: HighlightProps,
  recommendGames: GameCardProps[],
  recommendTitle: string,
  upcomingTitle: string,
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendGames,
  recommendTitle,
  upcomingTitle
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover"></S.Cover>

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>

      <ShowCase title={upcomingTitle} games={upcomingGames} highlight={upcomingHighlight} />
      <ShowCase title={recommendTitle} games={recommendGames} />
    </S.Main>
  </Base>
)

export default Game
