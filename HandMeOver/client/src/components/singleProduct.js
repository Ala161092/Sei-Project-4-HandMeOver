import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../helpers/api'
import DetailedProductCard from './detailedProductCard'
import { Comment } from 'semantic-ui-react'
import { addCartItem, getPayload } from '../helpers/auth'
import { getSingleUser } from '../helpers/api'
import { isLoggedIn } from '../helpers/auth'

const SingleProduct = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  const payload = getPayload()
  const [formData, setFormData] = useState({
    text: '',
    rating: '',
    product: id,
    owner: payload.sub,
  })

  const [userData, setUserData] = useState({
    wishlist: [],
  })

  useEffect(() => {
    getSingleUser().then(setUserData)
  }, [])

  useEffect(() => {
    getSingleProduct(id).then(setProduct)
  }, [id])

  const handleAddReview = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    try {
      const { data } = await axios.post('/api/reviews/', formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log('reviews---->', data)
      getSingleProduct(id).then(setProduct)
      setFormData(formData)
    } catch (err) {
      console.log(err)
    }
  }

  const handleAddToWishlist = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const newData = { ...userData } 
    newData.wishlist = newData.wishlist.map((wish) => wish.id)
    console.log('neww--->', newData.wishlist)
    try {
      const updatedWishlist = await axios.put('/api/auth/profile/', newData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log('updted--->', updatedWishlist)
      getSingleUser().then(setUserData)
      
    } catch (err) {
      console.log(err)
    }
  }
 
  const handleAddToCart = async () => {
    try {
      await addCartItem({
        product: id,
        items_in_cart: 1, 
      })
      console.log('itemmcart--->', product)
    } catch (err) {
      console.log(err)
      
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const loggedIn = isLoggedIn()
  if (!product) {
    return <p>loading Product</p>
  }
  return (
    <div className='row'>
      <DetailedProductCard {...product} />
      <button onClick={handleAddToWishlist}>Add To Wish List</button>
      <button onClick={handleAddToCart}>Add Item To Bag</button>
      <>
        <Comment.Group>
          {product.reviews.map((review) => (
            <Comment key={review.id}>
              <Comment.Avatar src={review.owner.profile_image} />
              <Comment.Content>
                <Comment.Author>
                  {review.owner.first_name} {review.owner.last_name}
                </Comment.Author>
                <Comment.Text>
                  <p>{review.text}</p>
                  <p>Rating: {review.rating}</p>
                </Comment.Text>
              </Comment.Content>
            </Comment>
          ))}
          {loggedIn && (
            <form onSubmit={handleAddReview}>
              <div>
                <label>Review: {product.name}</label>
              </div>
              <div>
                <textarea
                  onChange={handleChange}
                  name='text'
                  value={formData.text}
                  placeholder='Leave A Review'
                ></textarea>
              </div>
              <div>
                <input
                  type='number'
                  onChange={handleChange}
                  name='rating'
                  min='1'
                  max='5'
                  value={formData.rating}
                />
              </div>
              <input
                className='review-submit'
                type='submit'
                value='Add My Review'
              />
            </form>
          )}
          <p>Please Log in to leave a review</p>
        </Comment.Group>
      </>
    </div>
  )
}

export default SingleProduct
