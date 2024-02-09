import { ButtonContainer, ButtonIcon, ButtonTitle } from './styles'

interface ButtonProps {
  hasIcon?: boolean
  title: string
}

export function Button({ hasIcon = false, title }: ButtonProps) {
  return (
    <ButtonContainer>
      {hasIcon && <ButtonIcon />}
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  )
}
