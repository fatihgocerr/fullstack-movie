import React, { useCallback, useEffect, useState } from 'react'
import { Rate } from './MovieList'
import { queryResults } from '../apiService'

export const SearchBar = () => {
  const [result, setResult] = useState([])
  const [query, setQuery] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState(query)

  useEffect(() => {
    const timer = setTimeout(() => setQuery(debouncedTerm), 1000)
    return () => clearTimeout(timer)
  }, [debouncedTerm])

  useEffect(() => {
    if (query !== '') dataFetch()
  }, [query])

  const dataFetch = useCallback(async () => {
    try {
      const data = await queryResults(query)
      setResult(data || [])
    } catch (error) {
      console.error(error)
    }
  })

  return (
    <div className="block sm:relative w-full">
      <label
        htmlFor="default-search"
        className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon />
        </div>
        <input
          autoComplete="off"
          onChange={(e) => setDebouncedTerm(e.target.value)}
          value={debouncedTerm}
          type="search"
          id="default-search"
          className="block w-full p-2 pl-10 outline-none text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 font-semibold dark:placeholder-gray-400 dark:text-white "
          placeholder="Filmler, Diziler, Animeler..."
        />
      </div>
      <ul className="bg-base-300 w-[75%] sm:w-full rounded-lg  absolute top-[5.7rem] sm:top-12 z-10  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {query && result.map((movie, i) => <MovieResult key={i} {...movie} />)}
      </ul>
    </div>
  )
}

const MovieResult = ({ name, poster }) => (
  <li className=" flex gap-2 p-2 hover:bg-primary/30 cursor-pointer rounded-lg">
    <img src={poster} className="w-14 h-20 object-contain" />

    <div className="flex flex-col  flex-wrap">
      <Rate rate={'7.0'} />
      <h6>{name}</h6>
    </div>
  </li>
)

const Icon = () => (
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
