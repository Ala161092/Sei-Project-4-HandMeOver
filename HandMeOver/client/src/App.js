import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
// import Ala from './components/footer'
import Products from './pages/Products'
import Menu from './components/Nav'
//import ProductAdd from './pages/productAdd'
import Profile from './pages/Profile'
import Header from './components/Header'
import SingleProduct from './components/SingleProduct'
import CartItems from './pages/Cart'
import ModalExample from './components/ProductAdd'
import Ala from './pages/Swiper'
import About from './pages/About'


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
          <Route path="/sellBag" element={<ModalExample />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/mycart" element={<CartItems />}/>
          <Route path="/ala" element={<Ala />}/> 
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
