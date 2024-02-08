import { Avatar, HeaderContainer, HomeContainer } from './styles'
import { Image } from 'react-native'
import LogoImg from '../../assets/Logo.png'

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <Image source={LogoImg} alt="Daily Diet's logo" />
        <Avatar src="https://github.com/brunaporato.png" />
      </HeaderContainer>
    </HomeContainer>
  )
}
