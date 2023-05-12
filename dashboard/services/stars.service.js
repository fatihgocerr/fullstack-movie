import {axiosConf} from "@/lib/axiosConf";
import {authKey} from "@/lib/helpers";



export const getAll = async () => {
 return new Promise( (resolve,reject) => {
  axiosConf.get('/stars/all').then((res) => {
   resolve(res.data)
  }).catch((err) => {
   reject(err)
  })
 })
}



export const create = async (data) => {
 return new Promise((resolve,reject)  => {
  axiosConf.post('/stars/create',data, {
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



export const update = async(data,id) => {
 return new Promise((resolve,reject) => {
  axiosConf.put(`/stars/updateById/${id}`,data, {
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



export const deleteStar= async (id) => {
 return new Promise((resolve,reject) => {
  axiosConf.delete(`/stars/deleteById/${id}`,{
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





