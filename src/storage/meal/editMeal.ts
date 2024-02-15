/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MealProps } from './createMeal'
import { getMeals } from './getMeals'
import { MEAL_COLLECTION } from '../storageConfig'
import { deleteMeal } from './deleteMeal'

export async function editMeal(updatedMeal: MealProps) {
  try {
    await deleteMeal(updatedMeal.id)
    const storedMeals = await getMeals()

    const mealsWithEdited = [...storedMeals, updatedMeal]

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsWithEdited))
  } catch (error) {
    throw error
  }
}
