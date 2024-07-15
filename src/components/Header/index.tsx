import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/logo.svg'
import kart from '../../assets/images/kart.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburger,
  HeaderRow,
  NavMobile
} from './styles'

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
          <Link title="Clique aqui para acessar a tela inicial" to="/">
            <img src={logo} alt="Eplay" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
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
            <Link
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
              onClick={() => {
                setMenuIsOpen(false)
              }}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
              onClick={() => {
                setMenuIsOpen(false)
              }}
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
              onClick={() => {
                setMenuIsOpen(false)
              }}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
