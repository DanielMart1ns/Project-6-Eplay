import Tag from '../Tag'
import * as S from './styles'

type Props = {
  image: string
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  id: number
}

const Product = ({
  image,
  title,
  category,
  system,
  description,
  infos,
  id
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }

    return text
  }

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/products/${id}`}
    >
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

export default Product
