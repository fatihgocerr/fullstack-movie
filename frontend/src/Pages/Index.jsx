import React, { useState } from 'react'
import { Dashboard } from '../components/Dashboard'
import { SearchCheck } from '../components/SearchCheck'
import { MovieList } from '../components/MovieList'

export const Index = () => {
  const [categories, setCategories] = useState([
    {
      name: 'Mystery',
      checked: true,
    },
    {
      name: 'Martial Arts',
      checked: true,
    },
    {
      name: 'Action',
      checked: true,
    },
  ])

  const movies = [
    {
      src: 'https://tr.web.img4.acsta.net/pictures/21/10/13/11/52/2707524.jpg',
      rate: '7.0',
    },
  ]

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12 lg:col-span-10">
        <Dashboard />
        <MovieList movies={movies} title={'Trendlerde'} />
      </div>
      <div className="order-first col-span-12  lg:order-last lg:col-span-2 ">
        <SearchCheck
          title={'Kategoriler'}
          setCategories={setCategories}
          categories={categories}
        />
      </div>

      {/* <button onClick={openModalDispatch}>register</button> */}
    </div>
  )
}
