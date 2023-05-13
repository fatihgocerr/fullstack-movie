import React, {useEffect, useState} from "react";
import {message} from "antd";
import {toast} from "react-toastify";
import {deleteMovie} from "@/services/movies.service";


const DeleteMovies = ({data, setModal}) => {
 const [formValues, setFormValues] = useState({
  title: '',
  genre: '',
  released: '',
  imdbScore: '',
  directorId: '',
  stars: '',
  scriptwriter: '',
  trailer: '',
  tags: '',
  summary: '',
  poster: '',
  bannerPoster: '',
  budget: '',
  boxOffice: '',
  year: '',
  awards: '',
  conditions: '',
  series: '',
  country: '',
  language: '',
  producer: ''
 });

 const formItem = [
  {label: 'Name', key: 'title', type: 'text', selectBox: false},
  {label: 'Genre', key: 'genre', type: 'text', selectBox: true},
  {label: 'Release Date', key: 'released', type: 'text', selectBox: false},
  {label: 'Imdb Score', key: 'imdbScore', type: 'text', selectBox: false},
  {label: 'Director Id', key: 'directorId', type: 'text', selectBox: true},
  {label: 'Stars', key: 'stars', type: 'text', selectBox: true},
  {label: 'Scriptwriter', key: 'scriptwriter', type: 'text', selectBox: true},
  {label: 'Trailer', key: 'trailer', type: 'text', selectBox: false},
  {label: 'Tags', key: 'tags', type: 'text', selectBox: false},
  {label: 'Summary', key: 'summary', type: 'text', selectBox: false},
  {label: 'Budget', key: 'budget', type: 'text', selectBox: false},
  {label: 'Box Office', key: 'boxOffice', type: 'text', selectBox: false},
  {label: 'Year', key: 'year', type: 'text', selectBox: false},
  {label: 'Awards', key: 'awards', type: 'text', selectBox: false},
  {label: 'Conditions', key: 'conditions', type: 'text', selectBox: false},
  {label: 'Series', key: 'series', type: 'text', selectBox: false},
  {label: 'Country', key: 'country', type: 'text', selectBox: false},
  {label: 'Language', key: 'language', type: 'text', selectBox: false},
  {label: 'Producer', key: 'producer', type: 'text', selectBox: false},
 ]

 const handleDelete = () => {
  if (window.confirm('Silmek istediğinize emin misiniz ?')) {
   // console.log('Delete confirmed');
   // console.log(data[0]?._id)
   deleteMovie(data[0]?._id).then((res) => {
    console.log('res',res)
    const toastPromise = new Promise((resolve, reject) => {
     res.code === 200 ? resolve('success') : reject('error')
    })
    toast.promise(toastPromise, {
     pending: 'Güncelleniyor...',
     success: 'Güncelleme Başarılı 👌',
     error: 'Güncelleme Başarısız 🤯'
    })
    setModal(false)
   }).catch((err) => {
    console.log(err)
   })
  } else {
   toast.info('Silme işlemi iptal edildi')
  }
 };

 return (
  <div className="flex-col justify-center items-center space-y-3 bg-slate-200 rounded-md relative p-4 w-full">
   <div className='flex '>
    <div className="flex-col justify-center items-center space-y-3  p-4 w-[75%] ">
     {formItem.map((item, index) => (
      <div key={index} className="flex justify-center items-center w-[400px] mx-auto">
       <div className="flex justify-between w-full h-8 items-center px-2">
        <label className="font-semibold pr-2">{item.label}</label>
        <input
         className="border-2 border-purple-600/50 w-[70%] rounded h-8 p-2"
         type={item.type}
         name={item.key}
         disabled={true}
         value={item.selectBox ? data?.[0]?.[item.key].map((r) => r.name) : data?.[0]?.[item.key]}

        />
       </div>
      </div>
     ))}
    </div>
    <div className='flex-col  w-[20%] relative'>
     {['poster', 'bannerPoster'].map((item, index) => (
      <div key={index}
           className="flex-col  relative w-full  space-y-3 items-center justify-center gap-4 overflow-auto my-2 p-2">
       <label className='text-xl w-32 font-bold text-center '>
        {item}
       </label>
       <img
        src={`${data[0][item]}` || 'https://picsum.photos/200'}
        className="w-32 h-32  mr-1 rounded-xl border-2 border-purple-600/50"
        alt={`${data[0][item]} image`}/>
      </div>
     ))}
    </div>
   </div>
   <div className="flex justify-between">
    {/*<button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg rounded-md hover:bg-emerald-800"*/}
    {/*onClick={() => confirm('Silmek istediğinize emin misiniz ?')}>*/}
    {/* DELETE*/}
    {/*</button>*/}
    <button
     className="bg-gray-700 text-white p-3 w-full mt-5 text-lg rounded-md hover:bg-emerald-800"
     onClick={handleDelete}
    >
     DELETE
    </button>
   </div>
  </div>
 );
}


export default DeleteMovies;