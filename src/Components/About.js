import React from 'react'
import { TailwindBtn } from './TailwindBtn'
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef } from 'react';

const About = () => {
    const stat = [
        { value: "5", label: "Years of Experience" },
        { value: "100", label: "Projects Completed" },
        { value: "50", label: "Happy Clients" },
    ];
    gsap.registerPlugin(ScrollTrigger);
    const aboutRef = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.animate-line').forEach((item) => {
                gsap.from(item, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play reverse play reverse",
                        // markers: true,
                        end: "bottom 20%",
                    }
                })
            }
            )

            gsap.utils.toArray('.count-up').forEach((item) => {
                gsap.to(item, {
                    innerText: item.dataset.count,
                    snap: { innerText: 1 },
                    duration: 2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none none",
                        // markers: true,
                        end: "bottom 20%",
                    }
                })
            })
        }, aboutRef)
        return () => {
            ctx.revert()
        };
    }, [])
    return (
        <section ref={aboutRef} id="about" className="lg:w-[60%] m-auto font-montserrat my-10 flex flex-col justify-start items-center relative p-6">
            <h2 className="text-center dark:text-white md:text-5xl text-4xl font-extrabold">About</h2>
            <span className="mt-3 md:text-2xl text-xl text-center font-semibold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                Get to Know About us
            </span>
            <p className="my-8 text-center">
                <span className="animate-line">Hi there! I&apos;m Umair Asim, a full stack web developer with a passion for building modern, high-performance applications.</span>
                <span className="animate-line">From crafting beautiful, responsive front-ends to architecting powerful back-end systems, I enjoy working across the entire stack.</span>
                <span className="animate-line">I love turning ideas into real-world products using tools like React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS.</span>
                <span className="animate-line">With a focus on clean code, performance, and user-first experiences, I take pride in writing scalable and maintainable applications.</span>
                <span className="animate-line">Let&apos;s work together to bring your ideas to life and build something amazing!</span>
            </p>

            <TailwindBtn text={'Download Resume'} cssClass="w-fit" />
            {/* {Stats in About Section} */}
            <div className="stat grid grid-cols-3 gap-4 my-8 ">
                {stat.map((item, index) => {
                    return (
                        <div key={index} className="text-center border border-zinc-500 rounded-md md:p-5 p-3 space-y-2">
                            <span data-count={item.value} className="count-up md:text-5xl text-3xl font-bold text-[#5fabb9]">0</span><span className="count-up md:text-5xl text-3xl font-bold text-[#5fabb9]">+</span>
                            <p className="md:text-lg text-xs">{item.label}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default About