import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eee',
  black: '#111',
  gray: '#333',
  lightGray: '#A3A3A3',
  green: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body{
    background-color: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
