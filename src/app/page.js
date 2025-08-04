"use client";
import { TailwindBtn } from "@/Components/TailwindBtn";
import { Sun } from "lucide-react";


export default function Home() {
  return (
    <>
      {/* <div className="absolute inset-0 -z-10 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" /> */}

      <nav className="flex p-8 justify-evenly items-center">
        <span className="font-script font-bold text-2xl">Umair</span>
        <ul className="flex gap-5 font-inter">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Resume</li>
        </ul>
        <TailwindBtn text='Contact Us' />
      </nav>

      <section className="w-[60%] min-h-[80vh] m-auto font-poppins mt-10 flex flex-col justify-start items-center relative p-6">
        <img className="absolute mix-blend-lighten [mask-image:linear-gradient(to_bottom,black,transparent)] inset-0 rounded-full opacity-50" src="/Grid.jpg" alt="" />
        <div className="dp mb-5">
          <img src="/Avatar.png" className="m-auto" alt="" />
        </div>
        <h2 className="text-center text-white text-5xl font-extrabold">Umair Asim</h2>
        <span className="mt-3 text-xl text-center font-bold bg-gradient-to-r from-[#5fabb9] to-[#d9d9d9] text-transparent bg-clip-text w-fit">
          Web Developer
        </span>
        <span className="text-center my-8">As a passionate data scientist, with expertise in machine learning, AI, and data analytics, I thrive on the challenges of exploring complex data landscapes and uncovering meaningful patterns that drive innovation</span>
        <TailwindBtn text={'Contact Me'} cssClass="w-fit" />
      </section>

      <section className="w-[60%] min-h-[80vh] m-auto font-poppins mt-10 flex flex-col justify-start items-center relative p-6">
        <h2 className="text-center text-white text-4xl font-extrabold">About</h2>
        <span className="mt-3 text-xl text-center font-bold bg-gradient-to-r from-[#5fabb9] to-[#d9d9d9] text-transparent bg-clip-text w-fit">
          Get to Know About us
        </span>
        <span className=" my-8 text-center">Hi there! I'm [Your Name], a data scientist specializing in data analytics, predictive modeling, natural language processing, machine learning, and AI chatbots. With a passion for unraveling insights from complex datasets, I'm dedicated to helping businesses make informed decisions and stay ahead in today's data-driven world.

          I bring a blend of technical expertise, hands-on experience, and a commitment to clear communication to every project. Whether it's uncovering hidden patterns, predicting future trends, or automating processes with AI, I'm here to help you harness the full potential of your data.

          Let's work together to transform your data into actionable insights that drive real results. Get in touch, and let's start unlocking the power of your data today!</span>
        <TailwindBtn text={'Download Resume'} cssClass="w-fit" />
      </section>

      <section className="w-[60%] min-h-[80vh] m-auto font-poppins mt-10 flex flex-col justify-start items-center relative p-6">
        <h2 className="text-center text-white text-4xl font-extrabold">What I Do</h2>
        <span className="mt-3 text-xl text-center font-bold bg-gradient-to-r from-[#5fabb9] to-[#d9d9d9] text-transparent bg-clip-text w-fit">
          My Services
        </span>

        <div className="grid grid-cols-3 grid-rows-2 gap-4 my-8">

          <div className="border border-zinc-500 rounded-md col-start-1 p-5 space-y-4 bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter">
            <div className="bg-white rounded-md size-10 flex justify-center items-center">
              <Sun className="text-black" />
            </div>
            <h3 className="font-bold text-md"> Data Analytics & Visualization</h3>
            <p className="font-inter text-sm">
              From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.
            </p>
          </div>
          <div className="border border-zinc-500 rounded-md col-start-2 p-5 space-y-4 bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter">
            <div className="bg-white rounded-md size-10 flex justify-center items-center">
              <Sun className="text-black" />
            </div>
            <h3 className="font-bold text-md"> Data Analytics & Visualization</h3>
            <p className="font-inter text-sm">
              From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.
            </p>
          </div>
          <div className="border border-zinc-500 rounded-md col-start-3 p-5 space-y-4 bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter">
            <div className="bg-white rounded-md size-10 flex justify-center items-center">
              <Sun className="text-black" />
            </div>
            <h3 className="font-bold text-md"> Data Analytics & Visualization</h3>
            <p className="font-inter text-sm">
              From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.
            </p>
          </div>

          <div className="border border-zinc-500 rounded-md col-span-2 col-start-1 row-start-2 p-5 space-y-4 bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter">
            <div className="bg-white rounded-md size-10 flex justify-center items-center">
              <Sun className="text-black" />
            </div>
            <h3 className="font-bold text-md"> Data Analytics & Visualization</h3>
            <p className="font-inter text-sm">
              From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.
            </p>
          </div>
          <div className="border border-zinc-500 rounded-md col-start-3 row-start-2 p-5 space-y-4 bg-gradient-to-br from-[#1C1C1C] to-[#050505] mix-blend-plus-lighter">
            <div className="bg-white rounded-md size-10 flex justify-center items-center">
              <Sun className="text-black" />
            </div>
            <h3 className="font-bold text-md"> Data Analytics & Visualization</h3>
            <p className="font-inter text-sm">
              From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.
            </p>
          </div>

        </div>
      </section>

      <section className="w-[60%] min-h-[80vh] m-auto font-poppins mt-10 flex flex-col justify-start items-center relative p-6">
        <h2 className="text-center text-white text-4xl font-extrabold">Projects</h2>
        <span className="mt-3 text-xl text-center font-bold bg-gradient-to-r from-[#5fabb9] to-[#d9d9d9] text-transparent bg-clip-text w-fit">
          Some of My Work
        </span>
        <div className="my-8 grid grid-cols-3">
          {/* Make a array map here  */}
          <div className="w-80 space-y-2">
            <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.png" alt="" />
            <h3 className="text-lg font-semibold">Project Name</h3>
            <span className="text-sm">Tech Used</span>
          </div>
        </div>
      </section>

      <section className="w-[60%] min-h-[80vh] m-auto font-poppins mt-10 flex flex-col justify-start items-center relative p-6">
        <h2 className="text-center text-white text-4xl font-extrabold">Get in Touch</h2>
        <span className="mt-3 text-xl text-center font-bold bg-gradient-to-r from-[#5fabb9] to-[#d9d9d9] text-transparent bg-clip-text w-fit">
          Let us Work Together
        </span>
        <form
          className="my-8 flex flex-col gap-2 justify-start w-4/5 text-white"
          onSubmit={e => e.preventDefault()}
        >
          <label className="font-bold" htmlFor="name">Name</label>
          <input type="text" id="name" className="border border-zinc-500 rounded-md p-3 bg-transparent" placeholder="Your Name" />
          <label className="font-bold" htmlFor="email">Email</label>
          <input type="email" id="email" className="border border-zinc-500 rounded-md p-3 bg-transparent" placeholder="Your Email" />
          <label className="font-bold" htmlFor="message" >Message</label>
          <textarea id="message" className="border border-zinc-500 rounded-md p-3 h-32 bg-transparent" placeholder="Your Message"></textarea>
          <button type="submit" className="bg-white text-black font-poppins font-semibold p-3 rounded-md">Send Message</button>
        </form>
      </section>
      <footer>
        <div className="w-[60%] m-auto flex justify-between items-center p-6">
          <span className="text-sm">© 2023 Umair Asim. All rights reserved.</span>
          <ul className="flex gap-4">
            <li className="cursor-pointer">
              <img className="size-8 invert" src="/Facebook.svg" alt="Facebook" />
            </li>
            <li className="cursor-pointer">
              <img className="size-8 invert" src="/Fiverr.svg" alt="Fiverr" />
            </li>
            <li className="cursor-pointer">
              <img className="size-8 invert" src="/Linkedin.svg" alt="Linkedin" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
