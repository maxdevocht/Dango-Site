import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'

const Hero = () => {

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 })
    gsap.to('#span', { opacity: 1, delay: 2})
  }, [])

  return (
    <section className="w-full relative">
        <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title font-code">Dango.</p>
        <p id='#span' className='hero-title'>more than a camera</p>
        <div className="md:w-10/12 w-full flex items-center justify-center">
          <video className="pointer-events-none" width={450} height={450} autoPlay muted loop playsInline={true}>
            <source src="./assets/images/camera_vid.mp4" type='video/mp4'/>
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero

