import { Modal, TouchableOpacity, View } from 'react-native'
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
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export function MealDetails() {
  const [modalVisible, setModalVisible] = useState(false)
  const isOnDiet = false

  const navigation = useNavigation()

  function handleReturn() {
    navigation.navigate('home')
  }

  function handleEditMeal(id: string) {
    navigation.navigate('edit-meal', { id })
  }

  return (
    <MealContainer isOnDiet={isOnDiet}>
      <MealHeader>
        <TouchableOpacity onPress={handleReturn}>
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
  )
}
