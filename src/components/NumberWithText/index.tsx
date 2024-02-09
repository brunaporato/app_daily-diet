import { TitleNumber, TitleSpan } from './styles'

interface NumberWithTextProps {
  title: string
  span: string
}

export function TitleNumberSpan({ title, span }: NumberWithTextProps) {
  return (
    <>
      <TitleNumber>{title}</TitleNumber>
      <TitleSpan>{span}</TitleSpan>
    </>
  )
}
