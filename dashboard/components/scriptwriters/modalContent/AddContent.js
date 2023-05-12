import React, {useEffect, useState} from "react";
import InputBox from "@/components/common/InputBox";
import {create} from '@/services/user.service';
import {trChars} from "@/lib/helpers";
import {toast} from "react-toastify";


const AddMovies = ({setModal,setRefTable}) => {
 const [formValues, setFormValues] = useState({
  name: '',
  surname: '',
  birthDate: '',
  birthPlace: '',
  deathDate: '',
  deathPlace: '',
  biography: '',
  gender: '',
  awards: '',
  nationality: '',
 });

 //For Image Preview
 const [selectedImage, setSelectedImage] = useState('');
 // This function will be triggered when the file field change
 const imageChange = async (e) => {
  if (e.target.files && e.target.files.length > 0) {
   function renameFile(file, newFileName) {
    const modifiedFile = new File([file], newFileName, {type: file.type});
    return modifiedFile;
   }
   let imageData = [];
   for (const file of e.target.files) {
    const renamedFile = renameFile(file, trChars(file.name));
    imageData.push(renamedFile);
   }

   setSelectedImage(imageData);
   setFormValues({...formValues, poster: imageData[0], bannerPoster: imageData[1]})
  }
 };
 const removeSelectedImage = () => {
  setSelectedImage('');
 };

 const formItem = [
  {label: 'Name', key: 'name', type: 'text', selectBox: false},
  {label: 'Surname', key: 'surname', type: 'text', selectBox: false},
  {label: 'Birth Date', key: 'birthDate', type: 'text', selectBox: false},
  {label: 'Birth Place', key: 'birthPlace', type: 'text', selectBox: false},
  {label: 'Death Date', key: 'deathDate', type: 'text', selectBox: false},
  {label: 'Death Place', key: 'deathPlace', type: 'text', selectBox: false},
  {label: 'Biography', key: 'biography', type: 'text', selectBox: false},
  {label: 'Gender', key: 'gender', type: 'text', selectBox: false},
  {label: 'Awards', key: 'awards', type: 'text', selectBox: false},
  {label: 'Nationality', key: 'nationality', type: 'text', selectBox: false},
 ]

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(formValues)

  await create(formValues).then(async (res) => {
   if (res.code === 201) {
    // await uploadMultipleImage(selectedImage, res.data.id).then((res) => {
    // }).catch((err) => {
    //  console.log('imageupload', err)
    // })

    toast.success('Created Success')
   }
  }).catch((err) => {
   toast.error('Something went wrong')
   console.log('err', err)
  })
  setRefTable(false);
  setModal(false)
  // uploadMultipleImage(selectedImage)
 }

 const handleInputChange = (event) => {
  const {name, value} = event.target;
  setFormValues((prevValues) => ({
   ...prevValues,
   [name]: value
  }));
 };
 return (
  <form onSubmit={handleSubmit}
        className="flex-row justify-center items-center space-y-3 relative p-4 w-full bg-slate-200 rounded-md">
   {formItem.map((item, index) => (
    <div key={index} className="flex justify-center items-center w-[400px] mx-auto">
     <div className="flex justify-between w-full h-8 items-center px-2">
      <label className="font-semibold pr-2">{item.label}</label>

      <InputBox item={item} formValues={formValues} onChange={(e) => handleInputChange(e, item.key)}/>

      {/*  item.selectBox
       ? <SelectBox item={item} formValues={formValues} allData={allData}  onChange={(e) => handleInputChange(e, item.key)}/>
       : <InputBox item={item} formValues={formValues} onChange={(e) => handleInputChange(e, item.key)}/>
      */}
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
      disabled={true}
      multiple={false}
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


export default AddMovies;