import React from 'react'
import ProductsList from '../components/Products'
// import ProductCard from "../components/ProductsCard
import ModalExample from '../components/ProductAdd'

const Products = () => {
  return (
    <div className='products-container'>
      <h1 className='bag-header'>Bags</h1>
      <div className='add-bag'>
        <ModalExample />
      </div>
      <div className='ala'>
        <ProductsList />
      </div>
    </div>
  )
}

export default Products
