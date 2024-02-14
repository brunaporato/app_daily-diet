import { Modal, Text, TouchableOpacity, View } from 'react-native'
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
  ModalActions,
  ModalContainer,
  ModalText,
  ModalView,
  ReturnIcon,
} from './styles'
import { Button } from '../../components/Button'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getMeals } from '../../storage/meal/getMeals'
import { MealProps } from '../../storage/meal/createMeal'

interface RouteParams {
  id: string
}

export function MealDetails() {
  const [modalVisible, setModalVisible] = useState(false)
  const [meal, setMeal] = useState<MealProps>()

  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as RouteParams

  async function fetchMeals(id: string) {
    const meals = await getMeals()

    const meal = meals.find((meal) => meal.id === id)
    setMeal(meal)
  }

  function handleReturn() {
    navigation.navigate('home')
  }

  function handleEditMeal(id: string) {
    navigation.navigate('edit-meal', { id })
  }

  useEffect(() => {
    fetchMeals(id)
  }, [id])

  return (
    <>
      {meal ? (
        <MealContainer isOnDiet={meal.onDiet}>
          <MealHeader>
            <TouchableOpacity onPress={handleReturn}>
              <ReturnIcon />
            </TouchableOpacity>
            <MealScreenTitle>Refeição</MealScreenTitle>
          </MealHeader>
          <MealContent>
            <View>
              <MealTitle>{meal.name}</MealTitle>
              <MealDescription>{meal.description}</MealDescription>
              <MealTitleSmall>Data e hora</MealTitleSmall>
              <MealDescription>
                {meal.date} às {meal.time}
              </MealDescription>
              <MealTagContainer>
                <MealTagDecoration isOnDiet={meal.onDiet} />
                <MealTagText>
                  {meal.onDiet ? 'dentro da dieta' : 'fora da dieta'}
                </MealTagText>
              </MealTagContainer>
            </View>
            <MealButtons>
              <Button
                title="Editar refeição"
                hasIcon="edit"
                onPress={() => handleEditMeal('id')}
              />
              <Button
                title="Excluir refeição"
                hasIcon="remove"
                type="secondary"
                onPress={() => setModalVisible(true)}
              />
            </MealButtons>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible)
              }}
              onDismiss={() => {}}
            >
              <ModalView>
                <ModalContainer>
                  <ModalText>
                    Deseja realmente excluir o registro da refeição?
                  </ModalText>
                  <ModalActions>
                    <Button
                      title="Cancelar"
                      type="secondary"
                      style={{ flex: 1 }}
                      onPress={() => setModalVisible(!modalVisible)}
                    />
                    <Button title="Sim, excluir" style={{ flex: 1 }} />
                  </ModalActions>
                </ModalContainer>
              </ModalView>
            </Modal>
          </MealContent>
        </MealContainer>
      ) : (
        <Text>loading</Text>
      )}
    </>
  )
}
