import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Sun } from 'lucide-react'
import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'

const Services = () => {
    gsap.registerPlugin(ScrollTrigger)
    const servicesRef = useRef()
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // gsap.from('.service-card', {
            //     opacity: 0,
            //     // y: 50,
            //     duration: 1,
            //     ease: 'power1.out',
            //     stagger: 0.3,
            //     scrollTrigger: {
            //         trigger: servicesRef.current,
            //         start: 'top 80%',
            //         toggleActions: 'play none none reverse',
            //     },
            // });


        }, servicesRef)

        return () => {
            ctx.revert();
        };
    }, [])
    return (
        <section ref={servicesRef} id="services" className="lg:w-[60%] min-h-[80vh] m-auto font-poppins mt-10 flex flex-col justify-start items-center relative p-6">
            <h2 className="text-center dark:text-white text-5xl font-extrabold">What I Do</h2>
            <span className="mt-3 text-2xl text-center font-semibold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                My Services
            </span>

            <div className="md:grid md:grid-cols-3 flex flex-col gap-4 my-8">

                <div className="service-card border border-zinc-500 rounded-md col-start-1 p-5 space-y-4 relative">
                    <div className="bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter inset-0 absolute"></div>
                    <div className="dark:bg-white bg-[#BCE7FA] rounded-md size-10 flex justify-center items-center">
                        <Sun className="text-black" />
                    </div>
                    <h3 className="font-bold text-md">Frontend Development</h3>
                    <p className="font-inter text-sm">
                        I create responsive and modern user interfaces using React, Next.js, and TailwindCSS, ensuring smooth and engaging user experiences across all devices.
                    </p>
                </div>

                <div className="service-card border border-zinc-500 rounded-md col-start-2 p-5 space-y-4 relative">
                    <div className="bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter inset-0 absolute"></div>
                    <div className="dark:bg-white bg-[#BCE7FA] rounded-md size-10 flex justify-center items-center">
                        <Sun className="text-black" />
                    </div>
                    <h3 className="font-bold text-md">Backend Development</h3>
                    <p className="font-inter text-sm">
                        I build scalable and secure backend systems with Node.js, Express.js, and MongoDB, providing strong APIs and efficient data handling.
                    </p>
                </div>
                <div className="service-card border border-zinc-500 rounded-md col-start-3 p-5 space-y-4 relative">
                    <div className="bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter inset-0 absolute"></div>
                    <div className="dark:bg-white bg-[#BCE7FA] rounded-md size-10 flex justify-center items-center">
                        <Sun className="text-black" />
                    </div>
                    <h3 className="font-bold text-md">Database Management</h3>
                    <p className="font-inter text-sm">
                        I design and optimize databases to ensure fast queries, reliable storage, and secure data management for web applications.
                    </p>
                </div>

                <div className="service-card border border-zinc-500 rounded-md col-span-2 col-start-1 row-start-2 p-5 space-y-4 relative">
                    <div className="bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter inset-0 absolute"></div>
                    <div className="dark:bg-white bg-[#BCE7FA] rounded-md size-10 flex justify-center items-center">
                        <Sun className="text-black" />
                    </div>
                    <h3 className="font-bold text-md">End-to-End Website Solutions</h3>
                    <p className="font-inter text-sm">
                        From idea to live website, I handle everything — design, development, and deployment.
                        Whether its a portfolio, business site, or web app, I make it modern, responsive, and fast.
                    </p>
                </div>
                <div className="service-card border border-zinc-500 rounded-md col-start-3 row-start-2 p-5 space-y-4 relative">
                    <div className="bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter inset-0 absolute"></div>
                    <div className="dark:bg-white bg-[#BCE7FA] rounded-md size-10 flex justify-center items-center">
                        <Sun className="text-black" />
                    </div>
                    <h3 className="font-bold text-md"> UI/UX Design</h3>
                    <p className="font-inter text-sm">
                        I focus on user-centered design principles, creating wireframes and prototypes that transform into visually appealing web apps.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services