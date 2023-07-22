import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Genre from './pages/Genre'
import Movies from './pages/Movies'
import Profile from './pages/Profile'
import React from 'react'
const App=()=> {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/category" element={<Genre/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default App