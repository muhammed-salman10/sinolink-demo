// src/components/client/common/loader/PageLoader.jsx
"use client";
import Image from "next/image";
import React from "react";
import "@/styles/globals.css";

const PageLoader = () => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <div className="relative w-64 h-24 flex items-center justify-center">
        {/* 🚛 Moving Truck */}
        <div className="absolute left-0 bottom-[-5px] animate-move-container">
          <Image
            src="/assets/images/page-loader/truck.png"
            alt="Truck"
            width={120}
            height={60}
          />
        </div>

        {/* Road Line */}
        <div className="absolute bottom-2 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="w-full h-full bg-black animate-track"></div>
        </div>
      </div>

      <p className="mt-10 text-[#071F45] font-semibold text-lg tracking-widest animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default PageLoader;
