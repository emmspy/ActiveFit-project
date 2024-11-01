import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2x1 pt-10'>
        <h1 className='font-medium mb-0.5'> Contactanos </h1>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[400px]' src={assets.contactanos} alt="" />
        <div  className='flex flex-col justify-center gap-6 md:w-2/4 text-sm'>
          <p className='font-medium text-lg'>Nuestra oficina</p>
          <p>Bogotá, Colombia, calle 136 #101b -24</p>
          <p>telefono: +57 39282763672</p>
          <p>Email: emilypina721@gmail.com</p>
          <p>Explorara mas sobre nuestro equipo y vacantes </p>
          <button className='border text-primary-green border-primary-green w-20 py-3 text-sm hover:bg-primary-green hover:text-white transition-all duration-500'>Ver mas</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
