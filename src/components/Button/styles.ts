import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'
import { darken } from 'polished'

export type WrapperProps = {
  hasIcon: boolean;
} & Omit<ButtonProps, 'children'>

const wrappersModifers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.spacings.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.spacings.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover{
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    cursor: pointer;

    &:hover{
      background: ${ minimal ? 'none' : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
    }

    ${!!size && wrappersModifers[size](theme) }
    ${fullWidth && wrappersModifers.fullWidth()}
    ${!!hasIcon && wrappersModifers.withIcon(theme)}
    ${minimal && wrappersModifers.minimal(theme)}
    ${disabled && wrappersModifers.disabled()}
  `}
`
