import axios from 'axios'

// Gunakan environment variable untuk API URL
// Di development: set di .env.local
// Di production: Nginx akan handle proxy /api
const getBaseURL = () => {
  // Jika ada VITE_API_URL, gunakan langsung (untuk development tanpa proxy)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL
  }
  // Default: gunakan /api (akan di-handle oleh Nginx di production)
  return '/api'
}

export const apiClient = axios.create({
  baseURL: getBaseURL(),
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


