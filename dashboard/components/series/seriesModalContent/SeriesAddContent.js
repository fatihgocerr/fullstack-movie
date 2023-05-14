import React, {useEffect, useState} from "react";
import SelectBox from "@/components/common/SelectBox";
import InputBox from "@/components/common/InputBox";
import {getGenres, getStars, getWriters,getDirectors} from "@/services/getVal.service";
import fs from "fs";
import {addSeries, uploadMultipleImage} from "@/services/series.service";
import {trChars} from "@/lib/helpers";
import {toast} from "react-toastify";


const AddSeries = () => {
 const [formValues, setFormValues] = useState({
  name: '',
  genre: [],
  visionDate: '',
  imdbScore: '',
  directorId: [],
  stars: [],
  scriptwriter: [],
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
  series: false,
  country: '',
  language: '',
  producer: '',
  parent: '',
 });
 const [allData, setAllData] = useState([]);
 //For Image Preview
 const [selectedImage, setSelectedImage] = useState('');
 // This function will be triggered when the file field change
 const imageChange =async (e) => {
  if (e.target.files && e.target.files.length > 0) {
   function renameFile(file, newFileName) {
    const modifiedFile = new File([file], newFileName, { type: file.type });
    return modifiedFile;
   }
   let imageData = [];
   for (const file of e.target.files) {
    // console.log('file',file)
    const renamedFile = renameFile(file, trChars(file.name));
    // console.log('renamedFile',renamedFile)
    imageData.push(renamedFile);
   }
   // console.log('imageData',imageData)



   // console.log('e.target.files',e.target.files)
   setSelectedImage(imageData);
   setFormValues({...formValues, poster: imageData[0], bannerPoster: imageData[1]})
  }
 };
 // This function will be triggered when the "Remove This Image" button is clicked
 const removeSelectedImage = () => {
  setSelectedImage('');
 };

const fetchAll = async () => {
 const [gData, sData, wData, dData] = await Promise.all([
  getGenres(),
  getStars(),
  getWriters(),
  getDirectors()
 ]);
 // setAllData([{genre:gData}, {stars:sData}, {scriptwriter:wData}, {directorId:dData}])
 setAllData([gData, sData, wData, dData])
}
 const formItem = [
  {label: 'Name', key: 'name', type: 'text',selectBox:false},
  {label: 'Genre', key: 'genre', type: 'text',selectBox:true},
  {label: 'Vision Date', key: 'visionDate', type: 'text',selectBox:false},
  {label: 'Imdb Score', key: 'imdbScore', type: 'text',selectBox:false},
  {label: 'Director Id', key: 'directorId', type: 'text',selectBox:true},
  {label: 'Stars', key: 'stars', type: 'text',selectBox:true},
  {label: 'Scriptwriter', key: 'scriptwriter', type: 'text',selectBox:true},
  {label: 'Trailer', key: 'trailer', type: 'text',selectBox:false},
  {label: 'Tags', key: 'tags', type: 'text',selectBox:false},
  {label: 'Summary', key: 'summary', type: 'text',selectBox:false},
  {label: 'Budget', key: 'budget', type: 'text',selectBox:false},
  {label: 'Box Office', key: 'boxOffice', type: 'text',selectBox:false},
  {label: 'Year', key: 'year', type: 'text',selectBox:false},
  {label: 'Awards', key: 'awards', type: 'text',selectBox:false},
  {label: 'Conditions', key: 'conditions', type: 'text',selectBox:false},
  {label: 'Series', key: 'series', type: 'text',selectBox:false},
  {label: 'Country', key: 'country', type: 'text',selectBox:false},
  {label: 'Language', key: 'language', type: 'text',selectBox:false},
  {label: 'Producer', key: 'producer', type: 'text',selectBox:false},
  {label: 'Parent', key: 'parent', type: 'text',selectBox:false},
 ]
 // console.log('allsData', allData)
 const handleSubmit = async (e) => {
  e.preventDefault();
  await addSeries(formValues).then(async (res) => {
   toast.success('Series Added Successfully')
   if (res.code === 201) {
    await uploadMultipleImage(selectedImage, res.data._id).then((res) => {
  toast('Image Uploaded Successfully')
    }).catch((err) => {
     console.log('err', err)
    })
   }
  }).catch((err) => {
   console.log('err', err)
  })

  // uploadMultipleImage(selectedImage)
 }

 useEffect(() => {
  fetchAll()
 }, [])

 const handleInputChange = (event) => {
  const {name, value} = event.target;
  setFormValues((prevValues) => ({
   ...prevValues,
   [name]: value
  }));
 };
 return (
  <form onSubmit={handleSubmit} className="flex-row justify-center items-center space-y-3 relative p-4 w-full bg-slate-200 rounded-md">
   {formItem.map((item, index) => (
    <div key={index} className="flex justify-center items-center w-[400px] mx-auto">
     <div className="flex justify-between w-full h-8 items-center px-2">
      <label className="font-semibold pr-2">{item.label}</label>
      {item.selectBox
       ? <SelectBox item={item} formValues={formValues} allData={allData}  onChange={(e) => handleInputChange(e, item.key)}/>
       : <InputBox item={item} formValues={formValues} onChange={(e) => handleInputChange(e, item.key)}/>
      }
     </div>
    </div>
   ))}

   <div className="w-[400px] flex items-center justify-center mx-auto px-2">
    <div className="flex-row   w-full">
     <label className="font-semibold pr-2">Poster,Banner</label>
     <input
      className="border-2  border-purple-600/50 w-[70%] rounded"
      type="file"
      accept="image/*"
      name="user[image]"
      multiple={true}
      onChange={imageChange}
     />
     <div className="flex overflow-auto my-2 p-2">
      {selectedImage &&
       [...selectedImage].map((file, index) => (
        <img
         key={index}
         src={URL.createObjectURL(file)}
         className="w-32 h-32 mr-1 rounded-xl border-2 border-purple-600/50"
        />
       ))}

     </div>

     {selectedImage && (
      <div className='flex items-center gap-2'>
       <button onClick={removeSelectedImage} className="bg-orange-400 p-2 rounded-md text-white">
        Remove This Image
       </button>
       <span> * Seçilen 1. resim Poster, 2.si Bannerdır</span>

      </div>
     )}
    </div>
   </div>
   <div className="flex justify-between">
    <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg rounded-md hover:bg-emerald-800" type="submit">
     Submit
    </button>
   </div>
  </form>
 )
  ;
}


export default AddSeries;