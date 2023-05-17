import {axiosConf} from "@/lib/axiosConf";



export const getLatestUsers = async(authKey) => {
 return new Promise ((resolve,reject) => {
  axiosConf.get(`/statistics/getLatestUsers`,{
   headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + authKey
   }
  }).then((res) => {
   resolve(res.data.data)
  }).catch((err) => {
   reject(err)
  })
 })
}

