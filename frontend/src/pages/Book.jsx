import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import React, { useState, useEffect, useContext } from 'react'

const Book = () => {

  {/* inicializar estados y parametros */}


  const{ id } = useParams();
  const { classesArray } = useContext(AppContext);
  //guardar horarios dispinibles
  const [ClassDay, setClassDay] = useState([]);
  const [DayIndex, setDayIndex] = useState(0);
  //guarda el horario de la clase
  const [DayTime, setDayTime] = useState('')
  //informacion de la clase
  const [ classInfo, setClassInfo] = useState('')

  const days = [ 'DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO']



  {/* Funciones Fetch y tiempos de disponibles */}

  //fetch con id


  const fetchClassInfo = async () => {
    // si id en classesAray es igual a id se guarda en classData
    const classData = classesArray.find(info => info.id === Number(id));

    console.log(classesArray.find(info => info.id))
    console.log(classData)
    setClassInfo(classData);
  };
  



  //genera horarios disponibles para los próximos siete días en intervalos de 60 minutos


  const getAvailableDay = async () => {
    setClassDay([]); // Reiniciar el array de horarios
    const today = new Date();
  
    // Función para inicializar la hora de inicio para cada dia
    const initializeCurrentDate = (date, isToday) => {
      if (isToday) {
        date.setHours(date.getHours() > 10 ? date.getHours() + 1 : 10);
        date.setMinutes(date.getMinutes() > 30 ? 30 : 0);
      } else {
        date.setHours(10, 0, 0, 0);
      }
      return date;
    };
  
    // Crear horarios para los próximos 7 días
    for (let i = 0; i < 7; i++) {
      const currentDate = initializeCurrentDate(new Date(today.setDate(today.getDate() + i)), i === 0);
      const endTime = new Date(currentDate).setHours(21, 0, 0, 0);
      const timeSlots = [];
  
      // Generar intervalos de 60 minutos hasta las 9:00 PM
      while (currentDate < endTime) {
        timeSlots.push({
          datetime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        currentDate.setMinutes(currentDate.getMinutes() + 60);
      }
  
      setClassDay(prev => [...prev, timeSlots]);
    }
  };
  

 useEffect(()=>{
  console.log(ClassDay)
 }, [ClassDay])

  useEffect(()=>{
      fetchClassInfo()
  }, [classesArray, id])

  useEffect(()=>{
    getAvailableDay()
  },[classInfo])

  return classInfo && (
    <div>
     {/* detalles de la clase */}
     <div className='flex flex-col sm:flex-row gap-9'>
      <div>
        <img src={classInfo.image} className='bg-slate-300 w-full rounded-lg sm:max-w-50' />
      </div>
      
      <div>
        {/* titulo y detalles */}
        <h1 className='font-medium mb-0.5'> {classInfo.name} </h1>
        <div>
          <p className='text-sm'> <span className='font-semibold'> 4.8 ⭑ </span> (5,000+) <span className='font-semibold'>Excelente</span> </p>
        </div>
        <div className=' mt-6 text-sm'>
           {/* informacion basica */}
          <p> <span className='font-semibold'> Instructor:</span> {classInfo.instructor} </p>
          <p> {classInfo.address}</p>
          <p> {classInfo.exercise}</p>
        </div>

        <div >
           {/* descripcion de la clase */}
          <p className='flex items-center gap-1  font-medium mt-11'>Sobre la clase</p>
          <p className='flex mt-3 '> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum consectetur laboriosam rerum fugiat et, repellat amet placeat dicta animi nemo nihil perferendis voluptas voluptatibus autem dignissimos inventore temporibus. Quisquam, repellat. </p>
        </div>
      </div>
     </div>


{/* reserva de la clase */}

     <p> horario: {classInfo.schedule} </p>
     <p> precio: {classInfo.price} </p>

    </div>
  )
}

export default Book
