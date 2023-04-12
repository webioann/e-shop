import React from 'react'
import { Routes, Route } from "react-router-dom"
import Container from './Container'
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import Home_page from './Home_page'
import Account_page from './Profile_page'
import Cart_page from './Cart_page'
import Checkout_page from './Checkout_page'
import Login_page from './Login_page'
import ProductDetails_page from './ProductDetails_page'
import Shop_page from './Shop_page'
import Signup_page from './Signup_page'
import Notfound_page from './Notfound_page'
import Navigation from './Navigation'
import AccountEntryPoint from './AccountEntryPoint'
import CartIcon from './CartIcon'
import TEST from './TEST'
import { useAuthStateCurrentUser } from '../hooks/useAuthStateCurrentUser'
import { useAppSelector } from '../redux/store'

const  App: React.FC = () => {

  useAuthStateCurrentUser();
  const currentUser = useAppSelector(state => state.auth.currentUser)

  return (
    <Container>
      <Header>
        <Navigation/>
        <AccountEntryPoint/>
        <CartIcon/>
      </Header>
      <Main>
        <TEST/>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="shop" element={<Shop_page />} />
          <Route path="shop/:id" element={<ProductDetails_page />} />
          <Route path="cart" element={<Cart_page />}/>
          <Route path="login" element={<Login_page />}/>
          <Route path="signup" element={<Signup_page />}/>
          <Route path="*" element={<Notfound_page />} />
          { currentUser &&  <Route path="profile" element={<Account_page />}/>}
          { currentUser &&  <Route path="checkout" element={<Checkout_page />} />}
        </Routes>
      </Main>
      <Footer/>
    </Container>
  )
}
export default App;
