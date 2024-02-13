import { TouchableOpacity, View } from 'react-native'
import {
  MealButtons,
  MealContainer,
  MealContent,
  MealDescription,
  MealHeader,
  MealScreenTitle,
  MealTagContainer,
  MealTagDecoration,
  MealTagText,
  MealTitle,
  MealTitleSmall,
  ReturnIcon,
} from './styles'
import { Button } from '../../components/Button'

export function MealDetails() {
  const isOnDiet = false

  return (
    <MealContainer isOnDiet={isOnDiet}>
      <MealHeader>
        <TouchableOpacity>
          <ReturnIcon />
        </TouchableOpacity>
        <MealScreenTitle>Refeição</MealScreenTitle>
      </MealHeader>
      <MealContent>
        <View>
          <MealTitle>Sanduíche</MealTitle>
          <MealDescription>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </MealDescription>
          <MealTitleSmall>Data e hora</MealTitleSmall>
          <MealDescription>12/08/2022 às 16:00</MealDescription>
          <MealTagContainer>
            <MealTagDecoration isOnDiet={isOnDiet} />
            <MealTagText>
              {isOnDiet ? 'dentro da dieta' : 'fora da dieta'}
            </MealTagText>
          </MealTagContainer>
        </View>
        <MealButtons>
          <Button title="Editar refeição" hasIcon="edit" />
          <Button title="Excluir refeição" hasIcon="remove" type="secondary" />
        </MealButtons>
      </MealContent>
    </MealContainer>
  )
}
