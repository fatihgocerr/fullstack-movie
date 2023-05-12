import {axiosConf} from "@/lib/axiosConf";
import {authKey} from "@/lib/helpers";



export const getAll = async () => {
 return new Promise((resolve,reject) => {
  axiosConf.get('/directors/all').then((res) => {
   resolve(res.data)
  }).catch((err) => {
   reject(err)
  })
 })
}



export const addDirector = async (data) => {
 return new Promise((resolve,reject) => {
  axiosConf.post('/directors/create', data, {
   headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({data}) => {
   resolve(data)
  }).catch((err) => {
   reject(err)
  })
 })
}



export const getDirector = async (id) => {
 return new Promise((resolve,reject) => {
  axiosConf.get(`/director/getById/${id}`).then(({data}) => {
   resolve(data)
  }).catch((err) => {
   reject(err);
  })
 })
}



export const deleteDirector = async(id) => {
 return new Promise((resolve,reject) => {
  axiosConf.delete(`/directors/deleteById/${id}`, {
   headers:{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({data}) => {
   resolve(data)
  }).catch((err) => {
   reject(err)
  })
 })
}



export const updateDirector = async(data,id) => {
 return new Promise((resolve,reject) => {
  axiosConf.put(`/directors/updateById/${id}`,data, {
   headers:{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({data}) => {
   resolve(data)
  }).catch((err) => {
   reject(err)
  })
 })
}



// Image services ....