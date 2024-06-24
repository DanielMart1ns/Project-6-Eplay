import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Products from './pages/Products'

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/categories',
//     element: <Categories />
//   }
// ])

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/products/:id" element={<Products />} />
  </Routes>
)

export default RoutesComponent
