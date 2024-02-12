import styled from 'styled-components/native'
import { SelectProps } from '.'

export const SelectContainer = styled.TouchableOpacity<SelectProps>`
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  flex-direction: row;

  background-color: ${({ theme, isActive, type }) => {
    if (isActive) {
      return type === 'positive'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
    }

    return theme.COLORS.GRAY_600
  }};
  border-radius: 6px;
  border: 1px solid
    ${({ theme, isActive, type }) => {
      if (isActive) {
        return type === 'positive'
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK
      }

      return 'transparent'
    }};

  flex: 1;

  max-height: 52px;
`

export const SelectDecoration = styled.View<SelectProps>`
  width: 8px;
  height: 8px;

  background-color: ${({ theme, type }) =>
    type === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 999px;
`

export const SelectText = styled.Text``
