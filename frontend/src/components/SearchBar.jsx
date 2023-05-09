import React, { useEffect, useState } from "react";
import { Rate } from "./MovieList";
import axios from 'axios';

export const SearchBar = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState("")
  const handleQuery =(e)=>{
    setQuery(e.target.value)

  }


  useEffect(()=>{
    if(query !== "")  dataFetch();
  },[query])



  const dataFetch= async()=>{
    const options = {
      method: 'GET',
      url:`https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${query}`,
      headers: {
        'X-RapidAPI-Key': 'df0cc163a3mshb1706c81b5c4e50p1f0273jsn53680d108ca5',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setData(response.data.results || [])
      console.log(response.data.results)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="relative">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon />
        </div>
        <input
          value={query}
          onChange={handleQuery}
          type="search"
          id="default-search"
          className="block w-full p-2 pl-10 outline-none text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 font-semibold dark:placeholder-gray-400 dark:text-white "
          placeholder="Filmler, Diziler, Animeler..."
        />
      </div>
      <ul className="bg-gray-500 rounded-lg  absolute top-12 z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
         query && data.map((movie,i)=> <MovieResult key={i} {...movie} />)
        }
        

      </ul>
    
    </div>
  );
};



const MovieResult =({titleText, primaryImage, releaseYear, titleType})=>(
  <li className="flex gap-2 p-2 hover:bg-slate-600 cursor-pointer rounded-lg">
  <img src={primaryImage?.url} 
  className="w-20 h-20 object-cover" />

    <div className="flex flex-col justify-around flex-wrap">
      <Rate rate={"7.0"} />
      <h6>{titleText?.text} ({releaseYear?.year})</h6>
      <p className="flex flex-wrap gap-x-2 items-center text-slate-700">
         {titleType?.text }
      </p>
    </div>
</li>
)


const Icon =()=>(
  <svg
  aria-hidden="true"
  className="w-5 h-5 text-gray-500 "
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  ></path>
</svg>
)
