/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { ThemeProvider } from 'styled-components'
import theme from './src/theme'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {fontsLoaded ? <Routes /> : <Text>loading</Text>}
    </ThemeProvider>
  )
}
