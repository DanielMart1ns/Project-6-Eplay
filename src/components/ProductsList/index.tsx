import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          image="//placehold.it/222x250"
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="teste"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          image="//placehold.it/222x250"
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="teste"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          image="//placehold.it/222x250"
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="teste"
          infos={['-10%', 'R$ 150']}
        />
        <Product
          image="//placehold.it/222x250"
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="teste"
          infos={['-10%', 'R$ 150']}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
