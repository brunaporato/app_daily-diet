import { TouchableOpacityProps } from 'react-native'
import { MealsType } from '../../screens/Home'
import { ListMeal } from '../ListMeal'
import { ListDayContainer, ListDayTitle } from './styles'

interface ListDayProps extends TouchableOpacityProps {
  date: string
  meals: MealsType[]
}

export function ListDay({ date, meals, ...props }: ListDayProps) {
  return (
    <ListDayContainer>
      <ListDayTitle>{date}</ListDayTitle>
      {meals.map((meal) => {
        return (
          <ListMeal
            key={`${meal.name}-${meal.time}-${date}`}
            time={meal.time}
            meal={meal.name}
            isOnDiet={meal.isOnDiet}
            {...props}
          />
        )
      })}
    </ListDayContainer>
  )
}
