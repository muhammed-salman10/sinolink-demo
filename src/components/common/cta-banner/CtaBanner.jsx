"use client";
import React from "react";

function CtaBanner() {
  return (
    <section className="relative rounded-3xl overflow-hidden w-[90%] max-w-5xl mx-auto mb-10 h-[300px] sm:h-[350px] md:h-[400px] mt-12 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[#8fabd7] bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/home/cta-banner.webp')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d254b]/80 to-[#8fabd7]/10"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 py-10 sm:py-14 md:py-16 flex flex-col justify-center text-left max-w-[600px]">
        <h2 className="text-3xl text-center md:text-left  md:text-4xl font-semibold leading-snug bg-gradient-to-r from-white via-[#cee3ff] to-white bg-clip-text text-transparent">
          Ready to More <br /> Smarter ?
        </h2>

        <p className="mt-2  text-[18px]  md:text-[22px] text-[#f0f6ff]/90 drop-shadow text-center md:text-left">
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s
        </p>
      </div>
    </section>
  );
}

export default CtaBanner;
