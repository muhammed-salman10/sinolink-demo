//src/components/contact-us/ContactForm.jsx
"use client";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaSquareXTwitter, } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa"; 
import { FiMail, FiPhoneCall } from "react-icons/fi";
import CtaBanner from "../common/cta-banner/CtaBanner";

function ContactForm() {
  // 📌 Contact Info
  const contactInfo = [
    {
      id: 1,
      icon: FiPhoneCall,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      id: 2,
      icon: FiMail,
      label: "Email",
      value: "email@gmail.com",
      href: "mailto:email@gmail.com",
    },
  ];

  // 📌 Social Links
  const socialLinks = [
    {
      id: 1,
      icon: FaLinkedin,
      href: "",
      color: "text-blue-700",
    },
    {
      id: 2,
      icon: FaSquareXTwitter,
      href: "",
      color: "text-black",
    },
    {
      id: 3,
      icon: FaInstagramSquare,
      href: "",
      color: "text-rose-400",
    },
  ];

  return (
    <section className="lg:mt-10 py-10">
      <div className="container mx-auto px-4">
        <div className="rounded-[40px] overflow-hidden mt-16 flex flex-col lg:gap-40 gap-10 lg:flex-row border border-[#D4E2FF] shadow-lg">
          {/* LEFT */}
          <div className="lg:w-[65%] w-full bg-white p-10 lg:p-14">
            {/* heading + content */}
            <h1 className="text-[32px] md:text-[36px] font-extrabold text-black mb-3">
              Get in touch
            </h1>

            <p className="text-[15px] text-gray-600 mb-10 leading-relaxed ">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare nam id blandit natus.
            </p>

            {/* contact-form */}
            <form className="space-y-1 text-[14px]">
              <input
                placeholder="Contact name"
                className="w-full border-b border-gray-300 py-3 outline-none focus:border-primary "
              />
              <input
                placeholder="Street"
                className="w-full border-b border-gray-300 py-3 outline-none focus:border-primary"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  placeholder="City"
                  className="border-b border-gray-300 py-3 outline-none focus:border-primary"
                />
                <input
                  placeholder="Postcode"
                  className="border-b border-gray-300 py-3 outline-none focus:border-primary"
                />
              </div>
              <input
                placeholder="Contact Phone"
                className="w-full border-b border-gray-300 py-3 outline-none focus:border-primary"
              />
              <input
                placeholder="E-mail"
                className="w-full border-b border-gray-300 py-3 outline-none focus:border-primary"
              />
              <textarea
                placeholder="Let’s talk about your idea"
                rows={3}
                className="w-full border-b border-gray-300 py-3 outline-none focus:border-primary"
              />
              <label className="flex items-start gap-2 text-[14px] text-gray-700">
                <input type="checkbox" className="mt-1" />
                I want to protect my data by signing an NDA
              </label>
              <button
                type="submit"
                className="w-full bg-[#007AFF] text-white font-semibold py-3 rounded-md mt-2"
              >
                SUBMIT
              </button>
            </form>

            {/* phone + email */}
            <div className="flex flex-wrap items-center gap-10 mt-6">
              {contactInfo.map(({ id, icon: Icon, label, value, href }) => (
                <Link
                  key={id}
                  href={href}
                  className="flex items-center gap-3 text-sm text-black hover:text-blue-600 transition-all"
                >
                  <Icon size={20} className="text-blue-600" />
                  <div>
                    <p className="font-semibold">{label}</p>
                    <p className="text-gray-600">{value}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* social media */}
            <div className="mt-6">
              <h2 className="text-base font-medium text-gray-800 mb-3">
                Social
              </h2>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ id, icon: Icon, href, color }) => (
                  <Link
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`h-8 w-8 flex items-center justify-center rounded-full bg-[#B4D1FF] ${color} hover:bg-blue-600 hover:text-white transition-all duration-300`}
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="lg:w-[35%] w-full relative bg-[#B4D1FF] lg:min-h-[550px] min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97182.59799959969!2d14.366529886624347!3d50.05958563194564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e25fe7306b%3A0x400af0f6615e030!2sPrague%2C%20Czechia!5e0!3m2!1sen!2sus!4v1708870700000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute lg:top-[110px] lg:left-[-120px] lg:w-114 w-full h-full lg:h-[600px]"
            />
          </div>
        </div>
       <div className="mt-20"> <CtaBanner/></div>
      </div>
    </section>
  );
}

export default ContactForm;
