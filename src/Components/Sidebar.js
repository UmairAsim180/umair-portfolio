"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.fromTo(
        linksRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.12, delay: 0.2, ease: "power3.out" }
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className="absolute top-0 left-0 h-screen w-64 
        bg-black/50 backdrop-blur-xl text-white shadow-xl 
        border-r border-white/10 p-6 -translate-x-full z-40 
        rounded-r-2xl"
      >
        <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[#5fabb9] to-cyan-400 bg-clip-text text-transparent">
          Menu
        </h2>
        <ul className="space-y-4 text-lg font-medium">
          {["Home", "About", "Projects", "Services"].map((item, i) => (
            <li
              key={i}
              ref={(el) => (linksRef.current[i] = el)}
              className="opacity-0"
            >
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg transition-all duration-300
                  hover:bg-gradient-to-r hover:from-[#5fabb9] hover:to-cyan-500
                  hover:shadow-md hover:shadow-cyan-500/30"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
