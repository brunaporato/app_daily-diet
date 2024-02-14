import { TouchableOpacityProps } from 'react-native'
import {
  DietIndicator,
  Divider,
  ListMealContainer,
  MealName,
  MealTime,
} from './styles'

interface ListMealProps extends TouchableOpacityProps {
  isOnDiet?: boolean
  meal: string
  time: string
}

export function ListMeal({
  meal,
  time,
  isOnDiet = false,
  ...props
}: ListMealProps) {
  return (
    <ListMealContainer {...props}>
      <MealTime>{time}</MealTime>
      <Divider />
      <MealName>{meal}</MealName>
      <DietIndicator isOnDiet={isOnDiet} />
    </ListMealContainer>
  )
}
