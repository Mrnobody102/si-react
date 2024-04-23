import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/homepage/Home'
import Main from '../apps/Main'
import Auth from '../pages/auth/Auth'
import Layout from '../layouts/Layout'
import Categories from '../pages/categories/Categories'
import Details from '../pages/details/Details'
import Wishlist from '../pages/wishlist/Wishlist'
import Cart from '../pages/cart/Cart'
import Payment from '../pages/payment/Payment'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'wishlist',
        element: <Wishlist />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'lo-hoa',
        element: <Layout locator='Lọ hoa' children={<Categories name='Lọ hoa' />} />
      },
      {
        path: 'lo-hoa/:id',
        element: <Layout locator='Lọ hoa' children={<Details id={'1'} />} />
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />
  }
])

export default routes
