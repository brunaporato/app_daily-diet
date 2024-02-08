/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })
  return (
    <View>
      <StatusBar style="auto" />
      {fontsLoaded ? <h1> app </h1> : 'loading'}
    </View>
  )
}
