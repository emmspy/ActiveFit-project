import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    {/* caundo tenemos el token, estamos loggeados */}
    const [token, setToken] = useState(true);

  return (
    <div className=' flex items-center justify-between text-sm py-4 mb-5 text-primary-green'>
        <img src={assets.logo_white} alt="activefit" className='w-20 cursor-pointer'/>
        <ul className='hidden md:flex items-start font-medium gap-5'>
            <NavLink to ='/'>
                <li className='py-1 '>Home</li>
                <hr className = 'border-none outline-none h-0.5 bg-primary-green w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/classes'>
                <li className='py-1'>Todas las clases</li>
                <hr className = 'border-none outline-none h-0.5 bg-primary-green w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>Nosotros</li>
                <hr className = 'border-none outline-none h-0.5 bg-primary-green w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>Contactos</li>
                <hr className = 'border-none outline-none h-0.5 bg-primary-green w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token 
                ? 
                //usuario loggeado
                    <div className=' flex items-center gap-2 cursor-pointer group relative'>
                        <img src={assets.user_picture} alt="Foto Usuario"  className='w-10 rounded-full'/>
                        <img src={assets.drop_down} className='w-5'/>
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={()=> navigate('/my-profile')} className ='hover:text-black cursor-pointer'>Mi perfil</p>
                                <p onClick={()=> navigate('/my-books')} className ='hover:text-black cursor-pointer'>Mis clases</p>

                                {/*al hacer click cambia el estado del logging a false*/}
                                <p onClick={()=> setToken(false)} className ='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                :
                //log in
                    <button 
                        onClick={() => navigate('/login')} 
                        className='bg-primary-green text-primary-cream px-8 py-3 rounded-full font-light hidden md:block'>
                        Crear cuenta
                    </button>
            }
        </div>
    </div>
  )
}

export default Navbar
