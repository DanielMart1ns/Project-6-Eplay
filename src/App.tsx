import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'
import RoutesComponent from './routes'
import Footer from './components/Footer'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <RoutesComponent />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
