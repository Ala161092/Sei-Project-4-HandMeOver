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
  return JSON.parse(atob(split[1]))
  
}

export function isLoggedIn () {
  return getToken()
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
