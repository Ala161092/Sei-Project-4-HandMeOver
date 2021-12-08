import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
// import Ala from './components/footer'
import Products from './pages/products'
import Menu from './components/nav'
import ProductAdd from './pages/productAdd'
import Profile from './pages/profile'
import Header from './components/header'
import SingleProduct from './components/singleProduct'
import CartItems from './pages/cart'


//import ProductList from './components/products'
// import axios from 'axios'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        {/* <Ala /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/bags" element={<Products />}/>
          <Route path="/bags/:id" element={<SingleProduct />} />
          <Route path="/sellBag" element={<ProductAdd />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/mycart" element={<CartItems />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
