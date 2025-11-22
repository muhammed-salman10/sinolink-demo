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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed mb-6">
            Delivering Beyond Borders
          </h2>

          <p className="text-base md:text-lg lg:text-xl leading-relaxed lg:mb-10">
            Distance is no barrier for us. We provide end-to-end logistics
            solutions across continents, ensuring smooth customs clearance,
            real-time tracking, and secure handling. Whether it`s a small parcel
            or large cargo, our global routes are designed to deliver
            reliability—anywhere in the world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Map;
