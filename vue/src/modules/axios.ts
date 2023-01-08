import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "api-prefix",
  withCredentials: false,
  timeout: 30000
})

axiosInstance.interceptors.request.use((config: any) => {
  return config
})

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { axiosInstance }
