import styled, { css } from 'styled-components/native'

export const ListDayContainer = styled.View`
  gap: 8px;
`

export const ListDayTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
  `}
`
