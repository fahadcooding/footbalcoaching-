import React from 'react'
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'
import Coaches from '../../Components/Coaches/Coaches'
import HomeSlider from '../../Components/HomeSlider/HomeSlider'



const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Coaches/>
      <HomeSlider/>
    
    </div>

  )
}

export default Home