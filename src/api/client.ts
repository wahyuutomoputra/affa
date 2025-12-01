import axios from 'axios'

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 15000,
})

apiClient.interceptors.request.use(
  (config) => {
    // Contoh: inject token kalau nanti dibutuhkan
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Di sini kamu bisa handle error global (401, 500, dsb)
    return Promise.reject(error)
  },
)


