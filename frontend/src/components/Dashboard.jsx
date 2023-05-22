import React, { useState, useRef, useEffect } from 'react'
import { FaPlay } from 'react-icons/fa'
import { RiInformationFill } from 'react-icons/ri'

export const Dashboard = () => {
  const [play, setPlay] = useState(false)
  const iframeRef = useRef(null)
  useEffect(() => {}, [play])

  const playHandle = () => {
    setPlay(true)
  }
  return (
    <div className="relative  hover:cursor-pointer ">
      <div className="aspect-w-16 aspect-h-5">
        {play ? (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JPZBw_L5Ajw?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ) : (
          <img
            className="rounded-xl object-cover transition-all duration-200 hover:opacity-70"
            src="https://territorystudio.com/wp-content/uploads/2020/10/Dune-Thumbnail.png"
          />
        )}
      </div>
      {!play && (
        <div className="absolute bottom-3 right-3 flex gap-2">
          <BlurButton onClick={playHandle} text="Oynat" icon={<FaPlay />} />
          <BlurButton text="Bilgi" icon={<RiInformationFill size={22} />} />
        </div>
      )}
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
