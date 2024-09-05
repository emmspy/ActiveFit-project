import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b '>
        <img src={assets.logo_white} alt="activefit" className='w-20 cursor-pointer'/>
        <ul className='hidden md:flex items-start font-medium gap-5'>
            <NavLink>
                <li>Home</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>Todas las clases</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>Nosotros</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>Contactos</li>
                <hr />
            </NavLink>
        </ul>
        <div>
            <button>Crear cuenta</button>
        </div>
    </div>
  )
}

export default Navbar
