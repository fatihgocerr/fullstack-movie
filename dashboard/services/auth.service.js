import {axiosConf} from "@/lib/axiosConf";

export default function LoginServ (data) {
 return new Promise((resolve,reject) => {
  axiosConf.post('/users/login', data).then((res) => {
   resolve(res.data.data)

  }).catch((err) => {
   reject(!!err.response.data.message ? err.response.data.message : err)
  })
 })
}




