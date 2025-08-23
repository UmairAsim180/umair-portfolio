"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete, // callback when animation finishes
    });

    tl.fromTo(
      loaderRef.current,
      { opacity: 1 },
      { opacity: 0,scale:10, duration: 1, delay: 1 } // stays for 1s, fades in 1s
    );
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-[9999]"
    >
      <h1 className="text-4xl font-bold font-script">Hello 👋</h1>
    </div>
  );
}
