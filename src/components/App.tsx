import React from 'react'
import { Routes, Route } from "react-router-dom"

import Home_page from '../pages/Home_page'
import Cart_page from '../pages/Cart_page'
import Checkout_page from '../pages/Checkout_page'
import Login_page from '../pages/Login_page'
import ProductDetails_page from '../pages/ProductDetails_page'
import Shop_page from '../pages/Shop_page'
import Signup_page from '../pages/Signup_page'
import Notfound_page from '../pages/Notfound_page'

const  App: React.FC = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home_page />} />
      <Route path="/shop" element={<Shop_page />} />
      <Route path="/shop/ :id" element={<ProductDetails_page />} />
      <Route path="/cart" element={<Cart_page />} />
      <Route path="/checkout" element={<Checkout_page />} />
      <Route path="/login" element={<Login_page />} />
      <Route path="/signup" element={<Signup_page />} />
      <Route path="*" element={<Notfound_page />} />
    </Routes>
  )
}

export default App;
