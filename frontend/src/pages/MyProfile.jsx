import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Robert Patinson',
    image: assets.user_picture,
    email: 'ejemplo@gmail.com',
    phone: '+1234567',
    address: 'calle 136 #101b -24',
    dob: '2003-01-01',

  })

  const [isEdit, setIsEdit] = useState(true)

  return (
    <div className='max-w-lg flex flex-col gap-2 text'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {
        isEdit 
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4  cursor-pointer' type="text" value={userData.name}  onChange={e => setUserData(prev => ({...prev,name:e.target.value}))}/>
        : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr />
      <div>
        <p className='text-primary-green font-bold m-3'>MIS DATOS</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
          <p className='font-medium'>Email :</p>
          <p>{userData.email}</p>
          <p>Cumpleaños</p>
          {
            isEdit 
            ? <input className='border-b cursor-pointer' type="date" value={userData.dob}  onChange={e => setUserData(prev => ({...prev,dob:e.target.value}))}/>
            : <p>{userData.dob}</p>
          }


          <p>Numero: </p>
          {
            isEdit 
            ? <input className='border-b cursor-pointer' type="text" value={userData.phone}  onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))}/>
            : <p>{userData.phone}</p>
          }

          <p>Direccion: </p>
          {
            isEdit 
            ? <input className='border-b cursor-pointer' type="text" value={userData.address}  onChange={e => setUserData(prev => ({...prev,address:e.target.value}))}/>
            : <p>{userData.address}</p>
          }
            <div>
              
            </div>
        </div>
      </div>
      <div>
        {
          isEdit
          ? <button className=' bg-primary-green text-primary-cream px-8 py-2 rounded-full' onClick={() => setIsEdit(false) }>Guardar</button>
          : <button className=' bg-primary-green text-primary-cream px-8 py-2 rounded-full' onClick={() => setIsEdit(true) } > Editar </button>
        }
      </div>

    </div>
  )
}

export default MyProfile
