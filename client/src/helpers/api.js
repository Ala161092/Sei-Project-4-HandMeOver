import axios from 'axios'

export const getSingleProduct = async (id) => {
  try {
    const { data } = await axios.get(`/api/products/${id}/`)
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

export const getSingleUser = async () => {
  const token = localStorage.getItem('token')
  try {
    const { data } = await axios.get('/api/auth/profile/', {
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
    const { data } = await axios.get('/api/cart/', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  } catch (err) {
    console.log(err)
    
  }
}


// useEffect(() => {
//   const getProducts = async () => {
//     try {
//       const response = await axios.get('api/products/')
//       console.log(response.data)
//       setProducts(response.data)

//     } catch (err) {
//       console.log(err)
//     }
//   }
//   getProducts()
// }, [])


export const getProducts = async () => {
  try {
    const { data } = await axios.get('api/products/')
    console.log(data)
    return data
    
  } catch (err) {
    console.log(err)
    
  }
}

