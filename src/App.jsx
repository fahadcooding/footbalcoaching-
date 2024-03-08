import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import TopNavBar from './Components/Headers/TopNavBar'
import  SubNavbar  from './Components/Headers/SubNavbar'

const App = () => {
  return (
    <BrowserRouter>
    <TopNavBar/>
    <SubNavbar/>
  
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App