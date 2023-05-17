import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {ArrowDown, Check, Eye} from "react-feather";
import {trChars} from "@/lib/helpers";
import {Image, Switch} from "antd";
import {updateAvatar,update} from "@/services/user.service";
import {useSelector} from "react-redux";

const Edit = ({data, subData, setModal}) => {
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

 const [changeBtn, setChangeBtn] = useState(false);
 //For Image Preview
 const [selectedImage, setSelectedImage] = useState('');
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
 useEffect(() => {
  if (data && data.length > 0) {
   const formData = {
    username: data?.[0]?.username,
    email: data?.[0]?.email,
    profile: {
     name: data?.[0]?.profile?.name,
     surname: data?.[0]?.profile?.surname,
     birthDate: data?.[0]?.profile?.birthDate,
     profilePicture: data?.[0]?.profile?.profilePicture,
     gender: data?.[0]?.profile?.gender,
     country: data?.[0]?.profile?.country,
     language: data?.[0]?.profile?.language
    },
    settings: {
     language: data?.[0]?.settings?.language,
     notifications: data?.[0]?.settings?.notifications,
    },
    role: data?.[0]?.role,
   };
   setFormValues(formData);
  }
 }, [data]);

 const authKey = useSelector(state => state.userSlice.user.token)

 const handleSubmit = async (e) => {
  e.preventDefault();
  // console.log('formValues', formValues)
  await update(formValues, data?.[0]?._id,authKey).then((res) => {
   // console.log('res,', res)
   const toastPromise = new Promise((resolve, reject) => {
    res.code === 200 ? resolve('success') : reject('error')
   })
   toast.promise(toastPromise, {
    pending: 'Updating is Pending...',
    success: 'Update is Successfly 👌',
    error: 'Update is Failed 🤯'
   })
   setModal(false)
  }).catch((err) => {
   toast.error(`${!!err.response.data.validationErrors?.[0].msg ? err.response.data.validationErrors?.[0].msg : 'Something went wrong '}`)

   console.log(err)
  })


 }
 const updateImage = async () => {
  await updateAvatar(selectedImage, data?.[0]?._id).then((res) => {
   // console.log(res)
   const toastPromise = new Promise((resolve, reject) => {
    res.code === 200 ? resolve('success') : reject('error')
   })
   toast.promise(toastPromise, {
    pending: 'Updating Avatar is Pending...',
    success: 'Update Avatar is Successfly 👌',
    error: 'Update Avatar is Failed 🤯'
   })
setModal(false)

  }).catch((err) => {
   toast.error(`${!!err.response.data.validationErrors?.[0].msg ? err.response.data.validationErrors?.[0].msg : 'Something went wrong '}`)
   console.log(err)
  })
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

 const SwitchChange = (e) => {
  setFormValues({...formValues, settings: {...formValues.settings, notifications: e}})
 }
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
           ? <Switch checked={(formValues[item.key.split('.')[0]][item.key.split('.')[1]])}
                     className={`${'bg-slate-400 '}`}
                     onChange={(e) => SwitchChange(e)}/>
           : <input
            className="border-2 border-purple-600/50 w-[70%] rounded h-8 p-2"
            type={item.type}
            name={item.key}
            disabled={item.disabled}
            value={item.key.includes('.') ? formValues[item.key.split('.')[0]][item.key.split('.')[1]] : formValues[item.key]}
            onChange={(e) => handleInputChange(e, item.key)}
           />}
         </div>
        </div>
       ))}
      </div>
      <div className='flex-col  w-[20%] relative'>

       <div
        className="flex flex-col  relative w-full  space-y-3 items-center justify-center gap-4 overflow-auto my-2 p-2">
        <label className='text-xl w-32 font-bold text-center '>
         Avatar
        </label>
        <Image
         src={!!formValues.profile.profilePicture ? formValues.profile.profilePicture : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'}
         className="w-32 h-32  mr-1 rounded-full border-2 border-purple-600/50"
         alt={`avatar`}/>
       </div>

       <button className={`${changeBtn ? 'bg-red-600' : 'bg-orange-400'} ml-2 w-32 p-2 rounded-md text-white`}
               type={'button'}
               onClick={() => setChangeBtn(!changeBtn)}>
        {/*onClick={() => toast('yakında')}>*/}
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

       <div
        className="flex-col  relative w-full  space-y-3 items-center justify-center gap-4 overflow-auto my-2 p-2">
        <div className='w-full flex items-center justify-center'>
         <label className='text-xl w-32 font-bold text-center '>
          Avatar
         </label>
        </div>
        <div className='w-full flex items-center justify-center'>
         <img
          src={`${formValues.profile.profilePicture || 'https://picsum.photos/200'} `}
          className="w-32 h-32  mr-1 rounded-xl border-2 border-purple-600/50"
          alt={`${formValues.profile.profilePicture || 'avatar'}`}/>
        </div>
       </div>

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
         multiple={false}
         onChange={imageChange}
        />

        {selectedImage && (
         <div className=' flex flex-col w-full items-center gap-4'>

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


export default Edit;