import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../helpers/api'
import DetailedProductCard from './DetailedProductCard'
import { Comment } from 'semantic-ui-react'
import { addCartItem, getPayload, isAuthenticated } from '../helpers/auth'
import { getSingleUser } from '../helpers/api'

const SingleProduct = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const [addCardText, setAddCartText] = useState(false)

  const payload = getPayload()
  const [formData, setFormData] = useState({
    text: '',
    rating: '',
    product: id,
    //owner: ,
  })

  console.log('payloaddd--->', payload.sub)

  const [userData, setUserData] = useState({
    wishlist: [],
  })

  useEffect(() => {
    getSingleUser().then(setUserData)
  }, [])

  useEffect(() => {
    getSingleProduct(id).then(setProduct)
  }, [id])
  console.log('userr--->', userData)
  console.log('product---->', product)

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
      formData.text = ''
      formData.rating = ''
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
      getSingleProduct(id).then(setProduct)
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
      setAddCartText(true)
      console.log('itemmcart--->', product)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const isLoggedIn = isAuthenticated()
  if (!product) {
    return <p>loading Product</p>
  }
  return (
    <div className='single-product-wrapper'>
      <div className='esra'>
        <DetailedProductCard {...product} />
        <div className='button-container'>
          <button onClick={handleAddToWishlist}>Add To Wish List</button>
          <button onClick={handleAddToCart}>{addCardText ? 'Item Added to Cart' : 'Add Item To Cart'}</button>
        </div>
      </div>
      <div className='review-wrapper'>
        <h3>Thoughts On Bag:</h3>
        <div className='reviews-container'>
          <div className='review-show'>
            <Comment.Group className='comment-container'>
              {product.reviews.map((review) => (
                <Comment key={review.id} className='comment-card'>
                  <Comment.Avatar src={review.owner.profile_image} />
                  <Comment.Content >
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
            </Comment.Group>
          </div>
          <div className='review-write'>
            {isLoggedIn ? (
              <>
                <form onSubmit={handleAddReview}>
                  <div>
                    <label className='review-header'>
                      Review: {product.name}
                    </label>
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
                    Rate the bag:
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
                    className='home-cta'
                    type='submit'
                    value='Add My Review'
                  />
                </form>
              </>
            ) : (
              <p>Please Log in to leave a review</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
