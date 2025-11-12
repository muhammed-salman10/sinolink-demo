// src/app/services/[slug]/page.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import servicesData from "@/src/data/servicesList.json";
import CtaBanner from "@/src/components/common/cta-banner/CtaBanner";

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ Find service by slug
  const service = servicesData.find((s) => s.slug === slug);

  // ✅ Handle FAQ toggle
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!service) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Service not found
        </h2>
      </section>
    );
  }

  return (
    <section className="py-10 px-4 md:px-10 mt-20">
      <div className="container mx-auto">
        {/* ✅ Title Section */}
        <div className="text-center">
          <span className="uppercase tracking-widest font-light text-[16px] sm:text-[18px] text-[#071F45]">
            {service.title}
          </span>
          <h1 className="text-[24px] sm:text-[32px] md:text-[48px] font-bold mt-2 leading-snug text-[#B4D1FF]">
            <span className="text-[#071F45]">{service.title}</span>, the{" "}
            <span className="text-[#071F45]">Sinolink</span> Way.
          </h1>
          <p className="mt-3 text-[14px] sm:text-[16px] md:text-[18px] font-light max-w-2xl mx-auto text-gray-600">
            {service.shortDescription}
          </p>
        </div>

        {/* ✅ Header Image */}
        <div className="w-full mt-8">
          <div className="w-full max-w-[1200px] mx-auto relative h-[220px] md:h-[400px] lg:h-[500px] rounded-[30px] overflow-hidden">
            <Image
              src="/assets/images/services/details-header.webp"
              alt={`${service.title} Header`}
              title={`${service.title} Header`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* ✅ Why Choose Section */}
        <div className="mt-10 mx-auto max-w-[1140px] px-2">
          <h3 className="text-[22px] sm:text-[28px] lg:text-[36px] font-semibold mb-4 text-[#071F45]">
            Why choose <span className="text-[#B4D1FF]">Sinolink</span>{" "}
            {service.title}
          </h3>
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] text-gray-700 leading-relaxed">
            {service.whyChoose}
          </p>
        </div>

        {/* ✅ Image + Benefits Section */}
        <div className="mt-10 flex flex-col md:flex-row items-start gap-10 max-w-[1132px] mx-auto px-2">
          {/* Left Image */}
          <div className="w-full md:w-[400px] relative h-[220px] sm:h-[300px] md:h-[470px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:flex-1">
            <h2 className="text-[20px] sm:text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-snug text-[#071F45]">
              Benefits of <span className="text-[#B4D1FF]">Sinolink</span>{" "}
              {service.title}
            </h2>
            <p className="text-[14px] sm:text-[16px] lg:text-[20px] text-gray-700 mt-4 leading-relaxed">
              {service.benefitDescription}
            </p>

            <ul className="list-disc list-inside mt-5 space-y-3 text-[14px] sm:text-[16px] lg:text-[18px] text-gray-700">
              {service.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ FAQ Section */}
        {service.faqData && service.faqData.length > 0 && (
          <div className="mt-16 max-w-[1000px] mx-auto px-4">
            <h3 className="text-[22px] sm:text-[28px] lg:text-[36px] font-semibold mb-6 text-[#071F45] text-center">
             Have Questions ? We`re here to <span className="text-[#B4D1FF]">help</span>
            </h3>
            <p className="text-center lg:text-[18px] text-[14px]">Explore our FAQs to understand how we work and what we offer - your smooth logistics journey starts here.</p>

            <div className="space-y-4 mt-10">
              {service.faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* ✅ Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <h4 className="font-semibold text-[16px] sm:text-[18px] text-[#071F45]">
                      {faq.question}
                    </h4>
                    <span
                      className={`text-[#071F45] text-xl transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* ✅ Smooth Animated Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-[500px] opacity-100 mt-3"
                        : "max-h-0 opacity-0 mt-0"
                    }`}
                  >
                    <p className="text-gray-600 text-[14px] sm:text-[16px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-20"><CtaBanner/></div>
    </section>
  );
}
