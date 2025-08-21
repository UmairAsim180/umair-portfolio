import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'

const Skills = () => {
    const skills = {
        Languages: [{ text: "JavaScript", icon: "/Skills/javascript.svg" }, { text: "Html", icon: "/Skills/html.svg" }, { text: "Css", icon: "/Skills/css.svg" }, { text: "Python", icon: "/Skills/python.svg" }, { text: "NodeJs", icon: "/Skills/nodejs.svg" }, { text: "Figma", icon: "/Skills/figma.svg" }],
        Frameworks: [{ text: "React", icon: "/Skills/react.svg" }, { text: "NextJS", icon: "/Skills/nextjs.svg" }, { text: "TailwindCSS", icon: "/Skills/tailwindcss.svg" }],
        Databases: [{ text: "MongoDB", icon: "/Skills/mongodb.svg" }]
    }
    const skillRef = useRef()
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.fade-left').forEach((item) => {
                gsap.from(item, {
                    opacity: 0,
                    x: -100,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        end: "end 40%",
                        scrub: 1,
                    }
                })
            }
            )
        }
        )

        return () => {
            ctx.revert()
        };
    }, [])
    return (
        <section ref={skillRef} className="techStack lg:w-[60%] m-auto font-poppins my-10 relative p-6">
            <h2 className="text-center dark:text-white text-5xl font-extrabold">My Skills</h2>

            <div className="my-8 p-4">
                <span className="mt-3 text-2xl font-semibold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                    Language and Tools
                </span>
                <div className="fade-left flex flex-wrap gap-4 pl-10 my-4">
                    {skills.Languages.map((item, index) => {
                        return (
                            <div key={index} className="items-center space-x-2 flex flex-col size-14">
                                <img src={item.icon} alt={item.text} className="" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="my-8 p-4">
                <span className="mt-3 text-2xl font-semibold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                    Libraries and Frameworks
                </span>
                <div className="fade-left flex flex-wrap gap-4 pl-10 my-4">
                    {skills.Frameworks.map((item, index) => {
                        return (
                            <div key={index} className="items-center space-x-2 flex flex-col size-14">
                                <img src={item.icon} alt={item.text} className="" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="my-8 p-4">
                <span className="mt-3 text-2xl font-semibold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                    Databases and Others
                </span>
                <div className="flex flex-wrap gap-4 pl-10 my-4">
                    {skills.Databases.map((item, index) => {
                        return (
                            <div key={index} className="fade-left items-center space-x-2 flex flex-col size-14">
                                <img src={item.icon} alt={item.text} className="" />
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default Skills