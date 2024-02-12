import { TouchableOpacity } from 'react-native'
import {
  DateTimeContainer,
  NewMealContainer,
  NewMealContent,
  NewMealHeader,
  NewMealTitle,
  ReturnIcon,
} from './styles'
import { TextInput } from '../../components/TextInput'
import { useState } from 'react'

export function NewMeal() {
  const [formattedDate, setFormattedDate] = useState('')
  const [formattedTime, setFormattedTime] = useState('')

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
        const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`
        setFormattedTime(formattedTime)
      } else {
        setFormattedTime('')
      }
    } else {
      setFormattedTime(formattedText)
    }
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
            keyboardType="decimal-pad"
            placeholder="DD/MM/AA"
            onChangeText={(text) => handleDateChange(text)}
            value={formattedDate}
          />
          <TextInput
            label="Hora"
            parentStyle={{ flex: 1 }}
            keyboardType="decimal-pad"
            placeholder="HH:MM"
            onChangeText={(text) => handleTimeChange(text)}
            value={formattedTime}
          />
        </DateTimeContainer>
      </NewMealContent>
    </NewMealContainer>
  )
}
