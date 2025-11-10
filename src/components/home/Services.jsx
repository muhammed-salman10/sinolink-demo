"use client";
import Image from "next/image";
import React from "react";

function Services() {
  const services = [
    {
      img: "/assets/images/home/sea-frieght.webp",
      title: "SEA FREIGHT",
      desc: "Reliable ocean shipping with full global coverage.",
    },
    {
      img: "/assets/images/home/air-freight.webp",
      title: "AIR FREIGHT",
      desc: "Fast, secure, and time-efficient cargo solutions.",
    },
    {
      img: "/assets/images/home/land-freight.webp",
      title: "LAND FREIGHT",
      desc: "Smooth overland transport connecting regions.",
    },
    {
      img: "/assets/images/home/packing.webp",
      title: "PACKING & CRAFTING",
      desc: "Professional packaging and safe cargo handling.",
    },
  ];

  return (
    <section className="md:py-10  lg:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main border box */}
        <div className="w-full bg-[#B4D1FF] p-6 md:p-10 rounded-2xl">
          {/* Header section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:gap-6 gap-3 text-center ">
            <h3 className="font-bold text-[22px] md:text-[28px] lg:text-4xl text-[#071F45] leading-snug px-8 ">
              What makes us <br className="hidden lg:block" /> stand out
            </h3>
            <p className="text-base md:text-xl text-[#071F45]/80 md:w-[400px]">
              Trusted network, tailored solutions, and seamless delivery across
              borders.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:px-6">
            {services.map((item, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden group h-[350px] sm:h-[400px] md:h-[420px] shadow-lg"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all"></div>
                <div className="absolute bottom-0 p-5 md:p-6">
                  <h3 className="text-white font-semibold text-lg md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base my-2">
                    {item.desc}
                  </p>
                  <button className="text-white border border-white px-3 py-1.5 rounded-lg text-sm hover:bg-white hover:text-black transition duration-300">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Explore button */}
          <div className="flex justify-center mt-10">
            <button className="bg-[#071F45] text-[#B4D1FF] text-sm md:text-base font-medium px-5 py-2 rounded-lg shadow-md hover:bg-[#0b2d60] transition-all duration-300">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
