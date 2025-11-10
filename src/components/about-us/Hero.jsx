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
      className="relative w-full lg:h-screen h-[450px] md:h-[550px] flex items-end"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content for desktop/tablet */}
      <div className="container relative z-10 hidden sm:flex justify-between items-center pb-10">
        {/* left-content */}
        <h1 className="text-white font-[300] text-3xl md:text-[40px] lg:text-[60px] leading-[1.2] drop-shadow-lg">
          Where does it <br /> come from?
        </h1>

        {/* right-content */}
        <p className="text-white w-1/2 text-lg lg:text-[22px] md:text-[16px] leading-relaxed font-[400] font-secondary">
          Since 2005, Maxplus has evolved from a UAE-based logistics provider
          into a trusted global partner. Our growth is driven by industry
          expertise, advanced technology, and a strong international network,
          enabling us to deliver secure, efficient, and timely shipments across
          air, sea, and land routes.
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
