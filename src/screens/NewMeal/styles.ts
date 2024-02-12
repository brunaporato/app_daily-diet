import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const NewMealContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const NewMealHeader = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-top: 38px;
`

export const ReturnIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24,
}))``

export const NewMealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
  `}

  text-align: center;
  flex: 1;
`

export const NewMealContent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;

  border-radius: 20px;
  padding: 40px 24px;
`

export const DateTimeContainer = styled.View`
  flex-direction: row;
  gap: 20px;
`
