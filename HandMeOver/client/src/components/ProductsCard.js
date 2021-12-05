import React from 'react'

const ProductCard = ({ brand, image, name, price }) => {
  // const navigate = useNavigate()

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <h4>{brand}</h4>
        <img src={image}></img>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
