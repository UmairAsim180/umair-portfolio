import React, { useRef } from 'react'
import { TailwindBtn } from './TailwindBtn'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const Hero = () => {
  const heroRef = useRef()
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({delay:0.2})
      tl.from(heroRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
      gsap.utils.toArray('.anim').forEach((item) => {
        tl.from(item, {
          scale: 0.5,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.3,
        })
      }
      )


    }, heroRef)
    return () => {
      ctx.revert()
    };
  }, [])
  return (
    <section ref={heroRef} id="home" className=" lg:w-[60%] min-h-[80vh] m-auto  mt-10 flex flex-col font-montserrat justify-center relative p-3">
      <div className={`absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)] md:rounded-full opacity-30 invert z-[-1] hidden md:block bg-[url("/Grid.png")]`}></div>
      <div className="anim avatar w-full">
        <Image src="/Avatar.png" className="m-auto" alt="Avatar" width={200} height={200} />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 my-8">
        <h2 className="anim text-center dark:text-white md:text-5xl text-4xl font-extrabold font-montserrat">Umair Asim</h2>
        <span className="anim mt-3 md:text-2xl text-xl text-center font-semibold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
          Web Developer
        </span>
        <span className="anim text-center my-8">As a Software Engineering student with a passion for frontend development, I enjoy building modern, responsive, and engaging web applications that bring ideas to life.</span>
        <span className="anim text-center my-8 font-semibold text-lg">“Exploring code, design, and everything in between.”</span>
        <TailwindBtn onClick={() => {
          const section = document.querySelector(`#contact`);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }} text={'Contact Me'} cssClass="anim w-fit" />
      </div>
    </section>
  )
}

export default Hero
