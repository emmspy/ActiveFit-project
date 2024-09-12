import { assets } from "../assets/assets"

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap px-6 md:px-10 lg;px-20">
      <section className="md:w1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <h1>Reserva tus clases <br /> Todas cerca de ti</h1>
        <div>
            <img className="w-9" src={assets.user_picture} alt="" />
            <p>Millones de personas ya reservan con nosotros</p>
        </div>
        <div>
            <a href="">
                hacer reserva
                <img className="w-8" src={assets.arrow_icon} alt="" />
            </a>
        </div>
      </section>
    </div>
  )
}

export default Header
