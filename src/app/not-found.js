"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";

function NotFound() {
  return (
    <section className="relative flex items-center justify-center min-h-screen  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/about-us/hero.webp"
          alt="404 Background"
          fill
          priority
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="uppercase text-[16px] tracking-[3px] mb-2 text-[#B4D1FF] font-[Albert Sans]">
          404 Error
        </p>

        <h1 className="text-[42px] font-[500] mb-3 text-white font-[Albert Sans]">
          Page Not Found
        </h1>

        <p className="max-w-[600px] mx-auto mb-6 text-[#BBB5B5] font-[Lato] leading-relaxed">
          Oops! This page seems to be lost in transit. Let’s get you back on
          track.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[6px] font-medium text-[16px] bg-[#071F45] text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#071F45]"
        >
          Go Back <FaArrowRightLong />
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
