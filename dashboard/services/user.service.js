import {axiosConf} from "@/lib/axiosConf";
import {authKey} from "@/lib/helpers";



export const getAll = async() => {
return new Promise ((resolve,reject) => {
 axiosConf.get(`/users/getAllUsers`,{
  headers: {
   'Content-Type': 'application/json',
   'Authorization': 'Bearer ' + authKey
  }
 }).then((res) => {
  console.log('res', res)
  resolve(res.data)
 }).catch((err) => {
  reject(err)
 })
})
}

export const getById = async(id) => {
return new Promise((resolve,reject) => {
 axiosConf.get(`/users/getById/${id}`,{
  headers:{
   'Content-Type': 'application/json',
   'Authorization': 'Bearer ' + authKey
  }
 }).then((res) => {
  resolve(res.data)
 }).catch((err) => {
  reject(err)
 });
 });
}


export const create = async(data) => {
return new Promise((resolve,reject) => {
 axiosConf.post(`/users/create`, data, {
  headers: {
   'Content-Type': 'application/json',
   'Authorization': 'Bearer ' + authKey
  }
 }).then(({data}) => {
  resolve(data)
 }).catch((err) => {
  reject(err)
 });
});
}


export const update = async(data,id) => {
 return new Promise((resolve,reject) => {
  axiosConf.put(`/users/updateById/${id}`, data, {
   headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({data}) => {
   resolve(data)
  }).catch((err) => {
   reject(err)
  });
 })
}


export const deleteById = async(id) => {
return new Promise((resolve,reject) => {
 axiosConf.delete(`/users/deleteById/${id}`, {
  headers: {
   'Content-Type': 'application/json',
   'Authorization': 'Bearer ' + authKey
  }
 }).then(({data}) => {
  console.log('service data', data)
  resolve(data)
 }).catch((err) => {
  reject(err)
 });
});
}


export const uploadAvatar = async(files, id) => {
 console.log('files', files)
return new Promise((resolve,reject) => {
 let formData = new FormData();
 formData.append('pp', files[0] );
 axiosConf.post(`/users/uploadPP/${id}`, formData, {
  headers: {
   'Content-Type': 'multipart/form-data',
   'Authorization': 'Bearer ' + authKey
  }
 }).then(({data}) => {
  resolve(data)
 }).catch((err) => {
  reject(err)
 });
});
}


export const updateAvatar = async(files, id) => {
 console.log('files', files)
 return new Promise((resolve,reject) => {
  let formData = new FormData();
  formData.append('pp', files[0] );
  axiosConf.put(`/users/updatePP/${id}`, formData, {
   headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer ' + authKey
   }
  }).then(({data}) => {
   resolve(data)
  }).catch((err) => {
   reject(err)
  });
 });
}




