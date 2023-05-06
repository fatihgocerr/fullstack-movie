import React from 'react'
import {FaPlay} from "react-icons/fa"
import {RiInformationFill} from "react-icons/ri"

export const Dashboard = () => {
  return (
        <div className="relative h-auto hover:cursor-pointer hover:opacity-90">
            <img className='max-w-full rounded-xl h-auto' src='https://c4.wallpaperflare.com/wallpaper/799/191/755/godzilla-movies-digital-art-movie-poster-wallpaper-preview.jpg' />
            <div className=' absolute bottom-3 right-3 flex gap-2'>
              <BlurButton text="Oynat" icon={<FaPlay />} />
              <BlurButton text="Bilgi"  icon={<RiInformationFill size={22} />} />
            </div>
            
        </div>
  )
}


const BlurButton=({text,icon, ...rest})=>{
  return <button className='blur-button text-sm'>
      <span className='inline'>{icon}</span> {text}
  </button>
}
