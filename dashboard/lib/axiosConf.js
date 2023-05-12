import axios from "axios";



export const axiosConf = axios.create({
  baseURL:"http://localhost:5002/api/v1"
})

axiosConf.interceptors.response.use((response) => response, (error) => {
  const unauthorized = error.response && error.response.status
    && (error.response.status === 401 || error.response.status === 403)
  if (unauthorized) {
    // localStorage.clear() yetkisiz olmayan kullanıcı ise ls temizlenip login sayfasına yönlendirilir.
    setTimeout(() => {
      window.location.replace(`${window.location.origin}/login`)
    }, 1000)
  }
  return Promise.reject(error)
})


