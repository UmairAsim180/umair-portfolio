import React from 'react'

const Skills = () => {
    const skills = {
        Languages: [{ text: "JavaScript", icon: "/Skills/javascript.svg" }, { text: "Html", icon: "/Skills/html.svg" }, { text: "Css", icon: "/Skills/css.svg" }, { text: "Python", icon: "/Skills/python.svg" }, { text: "NodeJs", icon: "/Skills/nodejs.svg" }, { text: "Figma", icon: "/Skills/figma.svg" }],
        Frameworks: [{ text: "React", icon: "/Skills/react.svg" }, { text: "NextJS", icon: "/Skills/nextjs.svg" }, { text: "TailwindCSS", icon: "/Skills/tailwindcss.svg" }],
        Databases: [{ text: "MongoDB", icon: "/Skills/mongodb.svg" }]
    }
    return (
        <section className="techStack lg:w-[60%] m-auto font-poppins my-10 relative p-6">
            <h2 className="text-center dark:text-white text-4xl font-extrabold">My Skills</h2>

            <div className="my-8 p-4">
                <span className="mt-3 text-lg font-light bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                    Language and Tools
                </span>
                <div className="flex flex-wrap gap-4 pl-10 my-4">
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
                <span className="mt-3 text-lg font-light bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                    Libraries and Frameworks
                </span>
                <div className="flex flex-wrap gap-4 pl-10 my-4">
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
                <span className="mt-3 text-lg font-light bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
                    Databases and Others
                </span>
                <div className="flex flex-wrap gap-4 pl-10 my-4">
                    {skills.Databases.map((item, index) => {
                        return (
                            <div key={index} className="items-center space-x-2 flex flex-col size-14">
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