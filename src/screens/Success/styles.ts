import styled, { css } from 'styled-components/native'

interface SuccessTitleType {
  isOnDiet: boolean
}

export const SuccessContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;

  padding: 160px 32px;
  align-items: center;
`

export const SuccessTitle = styled.Text<SuccessTitleType>`
  ${({ theme, isOnDiet }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
    color: ${isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}

  margin-bottom: 8px;
`

export const SuccessSubtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.GRAY_100};
  `}

  margin-bottom: 40px;
  text-align: center;
`

export const SuccessSubtitleStrong = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const SuccessImage = styled.Image`
  margin-bottom: 32px;
`
