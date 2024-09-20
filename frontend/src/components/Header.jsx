import headerbg from '../assets/headerbg1.jpg';

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${headerbg})` }} 
      className=" bg-cover bg-center  flex flex-col md:flex-row flex-wrap px-5 md:px-9 lg;px-20">
      <section className="text-primary-cream md:w-1/2 flex flex-col items-center justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <h1 className="font-bold text-4xl text-center ">Reserva tus clases <br /> <span  className=" text-3xl font-light"> y descrubre nuevas cerca de ti</span> </h1>
        <div>
            <p className="font-light">Millones de personas ya reservan con nosotros</p>
        </div>
        <div>
            <a href="#category" className="flex items-center bg-primary-cream gap- px-6 py-2 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 ">
                hacer reserva
            </a>
        </div>
      </section>
    </div>
  )
}

export default Header
