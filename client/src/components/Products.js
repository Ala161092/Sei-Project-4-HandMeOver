import React, { useEffect, useState } from 'react'
import { getProducts } from '../helpers/api'
import ProductCard from './ProductsCard'

const ProductsList = () => {
  const [products, setProductsDefault] = useState([])
  const [query, setSearchQuery] = useState('')

  useEffect(() => {
    getProducts().then(setProductsDefault)
  }, [])

  return (
    <div className='products-wrapper'>
      <div className='search-wrapper'>
        <input
          className='search-bar'
          placeholder='Search Brand'
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>
      <div className='product-wrapper'>
        {products
          .filter((product) => {
            if (query === '') {
              return product
            } else if (
              product.brand.toLowerCase().includes(query.toLowerCase())
            ) {
              return product
            }
          })
          .map((product) => (
            <div key={product.id} className='product-container'>
              <ProductCard {...product} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProductsList
