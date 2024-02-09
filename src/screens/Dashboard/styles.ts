import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

interface DashboardStyleProps {
  isOnDiet: boolean
}

export const DashboardContainer = styled.View<DashboardStyleProps>`
  flex: 1;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  padding: 62px 24px 34px;
`

export const ReturnIcon = styled(ArrowLeft)<DashboardStyleProps>`
  color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  font-size: 24px;
  font-weight: bold;
`

export const DashboardContent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;

  border-radius: 20px;
  margin-top: -545px;

  padding: 33px 24px;
`

export const DashboarContentTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM};
  `}

  text-align: center;
  margin-bottom: 23px;
`

export const DashboardCard = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 16px;
  align-self: stretch;
  border-radius: 8px;
  margin-bottom: 12px;
`

export const DashboardCardSmall = styled.View<DashboardStyleProps>`
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 16px;
  border-radius: 8px;
  flex: 1;
`
