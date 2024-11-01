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
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600'>
          <p> {changelog === 'Sign up' ? 'Registrarse' : 'Login'} </p>
          <p> {changelog === 'Sign up' ? 'Registrate' : 'si ya tienes cuenta, ingresa'} y disfruta de todas nuestras clases</p>
          <div className='flex flex-col'>
            <label >Nombre</label>
            <input type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
          </div>
          <div className='flex flex-col'>
            <label >Email</label>
            <input type="email" onChange={(e)=>setName(e.target.name)} value={name} required/>
          </div>
          <div className='flex flex-col'>
            <label >Contraseña</label>
            <input type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
          </div>
          <button>{changelog ==='Sing up' ? 'Crear cuenta' : 'Iniciar sesion'}</button>
        </div>
      </form>
    </div>
  )
}

export default Login
