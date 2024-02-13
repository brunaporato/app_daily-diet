/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { MealDetails } from './src/screens/Meal'
import { ThemeProvider } from 'styled-components'
import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {fontsLoaded ? <MealDetails /> : <Text>loading</Text>}
    </ThemeProvider>
  )
}
