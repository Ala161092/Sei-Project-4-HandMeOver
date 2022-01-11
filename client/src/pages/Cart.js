import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import { deleteBasketItem, getCartItems } from '../helpers/auth'
//import { deleteBasketItem, getCartItems } from '../helpers/auth'


// import { getItems } from '../helpers/api'

const CartItems = () => {
  const [cartItems, setCartItems] = useState([])
  // const { id } = useParams()

  // const [render, setRender] = useState()

  // let renderCount = 0

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem('token')
      try {
        const { data } = await axios.get('/api/cart/', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setCartItems(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()

    // getItems().then(setCartItems)
  }, [])
   

  const handleDeleteItem = async (event) => {
    try {
      await deleteBasketItem(event.target.id)
      const { data } = await getCartItems()
      setCartItems(data)
     
    } catch (err) {
      console.log(err)
    }
  }

  // if (!cartItems.data) {
  //   renderCount += 1
  //   setTimeout(() => {
  //     setRender(renderCount)

  //   }, 1000)
  // }

  //console.log(cartItems[0].product.name)
  //console.log('cart-items-->', cartItems[0].product.name)

  // for (let i = 0; i < cartItems.length; i++) {
  //   const cart = cartItems[i].product
  //   console.log('cart-items-->', cartItems)
  //   console.log('cart-->', cart)
  //   setCart(cart)
  // }

  console.log('cartitems-->', cartItems)

  //console.log('cartitems--->', cartItems.data)
  return (
    <div className='shopping-wrapper'>
      <h2 className='shopping-header'>Shopping Bag</h2>
      {cartItems.length ? (
        <>
          {cartItems.map((cartItem) => (
            <div key={cartItem.id}>
              <p>{cartItem.product.name}</p>
              <p>{cartItem.product.price}</p>
              <img src={cartItem.product.image} />
              <button className='delete-button' id={cartItem.id} onClick={handleDeleteItem}>Delete Item</button>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
      <div>
        <h2> Order Summary</h2>
        <h4>Item Subtotal: </h4>
        <p>
          {cartItems
            .reduce((acc, curr) => {
              return acc + curr.product.price * curr.items_in_cart
            }, 0)
            .toFixed(2)}
        </p>
        <h4>Shipping:</h4>
        <p>Free</p>
        <button>Continue To Checkout</button>
      </div>
    </div>
  )
}

export default CartItems
