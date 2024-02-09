import {
  DietIndicator,
  Divider,
  ListMealContainer,
  MealName,
  MealTime,
} from './styles'

interface ListMealProps {
  isOnDiet?: boolean
  meal: string
  time: string
}

export function ListMeal({ meal, time, isOnDiet = false }: ListMealProps) {
  return (
    <ListMealContainer>
      <MealTime>{time}</MealTime>
      <Divider />
      <MealName>{meal}</MealName>
      <DietIndicator isOnDiet={isOnDiet} />
    </ListMealContainer>
  )
}
