// src/components/home/Hero.jsx
"use client";
import Image from "next/image";
import React from "react";

function Hero() {
  const features = [
    { number: 1, title: "Extensive Global Network" },
    { number: 2, title: "Tailor - Made Logistic Solutions" },
    { number: 3, title: "On-Time & Secure  Delivery" },
    { number: 4, title: "Trusted Partner Support" },
  ];

  return (
    <section className="relative w-full lg:h-[90vh] h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/videos/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-white lg:mt-10 ">
        <h4 className="text-sm md:text-[24px] tracking-[4px] mb-3 font-semibold  lg:mt-10">
          SINOLINK
        </h4>
        <h1 className="text-3xl md:text-5xl font-[500] leading-tight  lg:mb-10 mb-4">
          Your Global Bridge for  <br />  Seamless Logistics
        </h1>

        {/* ✅ Features Section */}
        <div className="w-full md:mt-14">
          <div
            className="
      flex flex-wrap items-center md:justify-center 
    gap-6 px-10 lg:px-0
    "
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="
          flex items-center gap-4
        "
              >
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-full text-white font-semibold shrink-0">
                  {item.number}
                </div>
                <p className="text-white text-[15px] sm:text-[16px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
