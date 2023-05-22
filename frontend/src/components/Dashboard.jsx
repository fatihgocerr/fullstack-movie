import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { RiInformationFill } from 'react-icons/ri'

export const Dashboard = () => {
  return (
    <div className="relative  hover:cursor-pointer ">
      <img
        className="max-w-full min-h-[150px]  rounded-xl h-auto object-cover transition-all duration-200 hover:opacity-70"
        src="https://territorystudio.com/wp-content/uploads/2020/10/Dune-Thumbnail.png"
      />
      <div className=" absolute bottom-3 right-3 flex gap-2">
        <BlurButton text="Oynat" icon={<FaPlay />} />
        <BlurButton text="Bilgi" icon={<RiInformationFill size={22} />} />
      </div>
    </div>
  )
}

const BlurButton = ({ text, icon, ...rest }) => {
  return (
    <button {...rest} className="blur-button text-sm">
      <span className="inline">{icon}</span> {text}
    </button>
  )
}
