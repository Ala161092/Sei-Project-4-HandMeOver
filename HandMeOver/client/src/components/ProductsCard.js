import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, brand, image, name, price }) => {
  // const navigate = useNavigate()

  return (
    <div className='product'>
      <img src={image}></img>
      <h4 className='brand-name'>{brand}</h4>
      <Link className='product-description' to={`/bags/${id}`}>{name}</Link>
      <p className='product-price'>£ {price}</p>
    </div>
  )
}

export default ProductCard
