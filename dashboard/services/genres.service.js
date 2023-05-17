import {axiosConf} from "@/lib/axiosConf";
import {authKey} from "@/lib/helpers";



export const getAllGenres = async () => {
 return new Promise((resolve,reject) => {
  axiosConf.get('/genres/all')
   .then((res) => {
    resolve(res.data);
   })
   .catch((err) => {
    reject(err);
   })
 })
}



export const addGenre = async (data,authKey) => {
 return new Promise((resolve,reject) => {
  axiosConf.post('/genres/create',data,{
   headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({data}) => {
   resolve(data);
  }).catch((err) => {
   reject(err);
  })
 })
}



export const updateGenre = async (data,id,authKey) => {
return new Promise((resolve,reject) => {
 axiosConf.put(`/genres/updateById/${id}`,data,{
  headers: {
   'Content-Type': 'application/json',
   'Authorization': 'Bearer ' + authKey
  }
 }).then(({data}) => {
  resolve(data);
 }).catch((err) => {
  reject(err);
 })
})
}



export const deleteGenre = async (id,authKey) => {
 return new Promise((resolve,reject) => {
  axiosConf.delete(`/genres/deleteById/${id}`,{
   headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({data}) => {
   resolve(data);
  }).catch((err) => {
   reject(err);
  })
 })
}



