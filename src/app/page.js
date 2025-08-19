"use client";
import Contact from "@/Components/Contact";
import { TailwindBtn } from "@/Components/TailwindBtn";
import gsap from "gsap";
import { Star, Sun } from "lucide-react";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";

gsap.registerPlugin(ScrollTrigger);



export default function Home() {
  //Data Arrays for mapping
  const stat = [
    { value: "5+", label: "Years of Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
  ];
  const testimonials = [
    {
      id: 1,
      avatar: "/Avatar.png",
      name: "John Doe",
      feedback: "Umair is an exceptional developer who delivered beyond our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/Avatar.png",
      feedback: "A pleasure to work with, highly recommend Umair for any project.",
      rating: 5
    },
    {
      id: 3,
      name: "Alice Johnson",
      avatar: "/Avatar.png",
      feedback: "Umair's attention to detail and expertise made a significant impact on our project.",
      rating: 5
    },
  ];

  //Refs for GSAP animations


  //GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline()
    // tl.from()

  }, [])



  return (
    <>
      {/** Navigation Bar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* {Tech Stack Section} */}
      <Skills />
      {/** Services Section */}
      <section id="services" className="lg:w-[60%] min-h-[80vh] m-auto font-poppins mt-10 flex flex-col justify-start items-center relative p-6">
        <h2 className="text-center dark:text-white text-4xl font-extrabold">What I Do</h2>
        <span className="mt-3 text-xl text-center font-bold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
          My Services
        </span>

        <div className="md:grid md:grid-cols-3 flex flex-col gap-4 my-8">

          <div className="border border-zinc-500 rounded-md col-start-1 p-5 space-y-4 relative">
            <div className="bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter inset-0 absolute"></div>
            <div className="dark:bg-white bg-[#BCE7FA] rounded-md size-10 flex justify-center items-center">
              <Sun className="text-black" />
            </div>
            <h3 className="font-bold text-md"> Data Analytics & Visualization</h3>
            <p className="font-inter text-sm">
              From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.
            </p>
          </div>

          <div className="border border-zinc-500 rounded-md col-start-2 p-5 space-y-4 relative">
            <div className="bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter inset-0 absolute"></div>
            <div className="dark:bg-white bg-[#BCE7FA] rounded-md size-10 flex justify-center items-center">
              <Sun className="text-black" />
            </div>
            <h3 className="font-bold text-md"> Data Analytics & Visualization</h3>
            <p className="font-inter text-sm">
              From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.
            </p>
          </div>
          <div className="border border-zinc-500 rounded-md col-start-3 p-5 space-y-4 relative">
            <div className="bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter inset-0 absolute"></div>
            <div className="dark:bg-white bg-[#BCE7FA] rounded-md size-10 flex justify-center items-center">
              <Sun className="text-black" />
            </div>
            <h3 className="font-bold text-md"> Data Analytics & Visualization</h3>
            <p className="font-inter text-sm">
              From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.
            </p>
          </div>

          <div className="border border-zinc-500 rounded-md col-span-2 col-start-1 row-start-2 p-5 space-y-4 relative">
            <div className="bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter inset-0 absolute"></div>
            <div className="dark:bg-white bg-[#BCE7FA] rounded-md size-10 flex justify-center items-center">
              <Sun className="text-black" />
            </div>
            <h3 className="font-bold text-md"> Data Analytics & Visualization</h3>
            <p className="font-inter text-sm">
              From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.
            </p>
          </div>
          <div className="border border-zinc-500 rounded-md col-start-3 row-start-2 p-5 space-y-4 relative">
            <div className="bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter inset-0 absolute"></div>
            <div className="dark:bg-white bg-[#BCE7FA] rounded-md size-10 flex justify-center items-center">
              <Sun className="text-black" />
            </div>
            <h3 className="font-bold text-md"> Data Analytics & Visualization</h3>
            <p className="font-inter text-sm">
              From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* {Testimonials Section} */}
      <section className="testimonial m-auto font-poppins my-10 flex flex-col justify-start items-center relative p-6">
        <h2 className="text-center dark:text-white text-4xl font-extrabold">Testimonials</h2>
        <span className="mt-3 text-xl text-center font-bold bg-gradient-to-r from-[#5fabb9] to-[#6e6e6e] dark:to-[#d9d9d9] text-transparent bg-clip-text w-fit">
          What People Say
        </span>
        <div className="flex gap-5 my-8">
          {testimonials.map((testimonial) => {
            return (
              <div key={testimonial.id} className="border border-white rounded-md p-8 my-4 space-y-4 bg-[#3232322e] backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <img className="rounded-full size-10" src={testimonial.avatar} alt={testimonial.name} />
                  <span className="text-sm font-semibold">{testimonial.name}</span>
                </div>
                <div className="rating">
                  <span className="text-sm font-semibold">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="inline text-yellow-500" />
                    ))}
                  </span>
                </div>
                <p className="font-inter">{testimonial.feedback}</p>
              </div>
            );
          })}
        </div>
      </section>

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
