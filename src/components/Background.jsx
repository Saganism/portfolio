import React from 'react'

const Background = () => {
  return (
    <div className='mt-40 scroll-m-28 text-center' id='background'>
      <h1 className='mb-10'>Background</h1>
      <p>I have graduated from Re:Coded's coding bootcamp in 2021, with a front-end certificate from Flatiron School, a New York based coding school ranked #1 in the world at the time, and I have also worked for d3 Studio and AI Dojo as a Web Developer and Lead Trainer, training more than 2000 students in python and over 30 students in TensorFlow JS.</p>
      <div className=' mt-20 flex flex-wrap gap-20 justify-center items-center'>
        <img className='min-w-0 max-w-[300px] drop-shadow-[0_35px_70px_rgba(0,0,0,0.25)]' src="recoded.png" alt="" />
        <img className='drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]' src="flat.png" alt="" />
      </div>
    </div>
  )
}

export default Background

