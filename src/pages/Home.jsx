import React from 'react'
import MainSlider from './../components/slider/MainSlider';
import NewPlants from '../components/NewPlants';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Slider container */}
      <div className="w-full h-[50vh] lg:h-[60vh]">
        <MainSlider />
      </div>

      <div >
        <NewPlants />
      </div>
    </div>
  )
}

export default Home
