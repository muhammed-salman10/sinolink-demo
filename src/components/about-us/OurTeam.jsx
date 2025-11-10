//src/components/about-us/OurTeam.jsx
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function OurTeam() {
  const [current, setCurrent] = useState(0);

  const teamMembers = [
    {
      name: "MANU RAMESH",
      role: "Founder",
      image: "/assets/images/about-us/manu.webp",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "JACOB JOE",
      role: "Managing Director",
      image: "/assets/images/about-us/jacob.webp",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "SIDDARTH RAM",
      role: "Founder",
      image: "/assets/images/about-us/siddarth.webp",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "RASHID K C",
      role: "CEO",
      image: "/assets/images/about-us/rashid.webp",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="lg:mb-10 mb-0">
      <div className="container">
        {/* title+content */}
        <div className="text-center">
          <h4 className="lg:text-[50px] md:text-[40px] text-[24px] font-[600] mt-10">
            Guided by Experience. <br /> Driven by Vision.
          </h4>
          <p className="lg:text-[16px] text-[14px] lg:w-[800px] md:mx-auto font-secondary font-[400]">
            Guided by experience, we deliver with precision. Driven by vision,
            we connect businesses worldwide.
          </p>
        </div>

        {/* Desktop & Tablet Grid (hidden on small) */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-10 md:gap-10 lg:gap-0">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`px-6 ${
                index !== teamMembers.length - 1
                  ? "lg:border-r lg:border-[#CDCDCDCD]"
                  : ""
              }`}
            >
              {/* Image container with hover height increase */}
              <div className="relative w-full h-[280px] mb-4 rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:h-[350px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  title={member.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-black font-medium">{member.role}</p>
              <p className="text-black text-sm mt-2">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Slider (only visible on small) */}
        <div className="sm:hidden relative flex flex-col items-center p-6">
          <div className="w-full">
            <div className="relative w-full h-[350px] mb-4 rounded-xl overflow-hidden">
              <Image
                src={teamMembers[current].image}
                alt={teamMembers[current].name}
                title={teamMembers[current].name}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <h3 className="text-xl font-semibold">
              {teamMembers[current].name}
            </h3>
            <p className="text-black font-medium">
              {teamMembers[current].role}
            </p>
            <p className="text-black text-sm mt-2">
              {teamMembers[current].description}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
            <button
              onClick={prevSlide}
              className="bg-black/50 text-white p-2 rounded-full"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black/50 text-white p-2 rounded-full"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
