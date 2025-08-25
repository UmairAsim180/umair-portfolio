import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Code, Link } from 'lucide-react'
import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'
import Image from 'next/image'

const Projects = () => {
    gsap.registerPlugin(ScrollTrigger);
    const projects = [{ title: "Project 1", description: "Description for project 1", image: "/Projects/project1.png", repoLink: "https://github.com/username/project1", liveLink: "https://username.github.io/project1" }, { title: "Project 2", description: "Description for project 2", image: "/Projects/project1.png", repoLink: "https://github.com/username/project2", liveLink: "https://username.github.io/project2" }, { title: "Project 3", description: "Description for project 3", image: "/Projects/project1.png", repoLink: "https://github.com/username/project3", liveLink: "https://username.github.io/project3" }]
    const projectRef = useRef()
    const projectWrapperRef = useRef()


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(
                projectRef.current,    // <--- start from Project 1 always
                {
                    xPercent: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: projectRef.current,
                        start: "top 30%",
                        end: "+=3000", // scroll distance
                        scrub: 1,
                        pin: projectWrapperRef.current,
                        // markers: true,
                    }
                }
            );
        }, projectRef);
        return () => {
            ctx.revert();
        };
    }, []);
    return (
        <section ref={projectWrapperRef} id="projects" className=" m-auto px-8 font-montserrat my-10 flex flex-col justify-start items-center relative p-6 overflow-x-hidden">
            <h2 className="text-center dark:text-white md:text-5xl text-4xl font-extrabold">Projects</h2>
            <span className="mt-3 md:text-2xl text-xl text-center font-semibold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                Some of My Work
            </span>
            <div className="relative w-full overflow-hidden mt-8">
                <div ref={projectRef} className="flex gap-8 w-max">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col justify-between bg-cover bg-center rounded-lg p-5 text-white md:w-[600px] w-[80vw] md:h-[400px] aspect-video m-2 "
                        >
                            <Image src={project.image} alt={project.title} layout="fill" className="absolute rounded-lg object-cover -z-10 inset-0" />
                            <div className="links absolute inset-0 flex justify-center items-center gap-5 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#ffffff82] dark:bg-[#00000080] rounded-lg">
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-white text-black p-8 rounded-full"><Code/></a>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-white text-black p-8 rounded-full"><Link/></a>
                            </div>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Projects