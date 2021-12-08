import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImageUploadFile } from '../components/imageUploadField'

const ProductAdd = () => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    description: '',
    condition: '',
    price: '',
    image: '',
    owner: '',
  })

  const navigate = useNavigate()

  const handleChange = (event) => {
    console.log(event.target.checked)
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    setFormData({ ...formData, [event.target.name]: value })
  }

  const handleSelect = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    try {
      const { data } = await axios.post('api/products/', formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log('newproduct--->', data)
      handleSuccessfulPost()
    } catch (err) {
      console.log(err)
    }
  }

  const handleImageUrl = (url) => {
    setFormData({ ...formData, image: url })
  }

  const handleSuccessfulPost = () => {
    console.log('Success')
    navigate('/bags')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <div>
            <input
              className='input'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label>Brand</label>
          <select name='brand' onChange={handleSelect} value={formData.brand}>
            <option value='Acne Studios'>Acne Studios</option>
            <option value='Alexander McQueen'>Alexander McQueen</option>
            <option value='Balenciaga'>Balenciaga</option>
            <option value='Balmain'>Balmain</option>
            <option value='Bottega Veneta'>Bottega Veneta</option>
            <option value='Celine'>Celine</option>
            <option value='Chanel'>Chanel</option>
            <option value='Coach'>Coach</option>
            <option value='Dior'>Dior</option>
            <option value='Fendi'>Fendi</option>
            <option value='Givenchy'>Givenchy</option>
            <option value='Gucci'>Gucci</option>
            <option value='Jacquemes'>Jacquemes</option>
            <option value='Louis Vuitton'>Louis Vuitton</option>
            <option value='Prada'>Prada</option>
            <option value='Saint Laurent'>Saint Laurent</option>
            <option value='Tom Ford'>Tom Ford</option>
            <option value='Valentino'>Valentino</option>
            <option value='Versace'>Versace</option>
          </select>
        </div>
        <div>
          <label>Description</label>
          <div>
            <input
              className='input'
              name='description'
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label>Condition</label>
          <div>
            <input
              type='radio'
              name='condition'
              value='New'
              onChange={handleChange}
              checked={formData.condition === 'New'}
            />
            New
            <input
              type='radio'
              name='condition'
              value='Fair'
              onChange={handleChange}
              checked={formData.condition === 'Fair'}
            />
            Fair Wear and Tear
            <input
              type='radio'
              name='condition'
              value='Tlc'
              onChange={handleChange}
              checked={formData.condition === 'Tlc'}
            />
            Major Tlc Needed
          </div>
        </div>
        <div>
          <label>Price</label>
          <div>
            <input
              className='input'
              name='price'
              value={formData.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <ImageUploadFile
          value={formData.image}
          name='image'
          handleImageUrl={handleImageUrl}
        />
        <input className='submit' type='submit' value='Sell My Bag' />
      </form>
    </div>
  )
}

export default ProductAdd
