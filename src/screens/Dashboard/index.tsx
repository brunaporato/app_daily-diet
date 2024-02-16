import { Alert, TouchableOpacity, View } from 'react-native'
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
import { MealsDataProps, getMealsData } from '../../storage/meal/getMealsData'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'

export function Dashboard() {
  const [mealsData, setMealsData] = useState<MealsDataProps>()
  const [isHealthy, setIsHealthy] = useState(true)
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const navigation = useNavigation()

  function handleReturn() {
    navigation.navigate('home')
  }

  async function fetchData() {
    try {
      const data = await getMealsData()
      setMealsData(data)

      setIsHealthy(
        !Number.isNaN(data.percentOfMealsOnDiet)
          ? data.percentOfMealsOnDiet >= 50
          : false,
      )
      setIsDataLoaded(true)
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os dados, tente novamente')
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {isDataLoaded ? (
        <>
          <DashboardContainer isOnDiet={isHealthy}>
            <TouchableOpacity onPress={handleReturn}>
              <ReturnIcon isOnDiet={isHealthy} />
            </TouchableOpacity>
            <TitleNumberSpan
              title={
                mealsData?.percentOfMealsOnDiet
                  ? `${mealsData?.percentOfMealsOnDiet}%`
                  : '0%'
              }
              span="das refeições dentro da dieta"
            />
          </DashboardContainer>
          <DashboardContent>
            <DashboarContentTitle>Estatísticas Gerais</DashboarContentTitle>
            <DashboardCard>
              <TitleNumberSpan
                title={String(mealsData?.bestSeriesOnDiet)}
                span="melhor sequência de pratos dentro da dieta"
              />
            </DashboardCard>
            <DashboardCard>
              <TitleNumberSpan
                title={String(mealsData?.totalMealsStored)}
                span="refeições registradas"
              />
            </DashboardCard>
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <DashboardCardSmall isOnDiet={true}>
                <TitleNumberSpan
                  title={String(mealsData?.mealsOnDiet)}
                  span="refeições dentro da dieta"
                />
              </DashboardCardSmall>
              <DashboardCardSmall isOnDiet={false}>
                <TitleNumberSpan
                  title={String(mealsData?.mealsOutOfDiet)}
                  span="refeições fora da dieta"
                />
              </DashboardCardSmall>
            </View>
          </DashboardContent>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
