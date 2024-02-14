import { useState } from 'react'
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
import { TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

interface RouteParams {
  id: string
}

export function EditMeal() {
  const [formattedDate, setFormattedDate] = useState('12/08/2022')
  const [formattedTime, setFormattedTime] = useState('16:00')
  const [isOnDiet, setIsOnDiet] = useState('negative')

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

  return (
    <EditMealContainer>
      <EditMealHeader>
        <TouchableOpacity onPress={handleReturn}>
          <ReturnIcon />
        </TouchableOpacity>
        <EditMealTitle>Editar refeição</EditMealTitle>
      </EditMealHeader>
      <EditMealContent>
        <TextInput label="Nome" value="Sanduíche" />
        <TextInput
          label="Descrição"
          multiline
          style={{ height: 140 }}
          value="Sanduíche de pão integral com atum e salada de alface e tomate"
        />
        <DateTimeContainer>
          <TextInput
            label="Data"
            parentStyle={{ flex: 1 }}
            keyboardType="number-pad"
            placeholder="DD/MM/AA"
            onChangeText={(text) => handleDateChange(text)}
            value={formattedDate}
          />
          <TextInput
            label="Hora"
            parentStyle={{ flex: 1 }}
            keyboardType="number-pad"
            placeholder="HH:MM"
            onChangeText={(text) => handleTimeChange(text)}
            value={formattedTime}
          />
        </DateTimeContainer>
        <Label>Está dentro da dieta?</Label>
        <SelectOnDiet>
          <Select
            type="positive"
            isActive={isOnDiet === 'positive'}
            onPress={() => toggleIsOnDiet('positive')}
          />
          <Select
            type="negative"
            isActive={isOnDiet === 'negative'}
            onPress={() => toggleIsOnDiet('negative')}
          />
        </SelectOnDiet>
        <Button
          title="Salvar alterações"
          onPress={() => handleEditMealSuccess(isOnDiet === 'positive')}
        />
      </EditMealContent>
    </EditMealContainer>
  )
}
