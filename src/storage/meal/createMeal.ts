/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { getMeals } from './getMeals'

export interface MealProps {
  id: string
  name: string
  description: string
  date: string
  time: string
  onDiet: boolean
}

interface CreateMealProps {
  meal: MealProps
}

export async function createMeal({ meal }: CreateMealProps) {
  try {
    const storedMeals = await getMeals()

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...storedMeals, meal]),
    )
  } catch (error) {
    throw error
  }
}
