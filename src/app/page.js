"use client";
import Contact from "@/Components/Contact";
// import { TailwindBtn } from "@/Components/TailwindBtn";
import gsap from "gsap";
import { Star, Sun } from "lucide-react";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import { Testimonials } from "@/Components/Testimonials";
import ScrollProgress from "@/Components/scrollProgress";

gsap.registerPlugin(ScrollTrigger);



export default function Home() {
  //Data Arrays for mapping
  const stat = [
    { value: "5+", label: "Years of Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
  ];

  return (
    <>
    <ScrollProgress/>
      {/** Navigation Bar */}
      <Navbar />
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
