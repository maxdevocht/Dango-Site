import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'

const Hero = () => {

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 })
  }, [])

  return (
    <section className="w-full relative">
        <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">Dango</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted loop playsInline={true}>
            <source src="./assets/images/camera_vid.mp4"/>
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero

