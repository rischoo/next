import { store } from '@store/storage'
import axios from 'axios'

const satellite = axios.create({
  baseURL: '/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

satellite.interceptors.request.use(
  config => {
    const { userReducer } = store.getState()
    config.headers.set('Authorization', userReducer.tokenSession)
    return config
  },
  error => Promise.reject(new Error(error))
)

satellite.interceptors.response.use(
  response => response,
  error => error
)

export default satellite
