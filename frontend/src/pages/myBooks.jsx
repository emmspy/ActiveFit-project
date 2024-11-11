import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyBooks = () => {


  const { classesArray } = useContext(AppContext)

  return (
    <div>
      <h1 className='font-semibold ' >Mis clases</h1>
      <div>
        {classesArray.slice(0,2).map((item, index)=> (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b ' key={index}>

            <div>
              <img className='w-36' src={item.image} alt="" />
            </div>

            <div className='flex-1 text-sm'>
              <p className='font-semibold text-lg'>{item.name}</p>
              <p className='font-medium mt-1'>{item.instructor}</p>
              <p className='text-xs mt-1'>{item.exercise}</p>
              <p className='text-xs mt-1'>{item.schedule}</p>
              <p className='text-xs mt-1'>{item.address}</p>
            </div>

            <div className=''>
              <button className='bg-primary-green text-primary-cream rounded-full my-8 px-3 py-3'>Ver reserve</button>
              <button className='bg-primary-green text-primary-cream rounded-full my-8 px-3 py-3' >Cancelar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBooks
