import { TouchableOpacity, View } from 'react-native'
import {
  DashboarContentTitle,
  DashboardCard,
  DashboardCardSmall,
  DashboardContainer,
  DashboardContent,
  ReturnIcon,
} from './styles'
import { TitleNumberSpan } from '../../components/NumberWithText'
import { useNavigation } from '@react-navigation/native'

export function Dashboard() {
  const navigation = useNavigation()

  function handleReturn() {
    navigation.navigate('home')
  }

  return (
    <>
      <DashboardContainer isOnDiet={true}>
        <TouchableOpacity onPress={handleReturn}>
          <ReturnIcon isOnDiet={true} />
        </TouchableOpacity>
        <TitleNumberSpan title="90,86%" span="das refeições dentro da dieta" />
      </DashboardContainer>
      <DashboardContent>
        <DashboarContentTitle>Estatísticas Gerais</DashboarContentTitle>
        <DashboardCard>
          <TitleNumberSpan
            title="22"
            span="melhor sequência de pratos dentro da dieta"
          />
        </DashboardCard>
        <DashboardCard>
          <TitleNumberSpan title="109" span="refeições registradas" />
        </DashboardCard>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <DashboardCardSmall isOnDiet={true}>
            <TitleNumberSpan title="99" span="refeições dentro da dieta" />
          </DashboardCardSmall>
          <DashboardCardSmall isOnDiet={false}>
            <TitleNumberSpan title="10" span="refeições fora da dieta" />
          </DashboardCardSmall>
        </View>
      </DashboardContent>
    </>
  )
}
