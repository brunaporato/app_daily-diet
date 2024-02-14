import {
  SuccessContainer,
  SuccessImage,
  SuccessSubtitle,
  SuccessSubtitleStrong,
  SuccessTitle,
} from './styles'

import ImageOnDiet from '../../assets/Illustration-OnDiet.png'
import ImageOutOfDiet from '../../assets/Illustration-OutOfDiet.png'
import { Button } from '../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'

interface RouteParams {
  onDiet: boolean
}

export function Success() {
  const navigation = useNavigation()

  const route = useRoute()
  const { onDiet } = route.params as RouteParams

  function handleHomeScreen() {
    navigation.navigate('home')
  }

  return (
    <SuccessContainer>
      <SuccessTitle isOnDiet={onDiet}>
        {onDiet ? 'Continue assim!' : 'Que pena!'}
      </SuccessTitle>
      <SuccessSubtitle>
        {onDiet ? (
          <>
            Você continua{' '}
            <SuccessSubtitleStrong>dentro da dieta</SuccessSubtitleStrong>.
            Muito bem!
          </>
        ) : (
          <>
            Você <SuccessSubtitleStrong>saiu da dieta</SuccessSubtitleStrong>{' '}
            dessa vez, mas continue se esforçando e não desista!
          </>
        )}
      </SuccessSubtitle>
      <SuccessImage source={onDiet ? ImageOnDiet : ImageOutOfDiet} />
      <Button title="Ir para página inicial" onPress={handleHomeScreen} />
    </SuccessContainer>
  )
}
