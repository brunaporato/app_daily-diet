import styled, { css } from 'styled-components/native'

export const TextInputContainer = styled.View`
  gap: 4px;

  margin-bottom: 24px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Input = styled.TextInput`
  padding: 14px;

  border-radius: 6px;

  height: 48px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};

    border: 1px solid ${theme.COLORS.GRAY_500};
  `}
`
