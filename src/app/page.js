"use client";
import Contact from "@/Components/Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import { Testimonials } from "@/Components/Testimonials";
import ScrollProgress from "@/Components/scrollProgress";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);



export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
              <img className="size-6 dark:invert" src="/Facebook.svg" alt="Facebook" />
            </li>
            <li className="cursor-pointer border rounded-full p-1 border-black dark:border-white">
              <a href="https://www.fiverr.com/umairasim_1?source=gig_page">
                <img className="size-6 dark:invert" src="/Fiverr.svg" alt="Fiverr" />
              </a>
            </li>
            <li className="cursor-pointer border rounded-full p-1 border-black dark:border-white">
              <img className="size-6 dark:invert" src="/Linkedin.svg" alt="Linkedin" />
            </li>
          </ul>
        </div>
      </footer>

    </>
  );
}
