import { LinearGradient } from 'expo-linear-gradient'
import { ArrowUpRight } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

interface PercentCardProps {
  type: 'red' | 'green'
}

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

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  border-radius: 999px;
  /* border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200}; */
`

export const PercentCard = styled.View<PercentCardProps>`
  padding: 20px 16px;
  gap: 2px;

  background-color: ${({ theme, type }) =>
    type === 'green' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  margin-bottom: 40px;

  width: 100%;
  height: 102px;
`

export const TouchableIcon = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const PercentLinkIcon = styled(ArrowUpRight)<PercentCardProps>`
  color: ${({ theme, type }) =>
    type === 'green' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  font-size: 24px;
  font-weight: bold;
`

export const HomeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
  `}
`

export const ListHeader = styled.View`
  gap: 8px;
  margin-bottom: 32px;
`

export const BottomGradient = styled(LinearGradient)`
  height: 160px;
`

export const EmptyListView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const EmptyListText = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_400};
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
