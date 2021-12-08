import React from 'react'
import ProductsList from '../components/products'
// import ProductCard from "../components/ProductsCard

const Products = () => {
  return (
    <div className='products-container'>
      <h1 className='bag-header'>Bags</h1>
      <div className='ala'>
        <ProductsList />
      </div>
    </div>
  )
}

export default Products
