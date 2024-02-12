import { TextInputProps, ViewStyle } from 'react-native'
import { Input, Label, TextInputContainer } from './styles'

interface InputProps extends TextInputProps {
  label: string
  parentStyle?: ViewStyle
}

export function TextInput({ label, parentStyle, ...props }: InputProps) {
  return (
    <TextInputContainer {...parentStyle}>
      <Label>{label}</Label>
      <Input {...props} />
    </TextInputContainer>
  )
}
