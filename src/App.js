import React from 'react'
import "./global.scss"


import { Routes, Route } from "react-router-dom"
import Details from './pages/Details'
import Home from './pages/Home'
import Tafsir from './pages/Tafsir'
import NotFoundPage from './pages/404'
const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/tafsir/:id' element={<Tafsir />} />
        <Route path='*' element={<NotFoundPage />} />




      </Routes>
    </div>
  )
}

export default App