import Tag from '../Tag'
import { Card, Description, Title } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Title>Nome do jogo</Title>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi
      assumenda architecto sint, quibusdam adipisci, iste eveniet minus
      exercitationem vel illum esse porro magnam beatae culpa iusto similique
      velit repellat?
    </Description>
  </Card>
)

export default Product
