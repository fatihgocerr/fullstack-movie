import React, { useEffect, useState, useRef } from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import { BsBell } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { MdOutlineFavoriteBorder, MdBookmarkBorder } from 'react-icons/md'
import { openModal } from '../slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../slices/userSlice'

export const RightSideMenu = () => {
  const dispatch = useDispatch()
  const openRegister = () => dispatch(openModal('register'))
  const openLogin = () => dispatch(openModal('login'))
  const { userInfo } = useSelector((state) => state.userSlice)

  return (
    <div>
      {userInfo !== null ? (
        <Profile user={userInfo} />
      ) : (
        <div className="relative w-40  flex gap-2 items-center justify-center cursor-pointer  p-2 text-lg  rounded-md ">
          <button className="bg-gray hover:text-primary " onClick={openLogin}>
            Giriş
          </button>
          /
          <button className="hover:text-primary " onClick={openRegister}>
            Kayıt Ol
          </button>
        </div>
      )}
    </div>
  )
}

const Profile = ({ user }) => {
  const refProfile = useRef(null)
  const dispatch = useDispatch()

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
      className={`relative w-40 hover:bg-gray-900  flex gap-2 items-center justify-center cursor-pointer  p-2 text-sm  rounded-md ${
        show && 'bg-gray-900 '
      }`}
    >
      <img
        className="h-7 w-7 object-cover cursor-pointer rounded-full "
        src={user?.avatar}
      />{' '}
      {`${user?.name} ${user?.surname}`}
      <MdOutlineKeyboardArrowDown />
      {show && (
        <ul className="bg-gray-900  absolute top-12 w-full left-0 p-2 z-50  rounded-md ">
          <li className="hover:bg-primary/30 p-2 text-primary flex items-center gap-2">
            <BsBell /> Bildirimler
          </li>
          <li className="hover:bg-primary/30 p-2  flex items-center gap-2">
            <AiFillSetting /> Ayarlar
          </li>
          <li className="hover:bg-primary/30 p-2  flex items-center gap-2">
            <MdOutlineFavoriteBorder /> Beğenilenler
          </li>
          <li className="hover:bg-primary/30 p-2  flex items-center gap-2">
            <MdBookmarkBorder /> Kaydedilenler
          </li>

          <li
            onClick={() => dispatch(logout())}
            className="hover:bg-primary/30 p-2  flex items-center gap-2"
          >
            <HiOutlineLogout /> Çıkış
          </li>
        </ul>
      )}
    </div>
  )
}
