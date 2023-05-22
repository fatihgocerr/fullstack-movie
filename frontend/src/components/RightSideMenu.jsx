import React, { useEffect, useState, useRef } from 'react'

import { BsBell } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import { MdOutlineFavoriteBorder, MdBookmarkBorder } from 'react-icons/md'
import { openModal } from '../slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../apiService'

export const RightSideMenu = () => {
  const dispatch = useDispatch()
  const openRegister = () => dispatch(openModal('register'))
  const openLogin = () => dispatch(openModal('login'))
  const { userInfo } = useSelector((state) => state.userSlice)
  const [user, setUser] = useState({})

  useEffect(() => {
    if (userInfo !== null) {
      getUser({ setUser, userInfo })
    }
  }, [userInfo])

  return (
    <div className="w-full h-full flex justify-center items-center gap-2 -mt-2">
      {userInfo !== null ? (
        <Profile user={user} />
      ) : (
        <>
          <button
            className="bg-gray hover:text-primary text-lg"
            onClick={openLogin}
          >
            Giriş
          </button>{' '}
          /{' '}
          <button className="hover:text-primary text-lg" onClick={openRegister}>
            Kayıt Ol
          </button>
        </>
      )}
    </div>
  )
}

const Profile = ({ user }) => {
  const refProfile = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  }, [])

  const handleClickOutside = (e) => {
    if (!refProfile.current.contains(e.target)) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  const [show, setShow] = useState(false)
  return (
    <div
      ref={refProfile}
      className={`relative hover:bg-gray-900  flex gap-2 items-center cursor-pointer  p-2 rounded-md ${
        show && 'bg-gray-900 '
      }`}
    >
      <img
        className="h-12 w-12 object-cover cursor-pointer rounded-full "
        src={user?.profile?.profilePicture}
      />{' '}
      {user.username}
      {show && (
        <ul className="bg-gray-900  absolute top-[4.1rem] w-full left-0 p-2 z-50  rounded-md ">
          <li className="hover:bg-base-100 p-2 text-primary flex items-center gap-2">
            <BsBell /> Bildirimler
          </li>
          <li className="hover:bg-base-100 p-2  flex items-center gap-2">
            <AiFillSetting /> Ayarlar
          </li>
          <li className="hover:bg-base-100 p-2  flex items-center gap-2">
            <MdOutlineFavoriteBorder /> Beğenilenler
          </li>
          <li className="hover:bg-base-100 p-2  flex items-center gap-2">
            <MdBookmarkBorder /> Kaydedilenler
          </li>
        </ul>
      )}
    </div>
  )
}
