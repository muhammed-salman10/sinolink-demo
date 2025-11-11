"use client";
import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "James Pattinson",
    role: "Designer",
    image: "/assets/images/home/person-1.webp",
    quote:
      "Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.",
  },
  {
    name: "Greg Stuart",
    role: "Developer",
    image: "/assets/images/home/person-2.webp",
    quote:
      "Vestibulum, cum nam non amet consectetur morbi aenean condimentum eget. Ultricies integer nunc neque accumsan laoreet. Viverra nibh ultricies.",
  },
  {
    name: "Trevor Mitchell",
    role: "Manager",
    image: "/assets/images/home/person-3.webp",
    quote:
      "Ut tristique viverra sed porttitor senectus. A facilisis metus pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id sed. Tincidunt.",
  },
];

function Testimonials() {
  return (
    <section className="lg:py-10  bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center lg:mb-14 mb-10">
          <p className="text-gray-500 tracking-wide uppercase text-sm mb-2">
            Testimonials
          </p>
          <h2 className="text-[22px] md:text-4xl font-bold text-gray-900">
            What our clients say about us
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-black rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center flex flex-col items-center"
            >
              {/* Avatar */}
              {/* <div className="mb-5">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={112}
                    height={112}
                    className="object-cover object-center rounded-full"
                    priority
                  />
                </div>
              </div> */}

              {/* Name and Role */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{item.role}</p>

              {/* Stars */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed">
                “{item.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
