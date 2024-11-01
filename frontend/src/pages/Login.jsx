import React, { useState } from 'react'

const Login = () => {

const [changelog, setChangelog] = useState('Sign up')
const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const [name, setName] = useState('')

const onSubmitHandler = (e)=> {
  e.preventDefault()
}

  return (
    <div>
      <form action="" className='min-h-[80vh] flex flex-col item-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-primary-green shadow-lg'>
          <p className='text-2xl my-4 font-semibold'> {changelog === 'Sign up' ? 'Registrarse' : 'Login'} </p>
          <p className='font-light my-3 italic'> {changelog === 'Sign up' ? 'Registrate' : 'Si ya tienes cuenta, ingresa'} y disfruta de todas nuestras clases</p>
          
          {
            changelog === 'Sign up'
            
          ?   
            
          <div className='flex flex-col w-full'>
            <label >Nombre</label>
            <input className='border-b border-zinc-300 w-full p-2 mt-1 mb-2' type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
          </div>

          : ''
          
          }
          <div className='flex flex-col w-full'>
            <label >Email</label>
            <input className='border-b border-zinc-300 w-full p-2 mt-1 mb-2' type="email" onChange={(e)=>setEmail(e.target.name)} value={email} required/>
          </div>
          <div className='flex flex-col w-full'>
            <label >Contraseña</label>
            <input className='border-b border-zinc-300 w-full p-2 mt-1 mb-4' type="text" onChange={(e)=>setPass(e.target.name)} value={pass} required/>
          </div>
          <button className='bg-primary-green p-3 rounded-full  text-primary-cream'>{changelog ==='Sing up' ? 'Crear cuenta' : 'Iniciar sesion'}</button>
          {
            changelog === 'Sign up'
            ? <p className='font-light my-3 italic'>Ya tienes una cuenta? <span className='font-semibold' onClick={()=> setChangelog('login')}> Registrase </span></p>
            : <p className='font-light my-3 italic' >Aun no tienes una cuenta? <span className='font-semibold'  onClick={()=> setChangelog('Sign up')} >Crear cuenta</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login
