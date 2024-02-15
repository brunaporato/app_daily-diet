import { getMeals } from './getMeals'

export async function getMealById(id: string) {
  const meals = await getMeals()

  return meals.find((meal) => meal.id === id)
}
