import React, { useEffect, useState } from 'react'
import { SearchCheck } from '../components/SearchCheck'
import { Rate } from '../components/MovieList'
import { baseUrl } from '../apiService'
import axios from 'axios'
import { Pagination } from '../components/Pagination'
import { Sort } from '../components/Sort'
import { Link } from 'react-router-dom'

export const Movies = () => {
  const [{ perPage, totalPages, page }, setPage] = useState({
    perPage: 12,
    totalPages: 0,
    page: 1,
  })

  const [{ sortBy, sortDir }, setSort] = useState({
    sortBy: 'imdbScore',
    sortDir: 'desc',
  })

  const [movies, setMovies] = useState([])

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const choosedGenres = getChoosedGenres()
    const url = new URL(`${baseUrl}/movies/allPagination`)
    url.searchParams.set('page', page)
    url.searchParams.set('sortBy', sortBy)
    url.searchParams.set('sortDir', sortDir)
    url.searchParams.set('perPage', perPage)

    if (choosedGenres.length > 0) {
      url.searchParams.set('genre', choosedGenres)
    }

    axios.get(url.toString()).then(({ data }) => {
      setPage((prev) => ({ ...prev, totalPages: data.data.totalPages }))
      setMovies(data.data.data || [])
    })
  }, [categories, sortBy, sortDir, page])

  function getChoosedGenres() {
    return categories
      .filter((item) => item.checked === true)
      .map((item) => item.name)
      .join(',')
  }

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12 lg:col-span-10">
        <Sort setSort={setSort} title={'Filmler'} />

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
          {movies.map((movie, i) => (
            <Link
              to={`/moviedetail/${movie._id}`}
              key={i}
              className="relative "
            >
              <img
                className="rounded-md transition-all duration-200 hover:opacity-70 cursor-pointer"
                src={movie.poster}
              ></img>
              <Rate
                className={
                  'absolute top-0 right-0 backdrop-blur-sm px-2 bg-white/30 text-white rounded-bl-lg rounded-tr-lg'
                }
                rate={movie.imdbScore}
              />
            </Link>
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>

      <div className="order-first col-span-12  lg:order-last lg:col-span-2 ">
        <SearchCheck
          title={'Kategoriler'}
          setCategories={setCategories}
          categories={categories}
        />
      </div>
    </div>
  )
}
