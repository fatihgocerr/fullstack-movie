import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { baseUrl } from '../apiService'
import {
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  MdBookmarkBorder,
  MdBookmark,
} from 'react-icons/md'

import { Rate } from '../components/MovieList'
export const MovieDetail = () => {
  const [movie, setMovie] = useState({})
  const navigate = useNavigate()
  let { id } = useParams()

  useEffect(() => {
    axios
      .get(baseUrl + `/movies/getById/${id}`)
      .then(({ data }) => {
        setMovie(data.data)
      })
      .catch((err) => navigate('/Page404'))
  }, [id])
  console.log(movie)
  return (
    <div className=" mobile:bg-red-300 mb-10">
      <div className="aspect-w-16 aspect-h-6">
        <iframe
          src={movie.trailer}
          frameBorder="0"
          className="w-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col gap-4  mt-4 justify-center lg:justify-between lg:items-end lg:flex-row">
        <div className="flex gap-4 items-center flex-col lg:flex-row text-white">
          <p className="text-sm sm:text-lg text-center">
            {movie.name} • 2022 • 2h 10m
          </p>
          <Rate className={'font-medium text-lg'} rate={movie.imdbScore} />
          <div className="flex gap-2">
            <span className="tag-category">Aksiyon</span>
            <span className="tag-category">Macera</span>
          </div>
        </div>

        <div className="flex  justify-center text-lg gap-4 items-end">
          <div className="flex items-center justify-center gap-[2px] cursor-pointer hover:bg-base-200 rounded-md p-1 px-2">
            <MdOutlineFavoriteBorder />
            <span className="text-base">Beğen</span>
          </div>

          <div className="flex items-center justify-center cursor-pointer hover:bg-base-200 rounded-md p-1 px-2">
            <MdBookmarkBorder />
            <span className="text-base">Kaydet</span>
          </div>
        </div>
      </div>
      <p className="mt-4">{movie.summary}</p>
      <div className="divider  my-1"></div>
      Yönetmen: <span className="text-primary"> Joseph Kosinski</span>
      <div className="divider my-1"></div>
      Yazar:{' '}
      <span className="text-primary">Jim Cash, Jack Epps Jr, Peter Craig</span>
      <div className="divider my-1"></div>
      Yıldız Oyuncular:{' '}
      <span className="text-primary">
        Tom Cruise, Jennifer Connelly, Miles Teller
      </span>
    </div>
  )
}
