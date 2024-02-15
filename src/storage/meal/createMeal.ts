/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { getMeals } from './getMeals'
import { AppError } from '../../utils/AppError'

export interface MealProps {
  id: string
  name: string
  description: string
  date: string
  time: string
  onDiet: boolean
}

export async function createMeal(meal: MealProps) {
  try {
    const storedMeals = await getMeals()
    const mealAlreadyExists = storedMeals.includes(meal)

    if (mealAlreadyExists) {
      throw new AppError('Você já cadastrou uma refeição com esses dados')
    }

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...storedMeals, meal]),
    )
  } catch (error) {
    throw error
  }
}
