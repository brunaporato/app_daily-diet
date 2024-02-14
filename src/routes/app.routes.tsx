import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Dashboard } from '../screens/Dashboard'
import { NewMeal } from '../screens/NewMeal'
import { EditMeal } from '../screens/EditMeal'
import { MealDetails } from '../screens/MealDetails'
import { Success } from '../screens/Success'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="new-meal" component={NewMeal} />
      <Screen name="edit-meal" component={EditMeal} />
      <Screen name="meal-details" component={MealDetails} />
      <Screen name="success" component={Success} />
    </Navigator>
  )
}
