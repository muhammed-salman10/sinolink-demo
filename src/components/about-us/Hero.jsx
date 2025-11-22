//src/components/about-us/Hero.jsx
"use client";
import React from "react";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: "url(/assets/images/about-us/hero.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-full lg:h-[680px] h-[450px] md:h-[550px] flex items-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content for desktop/tablet */}
      <div className="container mx-auto relative text-center px-6 lg:block hidden">
        {/* left-content */}
        <h1 className="text-white font-[400] text-3xl md:text-[40px] lg:text-[50px] leading-[1.2] drop-shadow-lg mb-6">
          Connecting Continents. <br /> Delivering Confidence.
        </h1>

        {/* right-content */}
        <p className="text-white max-w-3xl mx-auto text-base md:text-lg lg:text-[22px] leading-relaxed font-secondary font-[400]">
          At SinoLink Logistics, we go beyond transportation — we build trusted
          global connections. Headquartered in China, with a strong presence
          across the Middle East, Africa, and Asia, we provide smart, scalable
          logistics solutions that move businesses forward.
        </p>
      </div>

      {/* Mobile Content */}
      <div className="absolute inset-0 flex items-center justify-center sm:hidden z-10">
        <h2 className="text-white text-[40px] font-bold drop-shadow-lg">
          About Us
        </h2>
      </div>
    </section>
  );
}

export default Hero;
