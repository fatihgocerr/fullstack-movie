import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const MovieList = ({ title, link, movies }) => {
  return (
    <div className="my-4">
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-xl text-white tracking-wide font-semibold">
          {title}
        </h1>
        <Link
          to={link}
          className="font-semibold tracking-wide cursor-pointer transition-all duration-200 hover:text-gray-500"
        >
          Hepsini Gör
        </Link>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
        {movies.map((movie, i) => (
          <div key={i} className="relative ">
            <img
              className=" rounded-md transition-all duration-200 hover:opacity-70 cursor-pointer"
              src={movie.src}
            ></img>
            <Rate
              className={
                'absolute top-0 right-0 backdrop-blur-sm px-2 bg-white/30 text-white rounded-bl-lg rounded-tr-lg'
              }
              rate={movie.rate}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export const Rate = ({ rate, className }) => (
  <span className={`  ${className}`}>
    <BsFillStarFill className="inline mb-1 mr-1  text-orange-300" />
    {rate}
  </span>
)
