import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center'>
        <h1 className='font-medium mb-0.5'> Sobre nosotros </h1>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[400px]' src={assets.aboutus} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm'>
          <p className=' text-primary-green font-bold text-lg'> Objetivo Activefit </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio odit obcaecati atque a, fuga ullam neque hic rerum cumque eaque voluptate ipsum vitae dolorem eveniet laudantium facere tenetur possimus. Sit?</p>
          <p className=' font-bold' >No esperes mas para unirte a esta familia Fit!</p>
        </div>
      </div>
    </div>
  )
}

export default About
