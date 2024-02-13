import styled, { css } from 'styled-components/native'

interface ButtonStyledProps {
  type: 'primary' | 'secondary'
}

export const ButtonContainer = styled.TouchableOpacity<ButtonStyledProps>`
  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.GRAY_200 : 'transparent'};
  border: 1px solid
    ${({ theme, type }) =>
      type === 'primary' ? 'transparent' : theme.COLORS.GRAY_100};
  border-radius: 6px;
  padding: 16px 24px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const ButtonTitle = styled.Text<ButtonStyledProps>`
  ${({ theme, type }) => css`
    color: ${type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `}
`
