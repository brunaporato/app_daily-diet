/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storageConfig'
import { MealProps } from './createMeal'

export async function getMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealProps[] = storage ? JSON.parse(storage) : []

    meals.sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split('/').map(Number)
      const [hourA, minuteA] = a.time.split(':').map(Number)
      const dateA = new Date(yearA, monthA - 1, dayA, hourA, minuteA)

      const [dayB, monthB, yearB] = b.date.split('/').map(Number)
      const [hourB, minuteB] = b.time.split(':').map(Number)
      const dateB = new Date(yearB, monthB - 1, dayB, hourB, minuteB)

      if (dateB.getDate() === dateA.getDate()) {
        return dateA.getTime() - dateB.getTime()
      } else {
        return dateB.getTime() - dateA.getTime()
      }
    })

    return meals
  } catch (error) {
    throw error
  }
}
