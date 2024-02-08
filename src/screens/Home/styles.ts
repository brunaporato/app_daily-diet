import { Image } from 'react-native'
import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  padding: 62px 24px;
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 8px 0 33px;
`

export const Avatar = styled(Image)`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`
