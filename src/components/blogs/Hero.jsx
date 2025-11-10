//src/components/client/blogs/Hero.jsx
"use client";
import React from "react";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url(/assets/images/blogs/hero.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full md:h-screen h-[450px]"
    >
      {/* Overlay with centered text */}
      <div className="absolute inset-0  flex items-center justify-center">
        <h1 className="lg:text-[80px] md:text-[60px] text-[40px] font-[700] text-white uppercase">Blogs</h1>
      </div>
    </section>
  );
}

export default Hero;
