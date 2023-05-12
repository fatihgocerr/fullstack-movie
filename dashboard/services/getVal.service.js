import {axiosConf} from "@/lib/axiosConf";


// export const getGenre =async () => {
//  axiosConf.get('/genres/all').then(async ({data}) => {
//   console.log('data Service', data.data)
//   return await data.data
//  }).catch((err) => {
//   return err
//  })
// }
export const getGenres = () => {
 return new Promise((resolve, reject) => {
  axiosConf.get('/genres/all')
   .then(({data}) => {
    resolve(data.data);
   })
   .catch((err) => {
    reject(err);
   })
 });
}

export const getDirectors = () => {
 return new Promise((resolve, reject) => {
  axiosConf.get('/directors/all')
   .then(({data}) => {
    resolve(data.data);
   }).catch((err) => {
   reject(err);
  })
 })
}

export const getStars = () => {
 return new Promise((resolve, reject) => {
  axiosConf.get('/stars/all')
   .then(({data}) => {
    resolve(data.data);
   }).catch((err) => {
   reject(err);
  })
 })
}

export const getWriters = () => {
 return new Promise((resolve, reject) => {
  axiosConf.get('/scriptwriters/all')
   .then(({data}) => {
    console.log('data Service', data.data)
    resolve(data.data);
   }).catch((err) => {
   reject(err);
  })
 })
}

