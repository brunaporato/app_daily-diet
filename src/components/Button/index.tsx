import { PencilSimpleLine, Plus, Trash } from 'phosphor-react-native'
import { ButtonContainer, ButtonTitle } from './styles'

interface ButtonProps {
  hasIcon?: 'plus' | 'edit' | 'remove'
  title: string
  type?: 'primary' | 'secondary'
}

export function Button({ hasIcon, title, type = 'primary' }: ButtonProps) {
  let iconComponent = null

  switch (hasIcon) {
    case 'plus':
      iconComponent = <Plus size={18} color="white" />
      break
    case 'edit':
      iconComponent = <PencilSimpleLine size={18} color="white" />
      break
    case 'remove':
      iconComponent = <Trash size={18} />
      break
    default:
      iconComponent = null
      break
  }

  return (
    <ButtonContainer type={type}>
      {hasIcon && iconComponent}
      <ButtonTitle type={type}>{title}</ButtonTitle>
    </ButtonContainer>
  )
}
