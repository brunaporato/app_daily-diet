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

export function Success() {
  const isOnDiet = false // vai vir de route params

  return (
    <SuccessContainer>
      <SuccessTitle isOnDiet={isOnDiet}>
        {isOnDiet ? 'Continue assim!' : 'Que pena!'}
      </SuccessTitle>
      <SuccessSubtitle>
        {isOnDiet ? (
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
      <SuccessImage source={isOnDiet ? ImageOnDiet : ImageOutOfDiet} />
      <Button title="Ir para página inicial" />
    </SuccessContainer>
  )
}
