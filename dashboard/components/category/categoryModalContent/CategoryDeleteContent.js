import React, {useState} from "react";
import {deleteGenre, updateGenre} from "@/services/genres.service";
import {toast} from "react-toastify";


const DeleteCategory = ({data, setModal}) => {

const handleDeleteGenre = async () => {
 await deleteGenre(data[0]?._id).then(res => {
  console.log(res)
   const toastPromise = new Promise((resolve, reject) => {
    res.code === 200 ? resolve('success') : reject('error')
   })
  setModal(false)
   toast.promise(toastPromise, {
    pending: 'Siliniyor...',
    success: 'Silme Başarılı 👌',
    error: 'Silme Başarısız 🤯'
   })
 }).catch(err => {
  console.log(err)
  toast.error('something went wrong')
 })
}

 const formItem = [
  {label: 'Name', key: 'name', type: 'text'},
  {label: 'Description', key: 'description', type: 'text'},
  {label: 'Tags', key: 'tags', type: 'text'},
 ]


 return (
  <div className="flex-row justify-center items-center space-y-3 relative p-4 w-full bg-slate-200 rounded-md">
   {formItem.map((item, index) => (
    <div key={index} className="flex justify-center items-center w-[400px] mx-auto">
     <div className="flex justify-between w-full h-8 items-center px-2">
      <label className="font-semibold pr-2">{item.label}</label>
      <input
       className="border-2 border-purple-600/50 w-[70%] rounded h-8 p-2 text-center cursor-not-allowed"
       type={item.type}
       name={item.key}
       disabled
       value={item.key === "name" ? data?.[0].name : item.key === "description" ? data?.[0].description : item.key === 'tags' ? data?.[0].tags : item.key === 'movie' ? data?.[0].moviesCount : item.key === 'series' ? data?.[0].seriesCount : item.key === 'anime' ? data?.[0].animeCount : data?.[0].totalCount}
      />
     </div>
    </div>
   ))}

   <div className="w-[400px] flex items-center justify-center mx-auto px-2">
    <div className="flex items-center  w-full">

     <label className="font-semibold pr-2">Picture</label>

     <div className="flex overflow-auto my-2 p-2">

      <img
       // src={URL.createObjectURL(file)}
       src={'https://picsum.photos/200'}
       className="w-32 h-32 mr-1 ml-14 rounded-xl border-2 border-purple-600/50"
       alt={'category'}
      />
     </div>

    </div>
   </div>
   <div className="flex justify-between">
    <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg rounded-md hover:bg-emerald-800"
            onClick={() => handleDeleteGenre()}>DELETE
    </button>
   </div>
  </div>
 )
  ;
}


export default DeleteCategory;

