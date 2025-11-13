"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Be_Vietnam_Pro, Albert_Sans } from "next/font/google";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import FloatingButton from "../components/common/buttons/FloatingButton";
import PageLoader from "../components/common/loader/PageLoader";

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
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // 👇 Trigger loader on route change
  useEffect(() => {
    let timer;

    // Use a micro-delay to avoid synchronous state update
    timer = setTimeout(() => {
      setLoading(true);
      setTimeout(() => setLoading(false), 700); // your duration
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`${beVietnamPro.variable} ${albertSans.variable} antialiased relative min-h-screen overflow-x-hidden ${className}`}
    >
      {loading && <PageLoader />} {/* 👈 show loader when true */}
      <Header />
      <main>{!loading && children}</main>
      <Footer />
      <FloatingButton />
      {/* <ToastContainer theme="dark" autoClose={3000} /> */}
    </div>
  );
}
