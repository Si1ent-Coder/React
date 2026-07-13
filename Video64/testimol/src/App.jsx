import { useState } from 'react'
import './App.css'
import reviews from "./Data";
import Testimonial from './Components/Testimonial';

const App = ()=> {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>

      <div className='text-center'>

      <h1 className='text-4xl font-bold'>Our Testimonals</h1>
      <div className="h-[2px] w-1/6 mt-4 bg-violet-500 mx-auto"></div>

      <Testimonial reviews={reviews}></Testimonial>
      </div>

    </div>
  );
}

export default App;
