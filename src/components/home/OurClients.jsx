// src/components/home/OurClients.jsx
"use client";
import Image from "next/image";
import React from "react";

function OurClients() {
  const clients = [
    { id: 1, src: "/assets/images/home/company-logo1.webp", alt: "Travel" },
    {
      id: 2,
      src: "/assets/images/home/company-logo2.webp",
      alt: "Octane Fitness",
    },
    {
      id: 3,
      src: "/assets/images/home/company-logo3.webp",
      alt: "Life Fitness",
    },
    { id: 4, src: "/assets/images/home/company-logo4.webp", alt: "Smile" },
    { id: 5, src: "/assets/images/home/company-logo4.webp", alt: "True" },
    { id: 6, src: "/assets/images/home/company-logo3.webp", alt: "Cybex" },
    { id: 7, src: "/assets/images/home/company-logo2.webp", alt: "Mockup" },
    { id: 8, src: "/assets/images/home/company-logo1.webp", alt: "Precor" },
  ];

  return (
    <section className="py-12 md:py-16 ">
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h3>
          <p className=" leading-relaxed">
            We’re proud to partner with leading businesses across the globe who
            trust Sinolink for reliable, on-time logistics solutions. Together,
            we keep the world moving with precision and care
          </p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 mt-10">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center bg-white shadow-sm hover:shadow-md rounded-xl p-6 transition-shadow duration-300"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={160}
                height={80}
                className="object-contain w-auto h-12 md:h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurClients;
