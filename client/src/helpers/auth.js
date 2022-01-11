import axios from 'axios'

export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const setToken = () => {
  window.localStorage.setItem('token')
}

export const removeToken = () => {
  window.localStorage.removeItem('token')
}

export const getPayload = () => {
  const token = getToken()
  if (!token) return false
  const split = token.split('.')
  console.log('spliitt--->', split)
  return JSON.parse(atob(split[1]))
  
}

export function isAuthenticated() {
  const payload = getPayload()
  console.log('payload--->', payload)
  if (!payload) return false
  return true
}

function headers() {
  const token = localStorage.getItem('token')
  return {
    headers: { Authorization: `Bearer ${token}` },
  }
}

export function getUserProfile() {
  return axios.get('api/auth/profile/', headers())
}

export const logOut = () => {
  removeToken()
}


export function addCartItem(product) {
  return  axios.post('/api/cart/', product, headers())
}

export function deleteBasketItem(id) {
  return axios.delete(`/api/cart/${id}/`, headers())
}

export function getCartItems() {
  return axios.get('/api/cart/', headers())
}
