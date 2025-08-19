import React, { useRef } from 'react'
import { TailwindBtn } from './TailwindBtn'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'

const Hero = () => {
    const heroRef = useRef()
    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        let tl = gsap.timeline()
        tl.from(heroRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        })
        gsap.utils.toArray('.anim').forEach((item) => {
          tl.from(item , {
            scale:0.5,
            opacity:0,
            duration:0.6,
            ease:"power2.out",
            stagger: 0.3,
          })
        }
        )

        
      },heroRef)
      return () => {
        ctx.revert()
      };
    }, [])
    return (
        <section ref={heroRef} id="home" className=" lg:w-[60%] min-h-[80vh] m-auto font-poppins mt-10 flex flex-col justify-center relative p-3">
            <img className="anim absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,black,transparent)] rounded-full opacity-50 invert z-[-1]" src="/Grid.png" alt="" />
            <div className="anim avatar w-full">
                <img src="/Avatar.png" className="m-auto" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 my-8">
                <h2 className="anim text-center dark:text-white text-5xl font-extrabold">Umair Asim</h2>
                <span className="anim mt-3 text-xl text-center font-bold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                    Web Developer
                </span>
                <span className="anim text-center my-8">As a passionate data scientist, with expertise in machine learning, AI, and data analytics, I thrive on the challenges of exploring complex data landscapes and uncovering meaningful patterns that drive innovation</span>
                <TailwindBtn text={'Contact Me'} cssClass="anim w-fit" />
            </div>
        </section>
    )
}

export default Hero
