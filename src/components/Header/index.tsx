import { HeaderBar, Links, LinkItem, LinkKart } from './styles'
import logo from '../../assets/images/logo.svg'
import kart from '../../assets/images/kart.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="Eplay" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>

    <LinkKart href="#">
      0 - Produtos(s)
      <img src={kart} alt="Carrinho" />
    </LinkKart>
  </HeaderBar>
)

export default Header
