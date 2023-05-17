import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {deleteById} from "@/services/user.service";
import {Image, Switch} from "antd";


const Delete = ({data, setModal}) => {
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

 const handleDelete = () => {
  if (window.confirm('Silmek istediğinize emin misiniz ?')) {
   deleteById(data[0]?._id).then((res) => {
    const toastPromise = new Promise((resolve, reject) => {
     res.code === 200 ? resolve('success') : reject('error')
    })
    toast.promise(toastPromise, {
     pending: 'Siliniyor...',
     success: 'Silme Başarılı 👌',
     error: 'Silme Başarısız 🤯'
    })
    setModal(false)
   }).catch((err) => {
    toast.error('something went wrong')
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
        {item.selectBox
         ? <Switch checked={data[0]['settings']['notifications']} className={`${'bg-slate-400 '}`} />
         :
        <input
         className="border-2 border-purple-600/50 w-[70%] rounded h-8 p-2"
         type={item.type}
         name={item.key}
         disabled={true}
         value={item.key.includes('.') ?  data[0][item.key.split('.')[0]][item.key.split('.')[1]] : data?.[0]?.[item.key]}  //parent.child control
        />
        }
       </div>
      </div>
     ))}
    </div>
    <div className="w-[20%] flex mt-8 justify-center ">

     <div className="flex flex-col w-full  space-y-3  gap-4 overflow-auto my-2 p-2">
      <label className="text-xl w-32 font-bold text-center">Avatar</label>
      <Image
       // src={URL.createObjectURL(file)}
       // src={`${data?.[0].image || 'https://picsum.photos/200'}`}
       src={`${!!data[0]['profile']['profilePicture'] ? data[0]['profile']['profilePicture'] : 'https://picsum.photos/200' }`}
       className="w-32 h-32 mr-1 rounded-full border-2 border-purple-600/50"
       alt="image"
      />

     </div>


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


export default Delete;