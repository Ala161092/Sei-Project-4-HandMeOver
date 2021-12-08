import axios from 'axios'
import React, { useEffect, useState } from 'react'

// import { getItems } from '../helpers/api'

const CartItems = () => {
  const [cartItems, setCartItems] = useState([])
  const [render, setRender] = useState()
 

  let renderCount = 0



  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem('token')
      try {
        const response = await axios.get('/api/cart', {
          headers: { Authorization: `Bearer ${token}` },
        }) 
        setCartItems(response)
      } catch (err) {
        console.log(err)
        
      }
    }
    getData()

    // getItems().then(setCartItems)
  }, [render])

  if (!cartItems.data.length) {
    renderCount += 1
    setTimeout(() => {
      setRender(renderCount)
      
    }, 1000)
  }
  
  
  //console.log(cartItems[0].product.name)
  //console.log('cart-items-->', cartItems[0].product.name)

  // for (let i = 0; i < cartItems.length; i++) {
  //   const cart = cartItems[i].product
  //   console.log('cart-items-->', cartItems)
  //   console.log('cart-->', cart)
  //   setCart(cart)
  // }
 
   
  

  console.log('cartitems-->', cartItems)
  console.log('cartitems--->', cartItems.data)
  return (
    <div>
      {cartItems.length && cartItems.map((cartItem, i) => {
        <div key={i}>
          <p>{cartItem.product.description}</p>
          <p>{cartItem.product.price}</p>
          <img src={cartItem.product.image}/>
        </div>
      })}
    </div>
  )
}


export default CartItems
