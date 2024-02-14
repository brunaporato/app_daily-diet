import { TouchableOpacityProps } from 'react-native'
import { ListMeal } from '../ListMeal'
import { ListDayContainer, ListDayTitle } from './styles'
import { MealProps } from '../../storage/meal/createMeal'
import { useNavigation } from '@react-navigation/native'

interface ListDayProps extends TouchableOpacityProps {
  date: string
  meals: MealProps[]
}

export function ListDay({ date, meals, ...props }: ListDayProps) {
  const navigation = useNavigation()

  function handleMealDetails(id: string) {
    navigation.navigate('meal-details', { id })
  }

  return (
    <ListDayContainer>
      <ListDayTitle>{date}</ListDayTitle>
      {meals.map((meal) => {
        return (
          <ListMeal
            key={`${meal.name}-${meal.time}-${date}`}
            time={meal.time}
            meal={meal.name}
            isOnDiet={meal.onDiet}
            onPress={() => handleMealDetails(meal.id)}
            {...props}
          />
        )
      })}
    </ListDayContainer>
  )
}
