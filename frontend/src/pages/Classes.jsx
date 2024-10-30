import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

// MEJORAS ; Puedo volver p un componente


const Classes = () => {

   {/*variable de ruta*/}
  const{ exercise } = useParams();
  const { classesArray } = useContext(AppContext);
  const navigate = useNavigate();

  {/*estado para filtrar por categoria*/}
  const [filterClass, setFilterClass] = useState([]);

  {/*guardar clases filtradas en un estado si no, guardarlas todas*/}
  const applyFilter = () => {
    if(exercise){
      setFilterClass(classesArray.filter(clas => clas.exercise === exercise))
    } else {
      setFilterClass(classesArray)
    }
  }

 {/*activar el estado cada vez que cambie classes o exercise*/}
  useEffect(()=>{
    applyFilter()
  },[classesArray, exercise ])

  return (
    <div>
      <h1 onClick={()=> console.log(exercise)} className='text-3x1 font-medium'>
        Todas nuestras clases
      </h1>
        {/*categorias para filtrar por clase, si exercise es el igual al valor de p, cambia de estilo */}
      <div className='flex flex-wrap sm:flex-row items-center justify-center gap-7 mt-10' >

        <p 
        onClick={() => exercise === 'Yoga' ? navigate('/classes') : navigate('/classes/Yoga')} 
        className={`flex items-center bg-primary-cream gap-3 px-6 py-2 rounded-full text-primary-green text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer
        ${ exercise === 'Yoga' ? 'bg-primary-green text-white' : '' }`}>
          Yoga
        </ p>

        <p 
          onClick={() => exercise === 'Cycling' ? navigate('/classes') : navigate('/classes/Cycling')} 
          className={`flex items-center bg-primary-cream gap-3 px-6 py-2 rounded-full text-primary-green text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer
        ${ exercise === 'Cycling' ? 'bg-primary-green text-white' : '' }`}>
            Cycling
        </p>

        <p 
          onClick={() => exercise === 'Running' ? navigate('/classes') : navigate('/classes/Running')} 
          className={`flex items-center bg-primary-cream gap-3 px-6 py-2 rounded-full text-primary-green text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer
        ${ exercise === 'Running' ? 'bg-primary-green text-white' : '' }`}>
           Running
        </p>
        <p 
          onClick={() => exercise === 'Pilates' ? navigate('/classes') : navigate('/classes/Pilates')} 
          className={`flex items-center bg-primary-cream gap-3 px-6 py-2 rounded-full text-primary-green text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer
        ${ exercise === 'Pilates' ? 'bg-primary-green text-white' : '' }`}>
           Pilates
        </p>
        <p 
          onClick={() => exercise === 'Boxing' ? navigate('/classes') : navigate('/classes/Boxing')} 
          className={`flex items-center bg-primary-cream gap-3 px-6 py-2 rounded-full text-primary-green text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer
        ${ exercise === 'Boxing' ? 'bg-primary-green text-white' : '' }`}>
           Boxing
        </p>
        <p 
          onClick={() => exercise === 'Dancing' ? navigate('/classes') : navigate('/classes/Dancing')} 
          className={`flex items-center bg-primary-cream gap-3 px-6 py-2 rounded-full text-primary-green text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer
        ${ exercise === 'Dancing' ? 'bg-primary-green text-white' : '' }`}>
           Dancing
        </p>

      </div>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
          filterClass.map((item, index)=>(
            <div onClick={()=>navigate(`/book/${item.id}`)} className='border border-grey-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img src={item.image} alt="" />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Disponible</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p>{item.instructor}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Classes
