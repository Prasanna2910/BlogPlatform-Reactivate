import { useState } from 'react'
import Navbar from "./Component/Navbar"
import Landing from './Component/Landing'
import Main from "./Component/Main"
import Blogs from "./Component/AllBlogs"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/nav" element={<Navbar/>}/>
      <Route path="/post" element={<Main />}/>
      <Route path="/blogs" element={<Blogs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
