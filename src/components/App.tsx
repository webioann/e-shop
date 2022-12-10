import React from 'react'
import { Routes, Route } from "react-router-dom"
import Container from '../layout/Container/Container'
import Main from '../layout/Main/Main'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'
import Home_page from '../pages/Home/Home_page'
import Account_page from '../pages/Account/Account_page'
import Cart_page from '../pages/Cart/Cart_page'
import Checkout_page from '../pages/Checkout/Checkout_page'
import Login_page from '../pages/Login/Login_page'
import ProductDetails_page from '../pages/ProductDetails/ProductDetails_page'
import Shop_page from '../pages/Shop/Shop_page'
import Signup_page from '../pages/Signup/Signup_page'
import Notfound_page from '../pages/Notfound/Notfound_page'
import Navigation from '../layout/Navigation/Navigation'
import AccountEntryPoint from '../components/AccountEntryPoint/AccountEntryPoint'
import CartIcon from '../components/CartIcon/CartIcon'

const  App: React.FC = () => {
  
  return (
    <Container>
      <Header>
        <Navigation/>
        <AccountEntryPoint/>
        <CartIcon/>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="shop" element={<Shop_page />} />
          <Route path="shop/:id" element={<ProductDetails_page />} />
          <Route path="cart" element={<Cart_page />}/>
          <Route path="account" element={<Account_page />}/>
          <Route path="login" element={<Login_page />}/>
          <Route path="signup" element={<Signup_page />}/>
          <Route path="checkout" element={<Checkout_page />} />
          <Route path="*" element={<Notfound_page />} />
        </Routes>
      </Main>
      <Footer/>
    </Container>
  )
}
export default App;
