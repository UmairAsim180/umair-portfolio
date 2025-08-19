import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'

const Projects = () => {
    gsap.registerPlugin(ScrollTrigger);
    const projects = [{ title: "Project 1", description: "Description for project 1", image: "/Projects/project1.png", repoLink: "https://github.com/username/project1", liveLink: "https://username.github.io/project1" }, { title: "Project 2", description: "Description for project 2", image: "/Projects/project1.png", repoLink: "https://github.com/username/project2", liveLink: "https://username.github.io/project2" }, { title: "Project 3", description: "Description for project 3", image: "/Projects/project1.png", repoLink: "https://github.com/username/project3", liveLink: "https://username.github.io/project3" }]
    const projectRef = useRef()


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                projectRef.current,
                { xPercent:100 },     // <--- start from Project 1 always
                {
                    xPercent: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: projectRef.current,
                        start: "top 30%",
                        end: "bottom 20%",
                        scrub: 1,
                        pin: projectRef.current.parentElement,
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
        <section id="projects" className=" m-auto px-8 font-poppins my-10 flex flex-col justify-start items-center relative p-6 overflow-x-hidden">
            <h2 className="text-center dark:text-white text-4xl font-extrabold">Projects</h2>
            <span className="mt-3 text-xl text-center font-bold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                Some of My Work
            </span>
            <div ref={projectRef} className=" gap-8 m-8 flex w-[200%]">
                {projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col justify-between bg-cover bg-center rounded-lg p-5 text-white space-y-2 w-[600px] h-[400px]"
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects