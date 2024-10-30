import React from 'react'
import {exercise_array} from '../assets/assets'
import { Link } from 'react-router-dom'

const CategoryMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='category'>
      <h1 className='text-3x1 font-medium '> Nuestras diferentes categorias</h1>
      <p className='sm:w-1/3 text-centere text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quasi asperiores molestias tenetur? Assumenda quos, soluta natus reprehenderit maxime, fuga quo qui eius beatae nam, expedita sequi id facilis. Modi.</p>
     <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {exercise_array.map((item, index) =>(
            <Link 
              onClick={()=>scrollTo(0,0)} 
              className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 '
              key={index} 
              to={`/classes/${item.exercise}`}>
                <img className='rounded-full mb-2 w-32 h-32  object-cover' src={item.image} alt="" />
                <p>{item.exercise}</p>
            </Link>
        ))}
     </div>
    </div>
  )
}

export default CategoryMenu
