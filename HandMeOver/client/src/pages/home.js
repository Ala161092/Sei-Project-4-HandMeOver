import React from 'react'
import HomeSlider from '../components/homeSlider'
import Menu from '../components/nav'
import Ala from '../components/footer'


const Home = () => {
  return (
    <div>
      <div>
        <h1>HandMeOver</h1>
      </div>
      <div>
        <HomeSlider />
        <Menu />
        <Ala /> 
      </div>
    </div>
  )
}

export default Home
