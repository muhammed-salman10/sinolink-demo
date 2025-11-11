"use client";
import React from "react";
import Image from "next/image";

function About() {
  // All image data: src, position, size, and shape
  const collageImages = [
    {
      src: "/assets/images/home/about-1.webp",
      className:
        "top-0 left-0 md:w-[180px] w-[120px] md:h-[180px] h-[120px] rounded-tl-[100px]",
    },
    {
      src: "/assets/images/home/about-2.webp",
      className: "top-0 md:left-55 w-[100px] h-[100px] rounded-full ",
    },
    {
      src: "/assets/images/home/about-3.webp",
      className:
        "top-0 md:right-30 right-0 w-[120px] h-[120px] rounded-tr-[100px]",
    },
    {
      src: "/assets/images/home/about-9.webp",
      className:
        "md:bottom-30 lg:left-100 md:left-120 left-70 md:w-[160px] w-[120px] md:h-[160px] h-[120px] rounded-br-[140px]",
    },
    {
      src: "/assets/images/home/about-5.webp",
      className:
        "md:bottom-50 bottom-64 md:right-60 md:w-[160px] w-[120px] md:h-[160px] h-[120px] rounded-tr-[100px] ",
    },
    {
      src: "/assets/images/home/about-6.webp",
      className:
        "md:bottom-40 md:left-20 left-5 w-[110px] h-[110px] rounded-bl-[60px]",
    },
    {
      src: "/assets/images/home/about-7.webp",
      className:
        "md:bottom-10 bottom-20 md:left-70 left-50 -translate-x-1/2 w-[120px] h-[120px] rounded-br-[140px]",
    },
    {
      src: "/assets/images/home/about-8.webp",
      className:
        "md:bottom-3 bottom-10 left-0 w-[120px] h-[120px] rounded-bl-[70px]",
    },
  ];

  return (
    <section className="relative md:py-20 py-10 text-white overflow-hidden bg-[#071F45]">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between md:gap-14">
        {/* Left Side — Collage */}
        <div className="w-full lg:w-1/2 relative h-[500px] flex justify-center items-center">
          {collageImages.map((img, i) => (
            <div
              key={i}
              className={`absolute overflow-hidden ${img.className}`}
            >
              <Image
                src={img.src}
                alt={`about image ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Right Side — Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight mb-6 ">
            Connecting Business <br />
            Across <span className="text-[#6BA7FF]">Boarders</span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-8 lg:max-w-[600px]">
            SinoLink Logistics provides complete freight forwarding and
            logistics management services by air, sea, and land. With a strong
            operational base in China and trusted partnerships across the Middle
            East, Africa, and Asia, we offer dependable and cost-effective
            logistics solutions designed for global trade. Our experienced team
            ensures transparent communication, efficient customs handling, and
            end-to-end visibility throughout your shipment’s journey.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
            <button className="bg-[#6BA7FF] hover:bg-[#5594F5] text-white font-semibold py-3 px-6 rounded-lg transition">
              Explore more
            </button>
            <button className="bg-white hover:bg-gray-200 text-[#071F45] font-semibold py-3 px-6 rounded-lg transition">
              Contact us
            </button>
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-1">
              Have any questions?{" "}
              <span className="text-white font-medium">Contact us!</span>
            </p>
            <p className="font-semibold text-lg">+996 (4343) 4325665</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
