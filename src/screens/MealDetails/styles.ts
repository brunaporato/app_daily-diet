import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

interface MealStyledOnDiet {
  isOnDiet: boolean
}

export const MealContainer = styled.View<MealStyledOnDiet>`
  flex: 1;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const MealHeader = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-top: 38px;
`

export const ReturnIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 24,
}))``

export const MealScreenTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
  `}

  text-align: center;
  flex: 1;
`

export const MealContent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;

  border-radius: 20px;
  padding: 40px 24px;

  justify-content: space-between;
`

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
  `}

  margin-bottom: 8px;
`

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `}

  margin-bottom: 24px;
`

export const MealTitleSmall = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `}
  margin-bottom: 4px;
`

export const MealTagContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 8px 16px;
  border-radius: 999px;

  flex-direction: row;
  align-items: center;
  align-self: flex-start;

  gap: 8px;
`

export const MealTagDecoration = styled.View<MealStyledOnDiet>`
  height: 8px;
  width: 8px;

  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 999px;
`

export const MealTagText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
  `}
`

export const MealButtons = styled.View`
  gap: 9px;
`

export const ModalView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 24px;
`

export const ModalContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 40px 21px 24px 24px;
  border-radius: 8px;
  gap: 32px;
`

export const ModalText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
  `}

  text-align: center;
`

export const ModalActions = styled.View`
  flex-direction: row;
  gap: 12px;
`
