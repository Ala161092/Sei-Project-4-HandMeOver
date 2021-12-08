import React from 'react'

const ProductCard = ({ brand, image, name, price }) => {
  // const navigate = useNavigate()

  return (
    <div className='product'>
      <h3>{name}</h3>
      <h4>{brand}</h4>
      <img src={image}></img>
      <p>{price}</p>
    </div>
  )
}

export default ProductCard
