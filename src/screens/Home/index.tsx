import {
  Avatar,
  HeaderContainer,
  HomeContainer,
  HomeText,
  ListHeader,
  PercentCard,
  PercentLinkIcon,
  TouchableIcon,
} from './styles'
import { FlatList, Image } from 'react-native'
import LogoImg from '../../assets/Logo.png'
import { Button } from '../../components/Button'
import { ListDay } from '../../components/ListDay'
import { useEffect, useState } from 'react'
import { TitleNumberSpan } from '../../components/NumberWithText'
import { useNavigation } from '@react-navigation/native'
import { getMeals } from '../../storage/meal/getMeals'
import { MealProps } from '../../storage/meal/createMeal'

interface MealsByDateType {
  date: string
  meals: MealProps[]
}

export function Home() {
  const [mealsByDate, setMealsByDate] = useState<MealsByDateType[]>()

  const percentOnDiet = 90 > 50

  const { navigate } = useNavigation()

  function handleNewMeal() {
    navigate('new-meal')
  }

  function handleDashboard() {
    navigate('dashboard')
  }

  function handleMealDetails() {
    navigate('meal-details', { id: 'sei la' })
  }

  async function fetchMeals() {
    try {
      const data = await getMeals()
      const formattedData = data.map((meal) => ({
        ...meal,
        date: meal.date.split('/').join('.'),
      }))

      const mealsByDate = formattedData.reduce(
        (acc: MealsByDateType[], meal: MealProps) => {
          const existingDateIndex = acc.findIndex(
            (item) => item.date === meal.date,
          )
          if (existingDateIndex !== -1) {
            acc[existingDateIndex].meals.push(meal)
          } else {
            acc.push({ date: meal.date, meals: [meal] })
          }
          return acc
        },
        [],
      )

      mealsByDate.sort((a, b) => {
        const dateA = new Date(a.date.split('.').reverse().join('-'))
        const dateB = new Date(b.date.split('.').reverse().join('-'))
        return dateB.getTime() - dateA.getTime()
      })

      setMealsByDate(mealsByDate)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMeals()
  }, [mealsByDate])

  return (
    <HomeContainer>
      <HeaderContainer>
        <Image source={LogoImg} alt="Daily Diet's logo" />
        <Avatar src="https://github.com/brunaporato.png" />
      </HeaderContainer>
      <PercentCard type={percentOnDiet ? 'green' : 'red'}>
        <TouchableIcon onPress={handleDashboard}>
          <PercentLinkIcon type={percentOnDiet ? 'green' : 'red'} />
        </TouchableIcon>
        <TitleNumberSpan title="90,86%" span="das refeições dentro da dieta" />
      </PercentCard>
      <ListHeader>
        <HomeText>Refeições</HomeText>
        <Button hasIcon="plus" title="Nova refeição" onPress={handleNewMeal} />
      </ListHeader>
      <FlatList
        data={mealsByDate}
        keyExtractor={(item) => `${item.date}-${item.meals}`}
        renderItem={({ item }) => (
          <ListDay
            date={item.date}
            meals={item.meals}
            onPress={handleMealDetails}
          />
        )}
      />
      {/* <BottomGradient
        colors={['#FAFAFA', 'rgba(250, 250, 250, 0.00)']}
        start={{ x: 0.5, y: 0.7 }}
        locations={[0.5, 1]}
      /> */}
    </HomeContainer>
  )
}
