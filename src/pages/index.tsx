import Home, { HomeTemplateProps } from '../templates/Home'
import gamesMock from '../components/GameCardSlider/mock'
import { initializeApollo } from 'utils/apollo';
import { QueryHome, QueryHomeVariables } from 'types/types_queries/QUERY_HOME';
import { QUERY_HOME } from 'graphql/queries/home';
import { GetStaticProps } from 'next';
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers';

export default function Index(props: HomeTemplateProps) {
  return (
    <Home {...props} />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const TODAY = new Date().toISOString().slice(0, 10);

  const {
    data: {
      banners,
      newGames,
      upcomingGames,
      freeGames,
      sections
    }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY },
    fetchPolicy: "no-cache" // Garantir sempre um dado novo na geração do estático
  });

  return {
    revalidade: 60,
    props: {
      banners: bannerMapper(banners),
      newGames: gamesMapper(newGames),
      newGamesTitle: sections?.newGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      mostPopularGamesTitle: sections?.popularGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      upcomingMoreGames: gamesMock,
      upcomingGamesTitle: sections?.upcomingGames?.title,
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
