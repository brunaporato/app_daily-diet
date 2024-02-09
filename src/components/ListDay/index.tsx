import { ListMeal } from '../ListMeal'
import { ListDayContainer, ListDayTitle } from './styles'

export function ListDay() {
  return (
    <ListDayContainer>
      <ListDayTitle>12.08.2022</ListDayTitle>
      <ListMeal time="20:00" meal="Whey com leite" isOnDiet />
      <ListMeal time="16:00" meal="Vitamina de banana" isOnDiet />
      <ListMeal time="13:00" meal="Açaí com leite condensado" />
      <ListMeal time="12:30" meal="Proteina de frango" isOnDiet />
      <ListMeal time="10:00" meal="Bolacha recheada" />
    </ListDayContainer>
  )
}
