// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductsCard'
import { getSingleUser } from '../helpers/api'
import { isAuthenticated } from '../helpers/auth'
// import { getToken } from '../helpers/auth'

const Profile = () => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    profile_image: '',
    email: '',
    wishlist: [],
  })
  const isLoggedIn = isAuthenticated()

  useEffect(() => {
    getSingleUser().then(setUser)
  }, [])


  return (
    <div className='profile-wrapper'>
      <div>
        <h1 className='form-title'>Your Account</h1>
      </div>
      {isLoggedIn ? (
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
          <p>You are not Logged in! Please Sign In if you have an account or Register now.</p>
          <Link className='login-cta' to='/login'>Sign In</Link>
          <Link className='register-cta' to='/register'>Register</Link>
        </div>
      )}
    </div>
  )
}

export default Profile
