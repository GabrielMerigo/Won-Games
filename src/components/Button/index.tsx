import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode,
  size?: 'small' | 'medium' | 'large',
  fullWidth?: boolean,
  icon?: JSX.Element,
  onClick?: (Event: React.MouseEvent<HTMLElement>) => void
}

const Button = ({ children, size = 'medium', fullWidth = false, icon }: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
