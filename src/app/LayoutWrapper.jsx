"use client";
import React from "react";
import { Be_Vietnam_Pro, Albert_Sans } from "next/font/google";
import Header from "../components/common/header/Header";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vie",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function LayoutWrapper({ children, className = "" }) {
  return (
    <div
      className={`${beVietnamPro.variable} ${albertSans.variable} antialiased relative min-h-screen overflow-x-hidden ${className}`}
    >
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
      {/* <ToastContainer theme="dark" autoClose={3000} /> */}
    </div>
  );
}
