import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-primary-green text-primary-cream'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*Izq*/}
        <div>
          <img className='mb-5 w-40' src={assets.logo_green} alt="" />
          <p className='w-full md:w-2/3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ullam quia veritatis fugit! Eius, vitae quia similique esse tenetur, non assumenda qui officiis asperiores libero possimus dolores officia ipsam cumque.</p>
        </div>
        {/*centro*/}
        <div>
          <p className='text-xl font-medium mb-5'>ActiveFit</p>
          <ul className='flex flex-col gap-2 '>
            <li>Home</li>
            <li>Nosotros</li>
            <li>Politica de privacidad</li>
          </ul>
        </div>
        {/*Derecha*/}
        <div>
          <p className='text-xl font-medium mb-5'>Contactos</p>
          <ul className='flex flex-col gap-2 '>
            <li>+57 3026026385</li>
            <li>emilysky48@gmail.com</li>
          </ul>
        </div>
        {/*Copyright*/}
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2024</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
