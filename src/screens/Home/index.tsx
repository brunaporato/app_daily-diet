import {
  Avatar,
  HeaderContainer,
  HomeContainer,
  HomeText,
  ListHeader,
  PercentCard,
  PercentLinkIcon,
  PercentSpan,
  PercentText,
  TouchableIcon,
} from './styles'
import { FlatList, Image } from 'react-native'
import LogoImg from '../../assets/Logo.png'
import { Button } from '../../components/Button'
import { ListDay } from '../../components/ListDay'

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>
        <Image source={LogoImg} alt="Daily Diet's logo" />
        <Avatar src="https://github.com/brunaporato.png" />
      </HeaderContainer>
      <PercentCard>
        <TouchableIcon>
          <PercentLinkIcon />
        </TouchableIcon>
        <PercentText>90,86%</PercentText>
        <PercentSpan>das refeições dentro da dieta</PercentSpan>
      </PercentCard>
      <ListHeader>
        <HomeText>Refeições</HomeText>
        <Button hasIcon title="Nova refeição" />
      </ListHeader>
      <FlatList
        data={['oi']}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ListDay />}
      />
    </HomeContainer>
  )
}
