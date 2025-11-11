"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import services from "@/src/data/servicesList.json"; // ✅ correct path

function ServicesList() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#071F45] leading-tight max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/40 transition-all duration-500"></div>
              </div>

              {/* Title & Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide px-4">
                  {service.title}
                </h3>

                <Link
                  href={`/services/${service.slug}`} // ✅ correct link
                  className="mt-4 bg-[#071F45] text-white text-sm md:text-base font-medium px-5 py-2 rounded-full
                             transition-all duration-500
                             opacity-100 translate-y-0
                             md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0"
                >
                  Know More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesList;
