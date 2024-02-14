/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { MealProps } from './createMeal'

export async function getMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealProps[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    throw error
  }
}
