import styled from 'styled-components/native'

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_400,
}))``
