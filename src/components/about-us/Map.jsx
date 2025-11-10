// src/components/about-us/map.jsx
"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import CtaBanner from "../common/cta-banner/CtaBanner";

// Counter Component
function Counter({ end, duration, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function Map() {
  return (
    <section className="relative bg-[#000] py-20 overflow-hidden">
      {/* Background Map Image */}
      <div className="absolute inset-0 h-[600px] mt-10">
        <Image
          src="/assets/images/about-us/map.webp"
          alt="World Map"
          fill
          className="object-contain opacity-50"
          priority
        />
        {/* Gradient Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center text-white px-6 z-10 md:mt-20">
        {/* Heading */}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-medium max-w-3xl mx-auto leading-relaxed mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        </h2>

        {/* Stats Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
          {/* Card 1 */}
          <div className="bg-[#B4D1FF] text-[#071F45] rounded-[10px] shadow-lg md:w-[260px] w-[300px] py-8 px-5 transition-all duration-300 hover:scale-105">
            <h3 className="text-4xl md:text-5xl font-bold mb-2 border-b border-[#071F45] pb-2">
              <Counter end={10} duration={2} suffix="+" />
            </h3>
            <p className="text-lg font-semibold mb-3">Years</p>
            <p className="text-sm text-[#071F45] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#071F45] text-[#B4D1FF] rounded-[10px] shadow-lg md:w-[260px] w-[300px] py-8 px-5 transition-all duration-300 hover:scale-105">
            <h3 className="text-4xl md:text-5xl font-bold mb-2 border-b border-[#B4D1FF] pb-2">
              <Counter end={20} duration={2} suffix="+" />
            </h3>
            <p className="text-lg font-semibold mb-3">Years</p>
            <p className="text-sm text-[#B4D1FF ] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#B4D1FF] text-[#071F45] rounded-[10px] shadow-lg md:w-[260px] w-[300px] py-8 px-5 transition-all duration-300 hover:scale-105">
            <h3 className="text-4xl md:text-5xl font-bold mb-2 border-b border-[#071F45] pb-2">
              <Counter end={100} duration={2} suffix="+" />
            </h3>
            <p className="text-lg font-semibold mb-3">Years</p>
            <p className="text-sm text-[#071F45] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
