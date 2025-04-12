import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import  CarouselCustom  from './components/Carousel'
import MovieList from './components/MovieList'
import LoginPage from './components/LoginPage'
import ProfilePage from './components/ProfilePage'

function App() {
  
  return (
    
      <BrowserRouter>
      <Navbar/>
      {/* <CarouselCustom />
      <MovieList/> */}
      <Routes>
      <Route
          path="/"
          element={
            <>
              <CarouselCustom />
              <MovieList />
            </>
          }
        />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
