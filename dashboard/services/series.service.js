import {axiosConf} from "@/lib/axiosConf";
import {toast} from "react-toastify";




export const getAllSeries =async () => {
 return new Promise ((resolve, reject) => {
  axiosConf.get(`/series/all`).then(( res ) => {
   console.log('res', res)
   resolve(res);
  }).catch((err) => {
   console.log('err', err)
   reject(err);
  })
 })
}


export const addSeries =async (data) => {
 return new Promise((resolve, reject) => {
  axiosConf.post(`/series/create`, data, {
   headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({data}) => {
   console.log('data', data)
   resolve(data);
  }).catch((err) => {
   console.log('err', err)
   reject(err);
  })
 })
}


export const uploadMultipleImage = (files,id) => {

 return new Promise((resolve, reject) => {
  let formData = new FormData();
  formData.append('poster', files[0] );
  formData.append('bannerPoster', files[1] );

  axiosConf.post(`/series/uploadImage/${id}`, formData, {
   headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({ data }) => {
   console.log('datas', data)
   resolve(data.data);
  }).catch((err) => {
   console.log('errs', err)
   reject(err);
  })
 })


}


export const updateSeries =async (data ,id, authKey) => {
 return new Promise ((resolve, reject) => {
  axiosConf.put(`/series/updateById/${id}`, data, {
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



export const deleteSeries =async (id) => {
 return new Promise((resolve, reject) => {
  axiosConf.delete(`/series/deleteById/${id}`, {
   headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({data}) => {
   console.log('data', data)
   resolve(data);
  }).catch((err) => {
   console.log('err', err)
   reject(err);
  })
 })
}


export const updatedMultipleImage = (files,id) => {
 return new Promise((resolve,reject) => {
  let formData = new FormData();
  formData.append('poster', files[0] );
  formData.append('bannerPoster', files[1] );

  axiosConf.put(`/series/uploadImage/${id}`, formData, {
   headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({ data }) => {
   console.log('data', data)
   resolve(data.data);
  }).catch((err) => {
   console.log('err', err)
   reject(err);
  })
 })
}


