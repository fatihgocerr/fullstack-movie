import {axiosConf} from "@/lib/axiosConf";
import {authKey} from "@/lib/helpers";



export const getAll = async () => {
 return new Promise( (resolve,reject) => {
  axiosConf.get('/scriptwriters/all').then((res) => {
   resolve(res.data)
  }).catch((err) => {
   reject(err)
  })
 })
}



export const create = async (data,authKey) => {
 return new Promise((resolve,reject)  => {
  axiosConf.post('/scriptwriters/create',data, {
   headers:{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ authKey
   }
  }).then(({data}) => {
   resolve(data)
  }).catch((err) => {
   reject(err)
  })
 })
}



export const update = async(data,id,authKey) => {
 return new Promise((resolve,reject) => {
  axiosConf.put(`/scriptwriters/updateById/${id}`,data, {
   headers:{
    'Content-Type' : 'application/json',
    'Authorization': 'Bearer '+authKey
   }
  }).then(({data}) => {
   resolve(data)
  }).catch((err) => {
   reject(err)
  })
 })
}



export const deleteScriptwriter= async (id,authKey) => {
 return new Promise((resolve,reject) => {
  axiosConf.delete(`/scriptwriters/deleteById/${id}`,{
   headers:{
    'Content-Type': 'application/json',
    'Authorization' : 'Bearer '+authKey
   }
  }).then(({data}) => {
   resolve(data)
  }).catch((err) => {
   reject(err)
  })
 })
}





