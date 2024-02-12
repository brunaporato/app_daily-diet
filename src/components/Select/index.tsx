import { TouchableOpacityProps } from 'react-native'
import { SelectContainer, SelectDecoration, SelectText } from './styles'

export interface SelectProps extends TouchableOpacityProps {
  type: 'positive' | 'negative'
  isActive?: boolean
}

export function Select({ type, isActive = false, ...props }: SelectProps) {
  return (
    <SelectContainer isActive={isActive} type={type} {...props}>
      <SelectDecoration type={type} />
      <SelectText>{type === 'positive' ? 'Sim' : 'Não'}</SelectText>
    </SelectContainer>
  )
}
