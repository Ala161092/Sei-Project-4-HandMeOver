import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Menu from '../components/nav.js'


const Login = () => {
  const [error, setError] = useState('')
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('api/auth/login/', loginData)
      if (data.token) {
        localStorage.setItem('token', data.token)
        const token = data.token
        console.log('Token---->', token)
        handleLogin()
      }
    } catch (err) {
      console.log(err)
      setError('Please check email or password.')
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setLoginData({ ...loginData, [name]: value })
  }

  const handleLogin = () => {
    console.log('LoginSuccessfull')
    navigate('/')

  }

  return (
    <div>
      <Menu />
      <div className='form-wrapper'>
        <h2 className='form-title'>Sign In</h2>
        <form className='form'onSubmit={handleSubmit}>
          <input
            placeholder='Enter Your Email'
            type='email'
            name='email'
            value={loginData.email}
            onChange={handleChange}
          />
          <input
            placeholder='Enter Your Password'
            type='password'
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <input className='submit' type='submit' value='Sign In' />
        </form>
        <p>{error}</p>
      </div>
    </div>
  )
}

export default Login
