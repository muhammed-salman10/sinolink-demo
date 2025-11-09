"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import navLinks from "./navbarLinks.js";
import SocialMediaLinks from "../social-media-icons/SocialMediaLinks.jsx";
import { useRouter, usePathname } from "next/navigation.js";

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigate = () => router.push("/contact-us");

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header w-full fixed top-0 left-0 z-999 transition-all duration-500 
        ${
          isScrolled
            ? "backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "bg-transparent backdrop-blur-none border-transparent"
        }`}
    >
      <div className="container header__container md:py-4 py-3">
        <nav className="w-full navbar flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            title="sino-link-official-logo"
            className="navbar_logo__container lg:w-[170px] md:w-[140px] w-[120px]"
          >
            <Image
              src="/assets/logo/nav-logo.png"
              alt="sino-link-official-logo"
              width={1000}
              height={1000}
              priority
              className="w-full h-full"
            />
          </Link>

          {/* Desktop Links */}
          <div className="navbar__links hidden lg:flex">
            <div className="flex justify-center w-full gap-10 relative ">
              {navLinks.map((nav, index) => {
                const isActive = pathname === nav.url;

                if (nav.children) {
                  return (
                    <div key={index + "nav-parent"} className="relative group">
                      <button
                        className={`relative font-primary font-normal text-[18px]  px-2 py-1 flex items-center gap-1 transition-colors duration-300
                        ${
                          isActive
                            ? "text-[#071F45] font-medium"
                            : "text-[#071F45] hover:text-[#071F45]"
                        }`}
                      >
                        {nav.title}
                        <FiChevronDown
                          className="group-hover:rotate-180 transition-transform duration-300"
                          size={16}
                        />
                      </button>

                      {/* Dropdown */}
                      <div className="absolute top-[60px] left-[-130px] w-[500px] bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-999 rounded-xl">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-2 px-4 py-4">
                          {nav.children.map((child, idx) => (
                            <li key={idx}>
                              <Link
                                href={child.path}
                                className={`block text-[16px] font-primary transition-colors duration-200
                                  ${
                                    pathname === child.path
                                      ? "text-[#071F45] font-medium"
                                      : "text-gray-800 hover:text-[#071F45]"
                                  }`}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-center py-4 border-t border-gray-100">
                          <Link
                            href={nav.url}
                            title={nav.title}
                            className="text-[14px] text-[#071F45] font-medium hover:underline"
                          >
                            View all {nav.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Normal nav item
                return (
                  <Link
                    key={index}
                    href={nav.url}
                    title={nav.title}
                    className={`relative font-primary font-normal text-[18px]  px-2 py-1 transition-colors duration-300
                      ${
                        isActive
                          ? "text-[#071F45] font-medium"
                          : "text-[#071F45] hover:text-[#071F45]"
                      }`}
                  >
                    {nav.title}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="navbar__cta-btn hidden lg:block">
            <button
              onClick={handleNavigate}
              className="text-[16px] bg-[#071F45] py-2 px-6 text-white rounded-full hover:text-white font-medium transition duration-300 font-primary"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)}>
              <FiMenu size={28} className="text-[#071F45]" />
            </button>
          </div>
        </nav>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-1050 overflow-y-auto ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="w-full flex justify-between items-center p-4">
          <div className="logo max-w-[120px]">
            <Image
              src="/assets/logo/header-logo1.png"
              alt="sino-link-official-logo"
              width={1000}
              height={1000}
              priority
              className="w-full h-full"
            />
          </div>
          <button onClick={() => setIsOpen(false)}>
            <FiX size={28} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="w-full flex flex-col items-start gap-4 p-6 font-primary">
          {navLinks.map((nav, index) => {
            const isActive = pathname === nav.url;

            if (nav.children) {
              return (
                <div key={index} className="w-full">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className={`w-full flex justify-between items-center text-[18px] py-2 transition-colors duration-200
                      ${
                        isActive
                          ? "text-[#071F45] font-medium"
                          : "text-black hover:text-[#071F45]"
                      }`}
                  >
                    {nav.title}
                    <FiChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === index && (
                    <ul className="pl-10 flex flex-col gap-2">
                      {nav.children.map((child, idx) => (
                        <li key={idx}>
                          <Link
                            href={child.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-[16px] py-1 text-black hover:text-[#071F45]"
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href={nav.url}
                          onClick={() => setIsOpen(false)}
                          className="block text-[16px] py-2 text-[#071F45] font-medium"
                        >
                          View all {nav.title}
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={index}
                href={nav.url}
                onClick={() => setIsOpen(false)}
                className={`font-primary font-normal text-[18px] py-1 transition-colors duration-300
                  ${
                    isActive
                      ? "text-[#071F45] font-medium"
                      : "text-black hover:text-[#071F45]"
                  }`}
              >
                {nav.title}
              </Link>
            );
          })}

          {/* CTA Button */}
          <div className="w-full flex justify-center mt-6">
            <button
              onClick={handleNavigate}
              className="text-[16px] bg-[#071F45] py-2 px-8 text-white font-medium rounded-full hover:bg-black hover:text-white transition duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-4 w-full flex items-center justify-center">
            <SocialMediaLinks />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-9999"
        ></div>
      )}
    </header>
  );
}

export default Header;
