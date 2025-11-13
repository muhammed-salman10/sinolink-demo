//src/components/about-us/MissionAndVision.jsx
"use client";
import Image from "next/image";
import React from "react";

function MissionAndVision() {
  return (
    <section className="py-4">
      <div className="container">
        {/* our vision */}
        <div className="bg-[#071F45] md:rounded-t-[38px] rounded-t-[24px] flex flex-col md:flex-row items-center overflow-hidden">
          {/* left-section - content */}
          <div className="text-white w-full lg:w-1/2 px-4 py-6 lg:px-8">
            <span className="uppercase font-[400] text-[18px] md:text-[20px]">
              our vision
            </span>
            <h3 className="text-[22px] lg:text-[30px]  mt-2 md:mt-4 max-w-md font-[500]">
              Building a Smarter, Connected Logistics Future
            </h3>
            <p className="text-[18px] lg:text-[22px] md:text-[12px] font-[400] font-secondary mt-3 ">
              To become a globally recognized logistics brand from China, known
              for reliability, innovation, and customer trust — bridging
              continents through excellence in freight forwarding and supply
              chain management,extends beyond transportation — we aim to empower
              global trade with smarter, faster, and more sustainable logistics
              solutions. By combining technology, transparency, and teamwork.
            </p>
          </div>

          {/* Right-section - image */}
          <div className="relative w-full lg:w-1/2 h-[260px] translate-x-[80px] lg:h-[500px] transform md:translate-y-[-55px] lg:translate-y-0 translate-y-[-40px] ">
            <Image
              src="/assets/images/about-us/vision.webp"
              alt="Container Lift"
              title="Container Lift"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* our mission */}
        <div className="bg-[#B4D1FF] md:rounded-b-[38px] rounded-b-[24px] flex flex-col md:flex-row items-center overflow-hidden">
          {/* left-section - image */}

          <div className="relative w-full md:w-1/2 h-[250px] lg:h-[500px] translate-x-[-10px]">
            <Image
              src="/assets/images/about-us/mission.webp"
              alt="Container Lift"
              title="Container Lift"
              fill
              priority
              className="lg:object-cover md:object-contain"
            />
          </div>
          {/* right-section - content */}
          <div className="text-black w-full md:w-1/2 flex flex-col justify-center px-4 md:py-6 md:px-8 ">
            <span className="uppercase font-[400] text-[18px] md:text-[20px] ">
              our mission
            </span>
            <h3 className="text-[22px] lg:text-[30px] md:text-[22px] text-black mb-3 md:mb-4 max-w-md font-[500]">
             Committed to Excellence in Every Delivery
            </h3>
            <p className="text-[18px] lg:text-[22px] md:text-[12px] font-[400] font-secondary max-w-xl pb-6 md:pb-0">
              To simplify global trade by delivering efficient, transparent, and
              technology-driven logistics solutions that empower businesses to
              grow across borders.We aim to strengthen partnerships with clients
              through consistent quality, proactive communication, and a
              customer-first approach — ensuring every delivery contributes to
              building a smarter, faster, and more connected global logistics
              network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionAndVision;
