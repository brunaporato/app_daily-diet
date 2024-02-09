import styled, { css } from 'styled-components/native'

interface DietIndicatorProps {
  isOnDiet: boolean
}

export const ListMealContainer = styled.View`
  padding: 14px 16px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const MealTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS};
  `}
`

export const Divider = styled.View`
  height: 14px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `}

  flex: 1;
`

export const DietIndicator = styled.View<DietIndicatorProps>`
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};

  width: 14px;
  height: 14px;
  border-radius: 999px;
`
