// src/components/common/FloatingButton.jsx
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoAdd, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosPin, IoIosText } from "react-icons/io";

function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const ctaData = [
    {
      title: "whatsapp",
      icon: <FaWhatsapp size={18} />,
      link: "https://wa.me/8613250704362",
      bgColor: "bg-[#000]",
      position: "bottom-[150px]",
      delay: "delay-400",
      duration: "duration-1000",
    },
    {
      title: "call-us",
      icon: <IoCall size={18} />,
      link: "tel:+8619925880257",
      bgColor: "bg-[#000]", // You can change this if you want a theme color
      position: "bottom-[100px]",
      delay: "delay-600",
      duration: "duration-1000",
    },
    {
      title: "contact",
      icon: <IoIosText size={18} />,
      link: "/contact-us",
      bgColor: "bg-[#000]",
      position: "bottom-[50px]",
      delay: "delay-600",
      duration: "duration-1000",
    },
  ];

  return (
    <div className="fixed right-[20px] bottom-[20px] z-[999]">
      <div className="relative w-auto h-auto">
        {/* Floating Action Buttons */}
        {ctaData.map((cta, index) => (
          <Link
            key={index}
            href={cta.link}
            target={cta.link.startsWith("/") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`
              absolute bottom-0 right-0 bg-white text-[#071F45] p-3 rounded-full border
              transition-all ease-in-out
              ${cta.bgColor}
              ${cta.duration}
              ${
                isOpen
                  ? `opacity-100 ${cta.position} border-black`
                  : "opacity-0 border-transparent"
              }
            `}
            title={cta.title}
          >
            {cta.icon}
          </Link>
        ))}

        {/* Main Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`relative p-3 bg-[#B4D1FF] hover:bg-primary text-black rounded-full shadow-sm`}
          aria-label="Toggle floating menu"
        >
          {/* pulse ring when not open */}
          {!isOpen && (
            <span className="absolute inset-0 border rounded-full border-[#B4D1FF] animate-ping"></span>
          )}

          <IoAdd
            size={20}
            className={`relative z-10 transform transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default FloatingButton;
