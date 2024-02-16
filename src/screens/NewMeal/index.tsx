import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
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
import { useNavigation } from '@react-navigation/native'
import { MealProps, createMeal } from '../../storage/meal/createMeal'
import { AppError } from '../../utils/AppError'

export function NewMeal() {
  const [formattedDate, setFormattedDate] = useState('')
  const [formattedTime, setFormattedTime] = useState('')
  const [isOnDiet, setIsOnDiet] = useState('')

  const [name, SetName] = useState('')
  const [description, setDescription] = useState('')

  const navigation = useNavigation()

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
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0').padEnd(2, '0')}`
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

  async function handleCreateMeal(onDiet: boolean) {
    try {
      if (
        name.trim().length === 0 ||
        description.trim().length === 0 ||
        formattedDate.length === 0 ||
        formattedTime.length === 0 ||
        isOnDiet.length === 0
      ) {
        return Alert.alert(
          'Erro',
          'Você precisa digitar todos os dados para cadastrar uma nova refeição.',
        )
      }

      const meal: MealProps = {
        id: `${name}-${formattedDate}-${formattedTime}`,
        name,
        description,
        date: formattedDate,
        time: formattedTime,
        onDiet: isOnDiet === 'positive',
      }
      await createMeal(meal)
      return navigation.navigate('success', { onDiet })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message)
      } else {
        Alert.alert(
          'Nova refeição',
          'Não foi possível criar a refeição, tente novamente.',
        )
        console.log(error)
      }
    }
  }

  function handleReturn() {
    navigation.navigate('home')
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === 'ios'}
      behavior="padding"
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <NewMealContainer>
          <NewMealHeader>
            <TouchableOpacity onPress={handleReturn}>
              <ReturnIcon />
            </TouchableOpacity>
            <NewMealTitle>Nova refeição</NewMealTitle>
          </NewMealHeader>
          <NewMealContent>
            <TextInput
              label="Nome"
              onChangeText={SetName}
              value={name}
              returnKeyType="next"
            />
            <TextInput
              label="Descrição"
              multiline
              style={{ height: 140 }}
              onChangeText={setDescription}
              value={description}
              returnKeyType="next"
              returnKeyLabel="next"
              blurOnSubmit={true}
              onSubmitEditing={() => Keyboard.dismiss()}
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
                returnKeyLabel="done"
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
              title="Cadastrar refeição"
              onPress={() => handleCreateMeal(isOnDiet === 'positive')}
            />
          </NewMealContent>
        </NewMealContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
