import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Select } from '../../components/Select'
import { TextInput } from '../../components/TextInput'
import {
  DateTimeContainer,
  EditMealContainer,
  EditMealContent,
  EditMealHeader,
  EditMealTitle,
  Label,
  ReturnIcon,
  SelectOnDiet,
} from './styles'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MealProps } from '../../storage/meal/createMeal'
import { getMealById } from '../../storage/meal/getMealById'

interface RouteParams {
  id: string
}

export function EditMeal() {
  const [formattedDate, setFormattedDate] = useState('')
  const [formattedTime, setFormattedTime] = useState('')
  const [isOnDiet, setIsOnDiet] = useState('')
  const [editMealInfo, setEditMealInfo] = useState<MealProps>()

  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as RouteParams

  function handleDateChange(text: string) {
    const cleanedText = text.replace(/\D/g, '')

    const formattedText = cleanedText
      .slice(0, 8)
      .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
    setFormattedDate(formattedText)
  }

  function handleTimeChange(text: string) {
    const cleanedText = text.replace(/\D/g, '')

    const formattedText = cleanedText
      .slice(0, 4)
      .replace(/(\d{2})(\d{2})/, '$1:$2')

    if (formattedText.length === 5) {
      const [hours, minutes] = formattedText
        .split(':')
        .map((part) => parseInt(part, 10))

      const isValidTime =
        hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59

      if (isValidTime) {
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
        setFormattedTime(formattedTime)
      } else {
        setFormattedTime('')
      }
    } else {
      setFormattedTime(formattedText)
    }
  }

  function toggleIsOnDiet(type: string) {
    setIsOnDiet(type)
  }

  function handleReturn() {
    navigation.navigate('meal-details', { id })
  }

  function handleEditMealSuccess(onDiet: boolean) {
    navigation.navigate('success', { onDiet })
  }

  useEffect(() => {
    async function fetchMeal() {
      const editMeal = await getMealById(id)
      setEditMealInfo(editMeal)
    }

    fetchMeal()
  }, [id])

  return (
    <>
      {editMealInfo ? (
        <EditMealContainer>
          <EditMealHeader>
            <TouchableOpacity onPress={handleReturn}>
              <ReturnIcon />
            </TouchableOpacity>
            <EditMealTitle>Editar refeição</EditMealTitle>
          </EditMealHeader>
          <EditMealContent>
            <TextInput label="Nome" value={editMealInfo.name} />
            <TextInput
              label="Descrição"
              multiline
              style={{ height: 140 }}
              value={editMealInfo.description}
            />
            <DateTimeContainer>
              <TextInput
                label="Data"
                parentStyle={{ flex: 1 }}
                keyboardType="number-pad"
                placeholder="DD/MM/AA"
                onChangeText={(text) => handleDateChange(text)}
                value={editMealInfo.date}
              />
              <TextInput
                label="Hora"
                parentStyle={{ flex: 1 }}
                keyboardType="number-pad"
                placeholder="HH:MM"
                onChangeText={(text) => handleTimeChange(text)}
                value={editMealInfo.time}
              />
            </DateTimeContainer>
            <Label>Está dentro da dieta?</Label>
            <SelectOnDiet>
              <Select
                type="positive"
                isActive={editMealInfo.onDiet}
                onPress={() => toggleIsOnDiet('positive')}
              />
              <Select
                type="negative"
                isActive={!editMealInfo.onDiet}
                onPress={() => toggleIsOnDiet('negative')}
              />
            </SelectOnDiet>
            <Button
              title="Salvar alterações"
              onPress={() => handleEditMealSuccess(isOnDiet === 'positive')}
            />
          </EditMealContent>
        </EditMealContainer>
      ) : (
        <Text>loading</Text>
      )}
    </>
  )
}
