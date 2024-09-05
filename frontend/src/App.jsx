import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BookClass from './pages/BookClass'
import About from './pages/About'
import Classes from './pages/classes'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import Book from './pages/Book'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/book' element = {<BookClass/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/classes' element= {<Classes/>}/>
        <Route path='/classes:exercise' element= {<Classes/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/my-profile' element= {<MyProfile/>}/>
        <Route path='/my-books' element= {<Login/>}/>
        <Route path='/boox/:id' element= {<Book/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
