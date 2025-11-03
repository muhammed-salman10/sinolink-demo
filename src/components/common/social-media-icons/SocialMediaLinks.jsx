//src/components/client/common/social-media-icons/SocialMediaLinks.jsx
"use client";
import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";

function SocialMediaLinks() {
  const socialMediaLinks = [
    {
      title: "Facebook",
      path: "",
      icon: <FaFacebookF />,
    },
    {
      title: "Instagram",
      path: "",
      icon: <FaInstagram />,
    },
    {
      title: "Pinterest",
      path: "",
      icon: <FaPinterest />,
    },
    {
      title: "Linkedin",
      path: "",
      icon: <FaLinkedinIn />,
    },
        {
      title: "Twitter",
      path: "",
      icon: <FaXTwitter />,
    },
  ];
  return (
    <div className="w-max flex items-center justify-center gap-4">
      {socialMediaLinks.map((link, index) => (
        <Link
          key={index + 123}
          title={link.title}
          href={link.path}
          className="text-[#071F45] text-[16px] w-max bg-white p-2 rounded-full hover:text-black hover:scale-[1.15] transition-all duration-300 ease-in-out"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{link.icon}</span>
        </Link>
      ))}
    </div>
  );
}

export default SocialMediaLinks;
