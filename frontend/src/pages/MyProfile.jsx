import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: 'Robert Patinson',
    image: assets.user_picture,
    email: 'ejemplo@gmail.com',
    phone: '+1234567',
    address: 'calle 136 #101b -24',
    dob: '11-08-2003',

  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit 
        ? <input type="text" />
        : <p>{userData.name}</p>
      }

    </div>
  )
}

export default MyProfile
