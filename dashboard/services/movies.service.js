import {axiosConf} from "@/lib/axiosConf";
import {authKey} from "@/lib/helpers";
import {toast} from "react-toastify";


export const uploadMultipleImage = (files,id) => {

  return new Promise((resolve, reject) => {
    let formData = new FormData();
    formData.append('poster', files[0] );
    formData.append('bannerPoster', files[1] );

    axiosConf.post(`/movies/uploadImage/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDQyZTA1ZmQxZDE2N2JiOWMzYzFlYzUiLCJ1c2VyTmFtZSI6InVzZXIgMiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzExNjQ4MSwiZXhwIjoxNjgzMjAyODgxfQ.k8NmX7EgmXfjokwJfuiMqUWG05E2U7xHZW0i-n67azI'
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


export const addMovie =async (data) => {
  return new Promise((resolve, reject) => {
    axiosConf.post(`/movies/create`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authKey
      }
    }).then(({ data }) => {
      console.log('data', data)
      resolve(data);
    }).catch((err) => {
      console.log('err', err)
      reject(err);
    })
  })
}
console.log('authKey',typeof authKey)

export const updateMovie =async (data ,id) => {
  return new Promise ((resolve, reject) => {
    axiosConf.put(`/movies/updateById/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authKey
      }
    }).then(({ data }) => {
      console.log('data', data)
      resolve(data);
    }).catch((err) => {
      console.log('err', err)
      toast.error(err.response.data.message)
      reject(err);
    })
  })
}


export const updatedMultipleImage = (files,id) => {

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
      console.log('data', data)
      resolve(data);
    }).catch((err) => {
      console.log('err', err)
      reject(err);
    })
  })
}


export const deleteMovie =async (id) => {
  return new Promise((resole,reject) => {
  axiosConf.delete('/movies/deleteById/'+id, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ authKey
    }
  }).then(({ data }) => {
    console.log('data', data)
    resole(data);
  }).catch((err) => {
    console.log('err', err)
    reject(err);
  })
  })
}










//    let data = new FormData();
//  console.log('files', files[1])
//   data.append('poster', files[0]);
//   data.append('bannerPoster', files[1]);
//   let config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: 'http://localhost:5002/api/v1/movies/uploadImage/644125872f26c4dada55b9a1',
//     headers: {
// 'Content-Type': 'multipart/form-data',
//
//       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDQyZTA1ZmQxZDE2N2JiOWMzYzFlYzUiLCJ1c2VyTmFtZSI6InVzZXIgMiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4MzExNjQ4MSwiZXhwIjoxNjgzMjAyODgxfQ.k8NmX7EgmXfjokwJfuiMqUWG05E2U7xHZW0i-n67azI'
//
//          },
//     data : data
//   };
//
//   axios.request(config)
//    .then((response) => {
//      console.log(JSON.stringify(response.data));
//    })
//    .catch((error) => {
//      console.log(error);
//    });









