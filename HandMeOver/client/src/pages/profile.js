// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductsCard'
import { getSingleUser } from '../helpers/api'
// import { getToken } from '../helpers/auth'

const Profile = () => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    profile_image: '',
    email: '',
    wishlist: [],
  })

  useEffect(() => {
    getSingleUser().then(setUser)
  }, [])

  return (
    <div className='profile-wrapper'>
      <div>
        <h1 className='form-title'>Your Account</h1>
      </div>
      {user ? (
        <div>
          <div className='profile-card'>
            <img src={user.profile_image} />
            <h3>Hello, {user.first_name} {user.last_name}</h3>
          </div> 
          <h3>Wishlist:</h3>
          <div className='wishlist-container'>
            {user.wishlist.map((product)=> (
              <div className='wishlist' key={product.id}>
                <ProductCard {...product}/>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Link to='/register'></Link>
          or
          <Link to='/signin'></Link>
        </div>
      )}
    </div>
  )
}

export default Profile
