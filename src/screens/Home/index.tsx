import {
  Avatar,
  HeaderContainer,
  HomeContainer,
  HomeText,
  ListHeader,
  PercentCard,
  PercentLinkIcon,
  PercentSpan,
  PercentText,
  TouchableIcon,
} from './styles'
import { FlatList, Image } from 'react-native'
import LogoImg from '../../assets/Logo.png'
import { Button } from '../../components/Button'
import { ListDay } from '../../components/ListDay'
import { useState } from 'react'

export interface MealsType {
  name: string
  time: string
  isOnDiet: boolean
}

interface MealsByDateType {
  date: string
  meals: MealsType[]
}

export function Home() {
  const [mealsByDate, setMealsByDate] = useState<MealsByDateType[]>([
    {
      date: '20.02.22',
      meals: [
        { name: 'X-Tudo', time: '20:00', isOnDiet: false },
        {
          name: 'Whey protein com leite',
          time: '20:00',
          isOnDiet: true,
        },
        {
          name: 'Salada cesar com frango grelhado',
          time: '20:00',
          isOnDiet: true,
        },
        {
          name: 'Vitamina de banana com abacate',
          time: '20:00',
          isOnDiet: true,
        },
      ],
    },
    {
      date: '11.02.22',
      meals: [
        { name: 'X-Tudo', time: '20:00', isOnDiet: false },
        {
          name: 'Whey protein com leite',
          time: '20:00',
          isOnDiet: true,
        },
        {
          name: 'Salada cesar com frango grelhado',
          time: '20:00',
          isOnDiet: true,
        },
        {
          name: 'Vitamina de banana com abacate',
          time: '20:00',
          isOnDiet: true,
        },
      ],
    },
  ])

  const percentOnDiet = 90 > 50

  return (
    <HomeContainer>
      <HeaderContainer>
        <Image source={LogoImg} alt="Daily Diet's logo" />
        <Avatar src="https://github.com/brunaporato.png" />
      </HeaderContainer>
      <PercentCard type={percentOnDiet ? 'green' : 'red'}>
        <TouchableIcon>
          <PercentLinkIcon type={percentOnDiet ? 'green' : 'red'} />
        </TouchableIcon>
        <PercentText>90,86%</PercentText>
        <PercentSpan>das refeições dentro da dieta</PercentSpan>
      </PercentCard>
      <ListHeader>
        <HomeText>Refeições</HomeText>
        <Button hasIcon title="Nova refeição" />
      </ListHeader>
      <FlatList
        data={mealsByDate}
        keyExtractor={(item) => `${item.date}-${item.meals}`}
        renderItem={({ item }) => (
          <ListDay date={item.date} meals={item.meals} />
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
