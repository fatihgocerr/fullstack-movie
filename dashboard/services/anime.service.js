import {axiosConf} from "@/lib/axiosConf";





export const getAllAnime =async () => {
 return new Promise ((resolve, reject) => {
  axiosConf.get(`/anime/all`).then(( res ) => {
   resolve(res);
  }).catch((err) => {
   console.log('err', err)
   reject(err);
  })
 })
}


export const addAnime =async (data,authKey) => {
 return new Promise((resolve, reject) => {
  axiosConf.post(`/anime/create`, data, {
   headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({data}) => {
   resolve(data);
  }).catch((err) => {
   console.log('err', err)
   reject(err);
  })
 })
}


export const uploadMultipleImage = (files,id,authKey) => {

 return new Promise((resolve, reject) => {
  let formData = new FormData();
  formData.append('poster', files[0] );
  formData.append('bannerPoster', files[1] );

  axiosConf.post(`/anime/uploadImage/${id}`, formData, {
   headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({ data }) => {
   resolve(data.data);
  }).catch((err) => {
   console.log('errs', err)
   reject(err);
  })
 })


}


export const updateAnime =async (data ,id, authKey) => {
 return new Promise ((resolve, reject) => {
  axiosConf.put(`/anime/updateById/${id}`, data, {
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



export const deleteAnime =async (id,authKey) => {
 return new Promise((resolve, reject) => {
  axiosConf.delete(`/anime/deleteById/${id}`, {
   headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({data}) => {
   resolve(data);
  }).catch((err) => {
   console.log('err', err)
   reject(err);
  })
 })
}


export const updatedMultipleImage = (files,id,authKey) => {
 return new Promise((resolve,reject) => {
  let formData = new FormData();
  formData.append('poster', files[0] );
  formData.append('bannerPoster', files[1] );

  axiosConf.put(`/anime/uploadImage/${id}`, formData, {
   headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({ data }) => {
   resolve(data.data);
  }).catch((err) => {
   console.log('err', err)
   reject(err);
  })
 })
}


