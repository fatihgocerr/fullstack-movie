import {ArrowDown, ArrowUp} from 'react-feather'
import React, {useEffect, useRef, useState} from "react";
import OutsideClick from '../../../utils/outsideClick';
import {getById} from "@/services/user.service";
import {useSelector} from "react-redux";


const UserMenu = () => {
 const [userMenuStatus, setUserMenuStatus] = useState(false);
 const buttonRef = useRef(null);
 const buttonOutsideClick = OutsideClick(buttonRef);
const [user, setUser] = useState(null)
 const userMenuhandle = () => {
  setUserMenuStatus(!userMenuStatus)
 }

 const userSelector = useSelector(state => state.userSlice.user)

 useEffect(() => {
  if (buttonOutsideClick) {
   setUserMenuStatus(false)
  }
 }, [buttonOutsideClick])

 useEffect(() => {
  if (user === null) {
   getById(userSelector.userId, userSelector.token).then(res => {
    setUser(res.data)
   }).catch(err => {
    console.log(err)
   })
  }
 }, [])



 return (
  <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg relative"
          onClick={userMenuhandle} ref={buttonRef}>
   <span className="sr-only">User Menu</span>
   <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
    <span className="font-semibold">{(user?.profile?.name + ' ' + user?.profile?.surname).toUpperCase()}</span>
    <span className={`text-sm font-bold ${user?.role === 'admin' ? 'text-emerald-600' : 'text-blue-600'}`}>{user?.role.toUpperCase()}</span>
   </div>
   <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
        <img
         // src="https://randomuser.me/api/portraits/women/68.jpg"
         src={user?.profile?.profilePicture}
         alt="user profile photo"
         className="h-full w-full object-cover"
        />
      </span>

   {userMenuStatus &&
    <div
     className='absolute right-0 sm:-bottom-20 bg-slate-500 px-2 py-1 space-x-2 text-yellow-50 w-full -bottom-28 space-y-2 rounded-md z-[1]'>
     <a className='block hover:bg-gray-50 hover:text-black text-center p-1'>user Profile</a>
     <a className='block hover:bg-gray-50 hover:text-black text-center p-1'>user setting</a>
    </div>
   }

   {userMenuStatus ?
    <ArrowDown className="hidden sm:block h-6 w-6 text-gray-300"/> :
    <ArrowUp className="hidden sm:block h-6 w-6 text-gray-300"/>
   }
  </button>
 );
};

export default UserMenu;
