
import { batteryCameraVid } from '../utils';

const Hero = () => {

      
  return (
    <section className="w-full nav-height bg-[#E9E9E9] relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Dango</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={batteryCameraVid}>
            <source src={batteryCameraVid} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
