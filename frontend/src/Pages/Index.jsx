import React, { useState } from 'react'
import { Dashboard } from '../components/Dashboard'
import { SearchCheck } from '../components/SearchCheck'
import { MovieList } from '../components/MovieList'

export const Index = () => {
  const [categories, setCategories] = useState([])

  const movies = [
    {
      src: 'https://tr.web.img4.acsta.net/pictures/21/10/13/11/52/2707524.jpg',
      rate: '7.0',
    },
  ]

  return (
    <div className="">
      <Dashboard />
      <MovieList movies={movies} title={'Trendlerde'} />
    </div>
  )
}
