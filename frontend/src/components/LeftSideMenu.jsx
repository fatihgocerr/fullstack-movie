import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsCameraReels } from 'react-icons/bs'
import { RiSlideshow3Line } from 'react-icons/ri'
import { SlCalender } from 'react-icons/sl'
import { NavLink } from 'react-router-dom'

export const LeftSideMenu = () => {
  const links = [
    {
      name: 'Anasayfa',
      url: '/',
      icon: <AiOutlineHome className="sm:w-6 sm:h-6" />,
    },
    {
      name: 'Filmler',
      url: '/movies',
      icon: <BsCameraReels className="sm:w-6 sm:h-6" />,
    },
    {
      name: 'Diziler',
      url: '/series',
      icon: <RiSlideshow3Line className="sm:w-6 sm:h-6" />,
    },
    {
      name: 'Yakında',
      url: '/upcoming',
      icon: <SlCalender className="sm:w-6 sm:h-6" />,
    },
  ]

  return (
    <div className="h-screen  min-h-full bg-base-300 rounded-tr-2xl rounded-br-2xl ">
      <div className="sticky top-0 ">
        <h1 className="hidden md:block text-primary text-xl sm:text-2xl text-center font-bold italic p-4 ">
          Movie PR
        </h1>
        <ul className="relative">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.url}
              className={({ isActive }) =>
                `custom-link  ${
                  isActive &&
                  ' border-r-4 font-semibold bg-primary/30 text-primary'
                }`
              }
            >
              <span className="basis-1/3 flex justify-end">{link.icon}</span>
              <span className="basis-2/3">{link.name}</span>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  )
}
