"use client";
// Normal Imports 
import Contact from "@/Components/Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Services from "@/Components/Services";
import { Testimonials } from "@/Components/Testimonials";
import ScrollProgress from "@/Components/scrollProgress";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";
import Projects from "@/Components/Projects";
import Image from "next/image";
// import dynamic from "next/dynamic";
// Lazy Load 
// const Projects = dynamic(() => import("@/Components/Projects") , { ssr: false });

gsap.registerPlugin(ScrollTrigger);



export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dark:bg-[#1E1E1E] dark:text-[#E1E1E1] bg-[#E0E8F6] text-[#484E53]">
      <ScrollProgress />
      {/** Navigation Bar */}
      <div className="relative">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* {Tech Stack Section} */}
      <Skills />
      {/** Services Section */}
      <Services />

      {/* Projects Section */}
      <Projects />

      {/* {Testimonials Section} */}
      <Testimonials />

      {/* {Contact Section Component} */}
      <Contact />
      {/* {Footer} */}
      <footer>
        <div className="lg:w-[60%] m-auto flex justify-between items-center p-6">
          <span className="text-sm">
            © {new Date().getFullYear()} Umair Asim. All rights reserved.
          </span>
          <ul className="flex gap-4">
            <li className="cursor-pointer border rounded-full p-1 border-black dark:border-white">
              <Image className="dark:invert" src="/Facebook.svg" alt="Facebook" height={24} width={24} />
            </li>
            <li className="cursor-pointer border rounded-full p-1 border-black dark:border-white">
              <a href="https://www.fiverr.com/umairasim_1?source=gig_page" rel="noopener noreferrer" target="_blank">
                <Image className="dark:invert" src="/Fiverr.svg" alt="Fiverr" height={24} width={24} />
              </a>
            </li>
            <li className="cursor-pointer border rounded-full p-1 border-black dark:border-white">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/umair-asim-4b729b343">
                <Image className="dark:invert" src="/Linkedin.svg" alt="Linkedin" height={24} width={24} />
              </a>
            </li>
          </ul>
        </div>
      </footer>

    </div>
  );
}
