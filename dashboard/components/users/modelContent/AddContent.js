import React, {useEffect, useState} from "react";
import InputBox from "@/components/common/InputBox";
import {create, uploadAvatar} from '@/services/user.service';
import {trChars} from "@/lib/helpers";
import {toast} from "react-toastify";
import SingleBox from "@/components/common/SingleBox";
import {useSelector} from "react-redux";


const AddUser = ({setModal, setRefTable}) => {
 const [formValues, setFormValues] = useState({
  username: '',
  password: '',
  email: '',
  profile: {
   name: "",
   surname: "",
   birthDate: '',
   profilePicture: '',
   gender: '',
   country: '',
   language: ''
  },
  settings: {
   language: '',
   notifications: null,
  },
  role: '',
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
  {label: 'User Name', key: 'username', type: 'text', selectBox: false},
  {label: 'Password', key: 'password', type: 'password', selectBox: false},
  {label: 'Email', key: 'email', type: 'email', selectBox: false},
  {label: 'Name', key: 'profile.name', type: 'text', selectBox: false},
  {label: 'Surname', key: 'profile.surname', type: 'text', selectBox: false},
  {label: 'Birth Date', key: 'profile.birthDate', type: 'text', selectBox: false},
  {label: 'Gender', key: 'profile.gender', type: 'text', selectBox: false},
  {label: 'Country', key: 'profile.country', type: 'text', selectBox: false},
  {label: 'Role', key: 'role', type: 'text', selectBox: false},
  {label: 'Language', key: 'settings.language', type: 'text', selectBox: false},
  {label: 'Language', key: 'profile.language', type: 'text', selectBox: false},
  {label: 'Notifications', key: 'settings.notifications', type: 'checkbox', selectBox: true},
 ]
 const authKey = useSelector(state => state.userSlice.user.token)

 const handleSubmit = async (e) => {
  e.preventDefault();

  await create(formValues,authKey).then(async (res) => {
   if (res.code === 201) {
    await uploadAvatar(selectedImage, res.data.id).then((res) => {
    }).catch((err) => {
     })
    toast.success('Created Success')
   }
  }).catch((err) => {
   toast.error(`${!!err.response.data.validationErrors?.[0].msg ? err.response.data.validationErrors?.[0].msg : 'Something went wrong '}`)
   console.log('err', err)
  })
  setRefTable(false);
  // setModal(false)
  // uploadMultipleImage(selectedImage)
 }

 const handleInputChange = (event) => {
  const {name, value} = event.target;

  if (name.includes('.')) {
   const [parentKey, childKey] = name.split('.'); // nokta ayracını kullanarak key değerine ulaşma

   setFormValues((prevValues) => ({
    ...prevValues,
    [parentKey]: {
     ...prevValues[parentKey],
     [childKey]: value, // ilgili alanı güncelleme
    },
   }));
  } else {
   setFormValues((prevValues) => ({
    ...prevValues,
    [name]: value, // ilgili alanı güncelleme
   }));
  }
 };
 const singleData = [
  {
   key: 'settings.notifications',
   values: [
    {id: true, value: 'ONAYLA'},
    {id: false, value: 'REDDET'}
   ]
  }
 ];


 return (
  <form onSubmit={handleSubmit}
        className="flex-row justify-center items-center space-y-3 relative p-4 w-full bg-slate-200 rounded-md">
   {formItem.map((item, index) => (
    <div key={index} className="flex justify-center items-center w-[400px] mx-auto">
     <div className="flex justify-between w-full h-8 items-center px-2">
      <label className="font-semibold pr-2">{item.label}</label>

      {item.selectBox
       ? <SingleBox data={singleData} formValues={formValues} setFormValues={setFormValues}/>
       : <InputBox item={item} formValues={formValues} onChange={(e) => handleInputChange(e, item.key)}/>
      }

     </div>
    </div>
   ))}

   <div className="w-[400px] flex items-center justify-center mx-auto px-2">
    <div className="flex-row   w-full">
     <label className="font-semibold pr-2">Avatar</label>
     <input
      className="border-2  border-purple-600/50 w-[70%] rounded"
      type="file"
      accept="image/*"
      name="user[image]"
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


export default AddUser;