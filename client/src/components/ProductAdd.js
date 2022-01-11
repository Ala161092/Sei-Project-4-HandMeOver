import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ImageUploadFile } from './ImageUploadField'
import { Button, Modal } from 'semantic-ui-react'
import { isAuthenticated } from '../helpers/auth'

function ModalExample() {
 
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
  const isLoggedIn = isAuthenticated()

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
      navigate(`/bags/${data.id}`)
      handleSuccessfulPost()
    } catch (err) {
      console.log(err)
    }
  }
  
  const handleImageUrl = (url) => {
    setFormData({ ...formData, image: url })
  }
  
  const handleSuccessfulPost = () => {
    setOpen(false)
    console.log('Success')
  }

  const [open, setOpen] = useState(false)

 

  return (
    <div className='add-bag'>
      <Modal
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<button> Sell My Bag</button>}
      >
        <Modal.Header className='header'>Sell My bag</Modal.Header>
        <Modal.Content className='content'>
          {isLoggedIn ? (
            <>
              <form className='add-form'>
                <div>
                  <label>Name:</label>
                  <div>
                    <input
                      className='input'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Bag Name'
                    />
                  </div>
                </div>
                <div>
                  <label>Brand:</label>
                  <div>
                    <select
                      name='brand'
                      onChange={handleSelect}
                      value={formData.brand}
                    >
                      <option value='Acne Studios'>Acne Studios</option>
                      <option value='Alexander McQueen'>
                        Alexander McQueen
                      </option>
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
                </div>
                <div>
                  <label>Description:</label>
                  <div>
                    <textarea
                      className='input description'
                      name='description'
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label>Condition:</label>
                  <div>
                    <input className='radio'
                      type='radio'
                      name='condition'
                      value='New'
                      onChange={handleChange}
                      checked={formData.condition === 'New'}
                    />
                    <p>New</p>
                    <input className='radio'
                      type='radio'
                      name='condition'
                      value='Fair'
                      onChange={handleChange}
                      checked={formData.condition === 'Fair'}
                    />
                    <p>Fair Wear and Tear</p>
                    <input className='radio'
                      type='radio'
                      name='condition'
                      value='Tlc'
                      onChange={handleChange}
                      checked={formData.condition === 'Tlc'}
                    />
                    <p>Major Tlc Needed</p>
                  </div>
                </div>
                <div>
                  <label>Price:</label>
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
                <Modal.Actions>
                  <Button onClick={handleSubmit}>
                    Find Me A Buyer!
                  </Button>
                </Modal.Actions>
              </form>
            </>
          ) : (
            <Button onClick={() => setOpen(false)}>
              <Link to='/login'>Please Sign In To Sell Your Bag</Link>
            </Button>
          )}
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default ModalExample
