import { ModeToggle } from "@/Components/ModeToggle";
import { TailwindBtn } from "@/Components/TailwindBtn";
import React from 'react'
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const Navbar = ({ setIsOpen, isOpen }) => {
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

        <nav ref={navRef} className="flex p-8 md:justify-evenly justify-between items-center w-full font-inter">
            <span className="font-script font-bold text-2xl">Umair</span>
            <ul className="md:flex gap-5 hidden">
                {["Home", "About", "Projects", "Services", "Resume"].map((item, i) => (
                    <li key={i} className="nav-item">
                        <a
                            href={`#${item.toLowerCase()}`}
                            className="text-lg font-semibold p-2
                   hover:text-[#5fabb9] hover:scale-105
                   focus-visible:text-[#5fabb9] focus-visible:ring-2 focus-visible:ring-[#5fabb9] focus-visible:rounded
                   transition-all duration-300"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="md:flex hidden justify-center items-center gap-5">
                <TailwindBtn onClick={() => {
                    const section = document.querySelector(`#contact`);
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }} text='Contact Me' />
                <ModeToggle />
                {/* Menu Button */}
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 md:hidden bg-black text-white rounded"
            >
                <Image src="/menu.svg" alt="Menu" height={24} width={24} />
            </button>

        </nav>
    )
}

export default Navbar