import Home, { HomeTemplateProps } from '../templates/Home'
import bannersMock from '../components/BannerSlider/mock';
import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'
import { gql, useQuery } from '@apollo/client';

export default function Index(props: HomeTemplateProps) {
  useQuery(gql`
    query getCategories {
        categories {
          data {
            attributes {
              name
              slug
            }
		      }
        }
      }
  `)

  return (
    <Home {...props} />
  );
}

// getStaticProps -> gerar estático em build time (gatsby)
// getServerSideProps -> gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps -> gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
