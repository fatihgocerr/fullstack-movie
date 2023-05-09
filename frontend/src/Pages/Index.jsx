import React, { useState } from 'react'
import { Dashboard } from '../components/Dashboard'
import { openModal } from '../slices/modalSlice';
import { useDispatch } from 'react-redux';
import { SearchCheck } from '../components/SearchCheck';
import { MovieList } from '../components/MovieList';


export const Index = () => {
  const [categories, setCategories] = useState([
    {
      name: "Aksiyon",
      checked: true,
    },
    {
      name: "Macera",
      checked: true,
    },
    {
      name: "Komedi",
      checked: true,
    },
  ]);

  const movies = [
    {
      src:"https://tr.web.img4.acsta.net/pictures/21/10/13/11/52/2707524.jpg",
      rate:"7.0"
    }
  ]

  const dispatch = useDispatch();
  const openModalDispatch = () =>dispatch(openModal("register"));
  return (
    <div className='grid grid-cols-12 gap-2'>
      <div className='col-span-12 lg:col-span-10'>
        <Dashboard />
        <MovieList movies={movies} title={"Trendlerde"} />
      </div>
      <div className='order-first col-span-12  lg:order-last lg:col-span-2 '>
        <SearchCheck
         title={"Kategoriler"}
         setCategories={setCategories}
         categories={categories}
         />
      </div>


      
      {/* <button onClick={openModalDispatch}>register</button> */} 
    </div>
  )
}
