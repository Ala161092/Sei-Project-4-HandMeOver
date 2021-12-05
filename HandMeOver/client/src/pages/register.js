import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ImageUploadFile } from '../components/imageUploadField'
import Menu from '../components/nav'

const Register = () => {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
  })

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('api/auth/register/', formData)
      console.log('data---->', data)
      handleSuccessfulRegister()
    } catch (err) {
      if (
        !formData.username ||
        !formData.email ||
        !formData.first_name ||
        !formData.last_name ||
        !formData.password ||
        !formData.password_confirmation ||
        !formData.profile_image
      ) {
        setError('Please fill in all fields.')
      } else {
        setError('Error Registering')
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleImageUrl = (url) => {
    setFormData({ ...formData, profileImage: url })
  }

  const handleSuccessfulRegister = () => {
    console.log('Succesfully Registered')
    navigate('/login')
  }

  console.log(formData)
  return (
    <div>
      <Menu />
      <div className='form-wrapper'>
        <h2 className='form-title'>Register</h2>
        <form className='form' onSubmit={handleSubmit}>
          <input
            placeholder='First Name'
            type='text'
            name='first_name'
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            placeholder='Last Name'
            type='text'
            name='last_name'
            value={formData.last_name}
            onChange={handleChange}
          />
          <input
            placeholder='Username'
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
          <input
            placeholder='Email'
            type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <span className='pass-valid'>Your password must be eight characters or more</span>
          <input
            placeholder='Password'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          <input
            placeholder='Password Confirmation'
            type='password'
            name='password_confirmation'
            value={formData.password_confirmation}
            onChange={handleChange}
          />
          <ImageUploadFile className='image-field'
            value={formData.profile_image}
            name='profile_image'
            handleImageUrl={handleImageUrl}
          />
          <input className='submit' type='submit' value="Register" />
        </form>
      </div>
      <p>{error}</p>
    </div>
  )
}

export default Register
