import axios from 'axios'

export const getSingleProduct = async (id) => {
  const token = localStorage.getItem('token')

  try {
    const { data } = await axios.get(`/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getSingleUser = async () => {
  const token = localStorage.getItem('token')
  try {
    const { data } = await axios.get('/api/auth/profile', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  } catch (err) {
    console.log(err)
    
  }
}

export const getItems  = async () => {
  const token = localStorage.getItem('token')
  try {
    const { data } = await axios.get('/api/cart', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  } catch (err) {
    console.log(err)
    
  }
}