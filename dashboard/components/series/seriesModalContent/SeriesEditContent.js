import React, {useEffect, useState} from "react";
import SelectBox from "@/components/common/SelectBox";
import {updatedMultipleImage, updateSeries} from "@/services/series.service";
import {toast} from "react-toastify";
import {ArrowDown, Eye} from "react-feather";

const EditMovies = ({data, subData, setModal}) => {
 const [formValues, setFormValues] = useState({
  name: '',
  genre: '',
  visionDate: '',
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
 const [changeBtn, setChangeBtn] = useState(false);
 //For Image Preview
 const [selectedImage, setSelectedImage] = useState('');
 const imageChange = (e) => {
  if (e.target.files && e.target.files.length > 0) {
   setSelectedImage(e.target.files);
  }
 };
 const removeSelectedImage = () => {
  setSelectedImage('');
 };

 const formItem = [
  {label: 'Name', key: 'name', type: 'text', selectBox: false},
  {label: 'Genre', key: 'genre', type: 'text', selectBox: true},
  {label: 'Vision Date', key: 'visionDate', type: 'text', selectBox: false},
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

 // useEffect(() => {
 //  setFormValues({...formValues, ...data?.[0]})
 // }, [data])

 useEffect(() => {
  if (data && data.length > 0) {
   const formData = {
    name: data[0].name,
    genre: data[0].genre.map((item) => item._id),
    visionDate: data[0].visionDate,
    imdbScore: data[0].imdbScore,
    directorId: data[0].directorId.map((item) => item._id),
    stars: data[0].stars.map((item) => item._id),
    scriptwriter: data[0].scriptwriter.map((item) => item._id),
    trailer: data[0].trailer,
    tags: data[0].tags,
    summary: data[0].summary,
    poster: data[0].poster,
    bannerPoster: data[0].bannerPoster,
    budget: data[0].budget,
    boxOffice: data[0].boxOffice,
    year: data[0].year,
    awards: data[0].awards,
    conditions: data[0].conditions,
    series: data[0].series,
    country: data[0].country,
    language: data[0].language,
    producer: data[0].producer
   };
   setFormValues(formData);
  }
 }, [data]);


 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(formValues)
  await updateSeries(formValues, data?.[0]?._id).then((res) => {
   console.log(res)
   // console.log('Güncelleme Başarılı Toast Çıkartacaksın')
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


 }
 const updateImage = async () => {
  await updatedMultipleImage(selectedImage, data?.[0]?._id).then((res) => {
   console.log(res)
   const toastPromise = new Promise((resolve, reject) => {
    res.code === 200 ? resolve('success') : reject('error')
   })
   toast.promise(toastPromise, {
    pending: 'Delete is Pending...',
    success: 'Delete is Successfly 👌',
    error: 'Delete is Failed 🤯'
   })
   setModal(false)
  }).catch((err) => {
   console.log(err)
  })
 }


 const handleInputChange = (event) => {
  const {name, value} = event.target;
  setFormValues((prevValues) => ({
   ...prevValues,
   [name]: value
  }));
 };
 return (
  <>
   {!changeBtn ? (
    <form onSubmit={handleSubmit}
          className="flex-col justify-center items-center space-y-3 bg-slate-200 rounded-md relative p-4 w-full">
     <div className='flex '>
      <div className="flex-col justify-center items-center space-y-3  p-4 w-[75%] ">
       {formItem.map((item, index) => (
        <div key={index} className="flex justify-center items-center w-[400px] mx-auto">
         <div className="flex justify-between w-full h-8 items-center px-2">
          <label className="font-semibold pr-2">{item.label}</label>
          {item.selectBox
           ? <SelectBox item={item} formValues={formValues} allData={subData}
                        onChange={(e) => handleInputChange(e, item.key)}/>
           : <input
            className="border-2 border-purple-600/50 w-[70%] rounded h-8 p-2"
            type={item.type}
            name={item.key}
            disabled={item.disabled}
            value={item.selectBox
             ? formValues?.[item.key]?.map((r) => r.name)
             : formValues?.[item.key]}
            onChange={(e) => handleInputChange(e, item.key)}
           />}
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
          src={`${data?.[0]?.[item] || 'https://picsum.photos/200'} `}
          className="w-32 h-32  mr-1 rounded-xl border-2 border-purple-600/50"
          alt={`${data?.[0]?.[item]}`}/>
        </div>
       ))}

       <button className={`${changeBtn ? 'bg-red-600' : 'bg-orange-400'} ml-2 w-32 p-2 rounded-md text-white`}
               type={'button'}
               onClick={() => setChangeBtn(!changeBtn)}>
        {changeBtn ? ' CANCEL' : 'Change Image'}
       </button>

      </div>

     </div>

     <div className="flex justify-between">
      <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg rounded-md hover:bg-emerald-800" type="submit">
       SAVE
      </button>
     </div>
    </form>

   ) : (
    <div
     className="flex justify-center items-center space-y-3 bg-slate-200 rounded-md relative p-4 w-full h-[450px]">
     <div className='flex-col  w-[400px] relative '>
      <div className='flex  '>
       {['poster', 'bannerPoster'].map((item, index) => (
        <div key={index}
             className="flex-col  relative w-full  space-y-3 items-center justify-center gap-4 overflow-auto my-2 p-2">
         <div className='w-full flex items-center justify-center'>
          <label className='text-xl w-32 font-bold text-center '>
           {item}
          </label>
         </div>
         <div className='w-full flex items-center justify-center'>
          <img
           src={`${data?.[0]?.[item] ||'https://picsum.photos/200'} `}
           className="w-32 h-32  mr-1 rounded-xl border-2 border-purple-600/50"
           alt={`${data?.[0]?.[item]}`}/>
         </div>
        </div>
       ))}
      </div>
      <div className="flex relative">
       {selectedImage &&
        [...selectedImage].map((file, index) => (
         <div key={index} className="flex-col   w-full  space-y-3 items-center justify-center gap-4  my-2 p-2">

          <ArrowDown className=' w-full'/>
          <div className='w-full flex items-center justify-center'>
           <img
            key={index}
            src={URL.createObjectURL(file) || 'https://picsum.photos/200'}
            className="w-32 h-32  mr-1 rounded-xl border-2 border-purple-600/50"
           />
          </div>
         </div>
        ))}
      </div>
     </div>

     <div className='flex flex-col gap-4 items-center '>

      <div className="w-full flex items-center justify-center mx-auto px-2">
       <div className="flex flex-col items-center justify-center gap-4  w-full">
        <input
         className="border-2  border-purple-600/50 w-full rounded"
         type="file"
         accept="image/*"
         name="user[image]"
         multiple={true}
         onChange={imageChange}
        />

        {selectedImage && (
         <div className=' flex flex-col w-full items-center gap-4'>
          <span> * Seçilen 1. resim Poster, 2.si Bannerdır</span>

          <button onClick={removeSelectedImage} className="bg-orange-400 p-2  rounded-md text-white">
           Remove This Image
          </button>

         </div>
        )}
       </div>
      </div>
      <button className={`bg-emerald-700 w-32 p-2 rounded-md text-white ${selectedImage ? 'visible' : 'hidden'}`}
              type={'button'}

              onClick={() => updateImage()}>
       Update Image
      </button>

      <button className={`${changeBtn ? 'bg-red-600' : 'bg-orange-400'} w-32 p-2 rounded-md text-white`} type={'button'}
              onClick={() => setChangeBtn(!changeBtn)}>
       {changeBtn ? ' CANCEL' : 'Change Image'}
      </button>

     </div>

    </div>
   )}
  </>


 );
}


export default EditMovies;