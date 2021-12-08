import React from 'react'

const DetailedProductCard = ({
  name,
  brand,
  description,
  condition,
  price,
  image,
  image2,
  image3,
}) => {
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <h4>{brand}</h4>
        <p>{condition}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <div>
        <button>Add To Bag</button>
        <button>Add To Wishlist</button>
      </div>
      <div>
        <img src={image}></img>
        <img src={image2}></img>
        <img src={image3}></img>
      </div>
    </div>
  )
}

export default DetailedProductCard
