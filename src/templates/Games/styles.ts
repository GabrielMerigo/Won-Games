import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query';

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      gap: ${theme.grid.gutter};
      grid-template-columns: 26rem 1fr;
    `}
  `}
`
export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const ShowMoreButton = styled.div`
  ${({ theme }) => css`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: ${theme.colors.white};

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`;

export const ShowMoreLoading = styled.img`
  width: 4rem;
`
