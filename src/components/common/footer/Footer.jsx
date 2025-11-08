// src/components/common/footer/Footer.jsx
"use client";
import Link from "next/link";
import React from "react";
import footerLinks from "./footerLinks.js";
import Image from "next/image.js";
import { FaEnvelope, FaRegEnvelope } from "react-icons/fa6";
import { TiLocationOutline } from "react-icons/ti";
import NewsLetterForm from "../../news-letter/NewsLetterForm.jsx";
import SocialMediaLinks from "../social-media-icons/SocialMediaLinks.jsx";
import { FiPhone } from "react-icons/fi";
function Footer() {
  const contactInfo = [
    {
      title: "Phone",
      value: "+971-4-3933 244",
      icon: <FiPhone />,
      path: "",
    },
    {
      title: "Email",
      value: "logistics@maxplusuae.com",
      icon: <FaEnvelope />,
      path: "",
    },
    {
      title: "Location",
      value:
        "59P4+329 - Ras Al Khor Industrial Area - Ras Al Khor Industrial Area 2 - Dubai - United Arab Emirates",
      icon: <TiLocationOutline size={34} />,
      path: "",
    },
  ];
  return (
    <footer className="w-full h-auto bg-[#071F45]  md:pt-10 font-secondary z-9999 ">
      <div className="container w-full h-full flex flex-col items-start justify-between">
        <div className="w-full flex items-start justify-between lg:flex-row flex-col lg:pb-0 pb-4 ps-2 md:ps-0 md:gap-4">
          <div className="left lg:w-[42%] w-full h-full flex flex-col items-start justify-between md:pb-0 pb-4">
            {/* logo */}
            <div className="logo-container lg:max-w-[200px] max-w-[160px] py-6">
              <Link href={"/"} title="max-plus-logo">
                <Image
                  src="/assets/logo/footer-logo1.png"
                  alt="logo"
                  title="sino-link-official-logo"
                  width={1000}
                  height={1000}
                  className="w-full h-full "
                  priority
                />
              </Link>
            </div>
            <div className="newsletter-form lg:max-w-[300px] w-[90%] mb-3">
              <NewsLetterForm />
            </div>
          </div>
          <div className="nav-links-container lg:w-[56%] w-full h-full font-primary flex items-start justify-around md:flex-row flex-col gap-6">
            {/* Start of Products links */}
            <div className="product-links flex flex-col gap-2 text-white text-[16px] font-primary font-[400]">
              <h2 className="font-semibold md:text-[18px] text-[20px] text-white w-max">
                Quick Links
              </h2>
              {footerLinks.quickLinks.map((link, index) => (
                <Link
                  key={index + link.title}
                  href={link.path}
                  title={link.title}
                  className="text-white/60 text-[18px] md:text-[16px] font-normal w-max hover:underline hover:text-white transition-all duration-300"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Services - links */}
            <div className="services-links text-white text-[16px]">
              <h2 className="font-semibold md:text-[18px] text-[20px]  mb-3 text-white">
                Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 ">
                {footerLinks.services.map((link, index) => (
                  <Link
                    key={index + link.title}
                    href={link.path}
                    title={link.title}
                    className="text-white/60 text-[16px] md:text-[16px] font-normal hover:underline hover:text-white transition-all duration-300 "
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* End Services Links Section */}

            {/* Start of Company links */}
            <div className="company-links flex flex-col gap-2 text-white text-[16px]">
              <h2 className="font-semibold md:text-[18px] text-[20px] text-white w-max">
                Company
              </h2>
              {footerLinks.company.map((link, index) => (
                <Link
                  key={index + link.title}
                  href={link.path}
                  title={link.title}
                  className="text-white/60 text-[16px] md:text-[16px] font-normal w-max hover:underline hover:text-white transition-all duration-300"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/* End of Company links */}
          </div>
        </div>

        {/* Address Section */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end md:items-start items-center justify-between py-4 gap-4 text-white text-[18px]">
          {/* Left: Address, Phone, Email */}
          <div className="font-primary lg:flex items-center  gap-4 lg:max-w-[30%] w-full flex-wrap space-y-4 lg:space-y-0 ">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.title === "Location" ? "items-center" : "items-center"
                } gap-2 `}
              >
                {item.icon}
                <Link
                  href={item.path}
                  title={item.title}
                  className="text-[14px] font-[400] hover:underline hover:text-white transition-all duration-300   "
                  rel={item.title === "Location" ? "noopener noreferrer" : ""}
                  target={item.title === "Location" ? "_blank" : ""}
                >
                  {item.value}
                </Link>
              </div>
            ))}
          </div>
          {/* Right: Social Media */}
          <div className="flex-shrink-0 mt-2">
            <SocialMediaLinks />
          </div>
        </div>

        {/* Copyright Section */}
        <div className="w-full flex lg:flex-row flex-col-reverse lg:gap-0 gap-6 items-center justify-between md:py-10 py-4 text-white  font-primary font-[400] text-[14px] border-t border-white/20">
          <div className="text-center">
            <p className="w-max text-white md:text-[14px] text-[12px] font-primary">
              © 2025 SinoLink - All Rights Reserved.
            </p>
          </div>

          {/* terms */}
          <div className="w-max md:text-[14px] text-[12px] flex items-center justify-center gap-10">
            <Link
              title="privacy-policy"
              href="/company/privacy-policy"
              className="hover:underline text-white/75 hover:text-white transition-all duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </Link>
            <Link
              title="Terms & Conditions"
              className="hover:underline text-white/75 hover:text-white transition-all duration-300"
              rel="noopener noreferrer"
              href="/company/terms-and-conditions"
              target="_blank"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* Powered by */}
          <div className="md:text-[14px] text-[12px] flex items-center gap-1">
            <span className="">Powered By:</span>
            <Link
              href="https://webeyecraft.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Webeyecraft Technologies Pvt. Ltd."
              className="text-white hover:underline opacity-50 hover:opacity-100 transition-all duration-300"
            >
              Webeyecraft Technologies Pvt. Ltd.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
