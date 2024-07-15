import { Link } from 'react-router-dom'
import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburger,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import kart from '../../assets/images/kart.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburger
            onClick={() => {
              setMenuIsOpen(!menuIsOpen)
            }}
          >
            <span />
            <span />
            <span />
          </Hamburger>
          <Link to="/">
            <img src={logo} alt="Eplay" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categories">Categorias</Link>
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

        <CartButton onClick={openCart}>
          {items.length} <span>- Produtos(s)</span>
          <img src={kart} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={menuIsOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
