import { Plus } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
  padding: 16px 24px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const ButtonIcon = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 16,
}))``

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `}
`
