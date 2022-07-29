import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'
import * as S from './styles';

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>

const wrapperModifers = {
  right: () => css`
   grid-template-areas: 'floatimage content';
   grid-template-columns: 1.3fr 2fr;

    ${S.Content}{
      text-align: right;
    };
  `,
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;

    ${S.Content}{
      text-align: left;
    };

    ${S.FloatImage}{
      justify-self: end;
      margin-right: 1rem;
    };
  `
}


export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    position: relative;
    height: 23rem;
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
    display: grid;
    grid-template-columns: 1.3fr 2fr;

    &::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6)
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${wrapperModifers[alignment!]()}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    grid-area: content;

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: floatimage;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    align-self: end;

    ${media.greaterThan('medium')`
      max-height: 32rem;
      max-width: 100%;
    `}
  `}
`
