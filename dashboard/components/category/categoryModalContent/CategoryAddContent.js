import React, {useState} from "react";
import {addGenre} from "@/services/genres.service";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";


const addCategory = ({setModal, setRefTable}) => {
 const authKey = useSelector( state => state.userSlice.user.token)
 const [formValues, setFormValues] = useState({
  name: '',
  description: '',
  tags: '',
  image: ''
 })
 //For Image Preview
 const [selectedImage, setSelectedImage] = useState('');
 const imageChange = (e) => {
  if (e.target.files && e.target.files.length > 0) {
   setSelectedImage(e.target.files);
  } };
 const removeSelectedImage = () => {
  setSelectedImage('');
 };

 const formItem = [
  {label: 'Name', key: 'name', type: 'text'},
  {label: 'Description', key: 'description', type: 'text'},
  {label: 'Tags', key: 'tags', type: 'text'}
 ]
 const handleSubmit = (e) => {
  e.preventDefault();
  addGenre(formValues,authKey).then((res) => {

   toast.success('Category Added Successfully')
  }).catch((err) => {
   console.log(err)
   toast.error('Something Went Wrong')
  })
  setRefTable(true)
  setModal(false)

 }

 const handleInputChange = (e) => {
  const {name, value} = e.target;
  setFormValues( (prevVal) => ({
   ...prevVal,
   [name]: value
  }));

 };
 return (
 <form onSubmit={handleSubmit} className="flex-row justify-center items-center space-y-3 relative p-4 w-full">
  {formItem.map((item, index) => (
   <div key={index} className="flex justify-center items-center w-[400px] mx-auto">
    <div className="flex justify-between w-full h-8 items-center px-2">
     <label className="font-semibold pr-2">{item.label}</label>
     <input
      className="border-2 border-purple-600/50 w-[70%] rounded h-8 p-2"
      type={item.type}
      name={item.key}
      value={formValues[item.key]}
      onChange={(e) => handleInputChange(e, item.key)}
     />
    </div>
   </div>
  ))}

  <div className="w-[400px] flex items-center justify-center mx-auto px-2">
   <div className="flex-row   w-full">
    <label className="font-semibold pr-2">Picture</label>
    <input
     className="border-2  border-purple-600/50 w-[70%] rounded"
     type="file"
     accept="image/*"
     name="user[image]"
     multiple={false}
     disabled={true}
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


export default addCategory;

{/*
  <div className="flex-row justify-center items-center space-y-3 relative p-4 w-full ">
   {formItem.map((item, index) => (
    <div key={index} className='flex justify-center items-center w-[400px] mx-auto'>
     <div className="flex justify-between w-full h-8 items-center px-2">
      <label className="font-semibold pr-2">{item.label}</label>
      <input  className="border-2 border-purple-600/50 w-[70%] rounded h-8 p-2 " type="text"/>
     </div>
    </div>
   ))
   }

   <div className='w-[400px] flex items-center justify-center mx-auto px-2'>
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
      {
       selectedImage && [...selectedImage].map((file, index) => <img key={index} src={URL.createObjectURL(file)}
                                                                     className="w-32 h-32 mr-1 rounded-xl border-2 border-purple-600/50"/>)
      }

     </div>

     {selectedImage &&
      <button onClick={removeSelectedImage} className='bg-orange-400 p-2 rounded-md text-white'>
       Remove This Image
      </button>
     }

    </div>
   </div>
   <div className="flex justify-between">
    <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg rounded-md hover:bg-emerald-800"
    onClick={handleSubmit}>Submit</button>
   </div>
  </div>
  */}
