import { ModeToggle } from "@/Components/ModeToggle";
import { TailwindBtn } from "@/Components/TailwindBtn";
import Sidebar from "@/Components/Sidebar";
import React from 'react'
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
// import Link from "next/link";

const Navbar = () => {
    const navRef = useRef()
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.from(navRef.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
            })
            gsap.utils.toArray('.nav-item').forEach((item) => {
                tl.from(item, {
                    x: -50,
                    opacity: 0,
                    stagger: 0.3,
                    duration: 0.5,
                    ease: "power2.out",
                })
            })


        }, navRef)
        return () => {
            ctx.revert(); // Cleanup the context on unmount
        };
    }, [])
    return (
        <nav ref={navRef} className="flex p-8 md:justify-evenly justify-between items-center w-full overflow-x-hidden">
            <span className="font-script font-bold text-2xl">Umair</span>
            <ul className="md:flex gap-5 hidden font-inter">
                {["Home", "About", "Projects", "Services", "Resume"].map((item, i) => (
                    <li
                        key={i}
                        onClick={() => {
                            const section = document.querySelector(`#${item.toLowerCase()}`);
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="nav-item text-lg font-semibold cursor-pointer hover:text-[#5fabb9] hover:scale-x-105"
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <div className="md:flex hidden justify-center items-center gap-5">
                {/* <a href="#contact"> */}
                    <TailwindBtn text='Contact Me' />
                {/* </a> */}
                <ModeToggle />
            </div>
            <Sidebar />
        </nav>
    )
}

export default Navbar