import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopClases = () => {

  const {classesArray} = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className=' flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3x1 font-medium'>Top Clases de la semana</h1>
      <p className='sm:w-1/3 text-center text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et minima nam ex, officia sequi sint quia eveniet velit obcaecati laudantium optio culpa, quibusdam mollitia non. Cumque vero voluptatibus alias nam!</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        
        
        {classesArray.splice(0,10).map((item, index)=>(
          <div onClick={()=>navigate(`/book/${item.id}`)} className='border border-grey-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
            <img className='' src={item.image} alt="" />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Disponible</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p>{item.instructor}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/classes'); scrollTo(0,0)}} className='bg-primary-green text-primary-cream px-12 py-3 rounded-full mt-10'>ver mas</button>
    </div>
  )
}

export default TopClases
