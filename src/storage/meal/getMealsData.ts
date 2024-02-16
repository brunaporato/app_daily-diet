import { getMeals } from './getMeals'

export interface MealsDataProps {
  percentOfMealsOnDiet: number
  bestSeriesOnDiet: number
  totalMealsStored: number
  mealsOnDiet: number
  mealsOutOfDiet: number
}

export async function getMealsData() {
  const storedMeals = await getMeals()

  const numberOfMeals = storedMeals.length

  let onDietCount = 0
  let outOfDietCount = 0
  storedMeals.forEach((meal) => {
    if (meal.onDiet) {
      onDietCount++
    } else {
      outOfDietCount++
    }
  })

  let bestSeries = 0
  let currentSeries = 0

  for (let i = 0; i < storedMeals.length; i++) {
    if (storedMeals[i].onDiet) {
      currentSeries++
      bestSeries = Math.max(bestSeries, currentSeries)
    } else {
      currentSeries = 0
    }
  }

  const percentOfMealsOnDiet = ((onDietCount / numberOfMeals) * 100).toFixed(2)

  const mealsData: MealsDataProps = {
    bestSeriesOnDiet: bestSeries,
    mealsOnDiet: onDietCount,
    mealsOutOfDiet: outOfDietCount,
    percentOfMealsOnDiet: Number(percentOfMealsOnDiet),
    totalMealsStored: numberOfMeals,
  }

  return mealsData
}
