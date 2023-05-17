import {axiosConf} from "@/lib/axiosConf";
import {authKey} from "@/lib/helpers";
import {toast} from "react-toastify";


export const uploadMultipleImage = (files,id,authKey) => {

  return new Promise((resolve, reject) => {
    let formData = new FormData();
    formData.append('poster', files[0] );
    formData.append('bannerPoster', files[1] );

    axiosConf.post(`/movies/uploadImage/${id}`, formData, {
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


export const addMovie =async (data,authKey) => {
  return new Promise((resolve, reject) => {
    axiosConf.post(`/movies/create`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authKey
      }
    }).then(({ data }) => {
      resolve(data);
    }).catch((err) => {
      console.log('err', err)
      reject(err);
    })
  })
}

export const updateMovie =async (data ,id,authKey) => {
  return new Promise ((resolve, reject) => {
    axiosConf.put(`/movies/updateById/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authKey
      }
    }).then(({ data }) => {
      resolve(data);
    }).catch((err) => {
      console.log('err', err)
      toast.error(err.response.data.message)
      reject(err);
    })
  })
}


export const updatedMultipleImage = (files,id,authKey) => {

  return new Promise((resolve, reject) => {
    let formData = new FormData();
    formData.append('poster', files[0] );
    formData.append('bannerPoster', files[1] );

    axiosConf.post(`/movies/updateImage/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + authKey
      }
    }).then(({ data }) => {
      resolve(data);
    }).catch((err) => {
      console.log('err', err)
      reject(err);
    })
  })
}


export const deleteMovie =async (id,authKey) => {
  return new Promise((resole,reject) => {
  axiosConf.delete('/movies/deleteById/'+id, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ authKey
    }
  }).then(({ data }) => {
    resole(data);
  }).catch((err) => {
    console.log('err', err)
    reject(err);
  })
  })
}

