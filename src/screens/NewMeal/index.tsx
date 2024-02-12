import { TouchableOpacity } from 'react-native'
import {
  DateTimeContainer,
  Label,
  NewMealContainer,
  NewMealContent,
  NewMealHeader,
  NewMealTitle,
  ReturnIcon,
  SelectOnDiet,
} from './styles'
import { TextInput } from '../../components/TextInput'
import { useState } from 'react'
import { Select } from '../../components/Select'
import { Button } from '../../components/Button'

export function NewMeal() {
  const [formattedDate, setFormattedDate] = useState('')
  const [formattedTime, setFormattedTime] = useState('')
  const [isOnDiet, setIsOnDiet] = useState('')

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

  return (
    <NewMealContainer>
      <NewMealHeader>
        <TouchableOpacity>
          <ReturnIcon />
        </TouchableOpacity>
        <NewMealTitle>Nova refeição</NewMealTitle>
      </NewMealHeader>
      <NewMealContent>
        <TextInput label="Nome" />
        <TextInput label="Descrição" multiline style={{ height: 140 }} />
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
        <Button title="Cadastrar refeição" />
      </NewMealContent>
    </NewMealContainer>
  )
}
