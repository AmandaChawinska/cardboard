import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:4100',
})

export { apiClient }
