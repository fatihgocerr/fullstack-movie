import React, {useEffect, useState} from "react";
import {updateGenre} from "@/services/genres.service";
import {toast} from "react-toastify";


const addCategory = ({data, setModal}) => {
 const [formValues, setFormValues] = useState({
  name: '',
  description: '',
  tags: '',
 });
 //For Image Preview
 const [selectedImage, setSelectedImage] = useState('');
 // This function will be triggered when the file field change
 const imageChange = (e) => {
  if (e.target.files && e.target.files.length > 0) {
   setSelectedImage(e.target.files);
  }
 };
 // This function will be triggered when the "Remove This Image" button is clicked
 const removeSelectedImage = () => {
  setSelectedImage('');
 };

 const formItem = [
  {label: 'Name', key: 'name', type: 'text', disabled: false},
  {label: 'Description', key: 'description', type: 'text', disabled: false},
  {label: 'Tags', key: 'tags', type: 'text', disabled: false}
 ]
 useEffect(() => {
  if (data && data.length > 0) {
   const formData = {
    name: data?.[0].name,
    description: data?.[0].description,
    tags: data?.[0].tags,
   }
   setFormValues(formData)
  }
 }, [data])
 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('formValues', formValues)
  // console.log('askdsadkslalk', )
  await updateGenre(formValues,data[0]?._id).then( res => {
   const toastPromise = new Promise((resolve, reject) => {
    res.code === 200 ? resolve('success') : reject('error')
   })
   toast.promise(toastPromise, {
    pending: 'Güncelleniyor...',
    success: 'Güncelleme Başarılı 👌',
    error: 'Güncelleme Başarısız 🤯'
   })
   }).catch(err => {
   console.log(err)
    toast.error('something went wrong')
  })
 }

 const handleInputChange = (e) => {
  const {name, value} = e.target;
  setFormValues((prevVal) => ({
   ...prevVal,
   [name]: value
  }))
 };
 return (
  <form onSubmit={handleSubmit}
        className="flex-col justify-center items-center space-y-3 bg-slate-200 rounded-md relative p-4 w-full">
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
         disabled={item.disabled}
         value={formValues[item.key]}
         onChange={(e) => handleInputChange(e, item.key)}
        />
       </div>
      </div>
     ))}
    </div>
    <div className="flex-col w-[20%] relative  space-y-3 items-center justify-center gap-4 overflow-auto my-2 p-2">
     <label className='text-xl w-32 font-bold text-center pl-5'>
      Picture
     </label>
     <img
      src={'https://picsum.photos/200'}
      className="w-32 h-32  mr-1 rounded-xl border-2 border-purple-600/50"
      alt={'img'}/>
     <button className="bg-orange-400 w-32 p-2 rounded-md text-white" type='button'>
      Change Image
     </button>
    </div>
   </div>
   {/*}
  <div className="w-[400px] flex items-center justify-center mx-auto px-2">
   <div className="flex-row   w-full">
    <label className="font-semibold pr-2">Picture</label>
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
     <button onClick={removeSelectedImage} className="bg-orange-400 p-2 rounded-md text-white">
      Remove This Image
     </button>
    )}
   </div>
  </div> */}
   <div className="flex justify-between">
    <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg rounded-md hover:bg-emerald-800" type="submit">
     SAVE
    </button>
   </div>
  </form>
 );
}


export default addCategory;