//src/components/services/Hero.jsx
"use client";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="hero-section relative w-full lg:h-[78vh] h-[68vh] pt-4 mt-20">
      <div className="hero-section__container container w-full lg:h-[70vh] h-[60vh] mt-10">
        <div className="w-full h-full relative rounded-[30px] overflow-hidden">
          {/* ✅ Background Image */}
          <Image
            src="/assets/images/services/hero.webp"
            alt="Hero Background"
            fill
            className="object-cover rounded-[30px]"
            priority
          />

          {/* ✅ Overlay */}
          <div className="absolute inset-0 bg-black/50 rounded-[30px]" />

          {/* ✅ Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Fast.Reliable. <br /> Sino Link.
            </h1>

            {/* Paragraph */}
            <p className="max-w-2xl mt-4 text-sm md:text-[22px] text-gray-200">
              Experience logistics redefined with Sinolink. From air, sea, and
              land freight to expert packing and handling, we deliver your cargo
              with precision, speed, and reliability—connecting businesses
              worldwide, effortlessly.
            </p>

            {/* Button */}
            <button className="mt-6 px-4 py-2 rounded-[10px] text-[16px] bg-white text-black font-semibold  hover:bg-gray-200 transition-all duration-300">
              Make a call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
