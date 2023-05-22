import { useState } from 'react'
import Layout from './layout'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Index } from './Pages/Index'
import { Movies } from './Pages/Movies'
import { Series } from './Pages/Series'
import { Upcoming } from './Pages/Upcoming'
import { MovieDetail } from './Pages/MovieDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Index />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/moviedetail/:id" element={<MovieDetail />} />
        <Route path="/series" element={<Series />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Route>
    </Routes>
  )
}

export default App
