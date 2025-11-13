// src/app/company/privacy-policy/Details.jsx

"use client";
import Link from "next/link";
import React from "react";

const Details = () => {
  return (
    <section className="text-black border-b border-white/20 bg-white ">
      <div className="container py-10 mt-10">
        {/* ✅ Title */}
        <h1 className="text-[20px] md:text-[40px] font-bold mb-6 md:mb-16 text-primary text-center lg:mt-10 mt-6">
          Privacy Policy
        </h1>

        {/* ✅ Content */}
        <div className="font-primary text-black">
          <p className="mb-4 md:text-[18px]">
            At <strong>Sinolink</strong>, we value your privacy and are committed
            to protecting your personal information.
          </p>

          <h2 className="text-[16px] md:text-[18px] font-primary text-primary font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4 md:text-[16px]">
            When you use our services, we may collect details such as your name,
            contact information, shipment details, and payment information.
          </p>

          <h2 className="text-[16px] md:text-[18px] font-primary text-primary font-semibold mt-6 mb-2">
            2. How We Use Your Information
          </h2>
          <p className="mb-4 md:text-[16px]">
            This data is used only to process shipments, provide customer
            support, and improve our services.
          </p>

          <h2 className="text-[16px] md:text-[18px] font-primary text-primary font-semibold mt-6 mb-2">
            3. Sharing of Information
          </h2>
          <p className="mb-4 md:text-[16px]">
            We do not sell or rent your personal information to third parties.
            However, we may share necessary details with trusted partners, such
            as customs authorities, carriers, and agents, to complete your
            shipment.
          </p>

          <h2 className="text-[16px] md:text-[18px] font-primary text-primary font-semibold mt-6 mb-2">
            4. Cookies
          </h2>
          <p className="mb-4 md:text-[16px]">
            Our website may use cookies to enhance your browsing experience. You
            can adjust your browser settings to disable cookies at any time.
          </p>

          <h2 className="text-[16px] md:text-[18px] font-primary text-primary font-semibold mt-6 mb-2">
            5. Data Security
          </h2>
          <p className="mb-4 md:text-[16px]">
            We implement security measures to safeguard your information, but no
            method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-[16px] md:text-[18px] font-primary text-primary font-semibold mt-6 mb-2">
            6. Policy Updates
          </h2>
          <p className="mb-4 md:text-[16px]">
            By using our services, you agree to this Privacy Policy.{" "}
            <strong>Sinolink</strong> may update this policy without prior
            notice, and changes will be posted on this page.
          </p>

          <p className="mt-6 text-[16px]">
            If you have any questions or concerns about this Privacy Policy,
            please{" "}
            <Link
              href="/contact-us"
              title="Contact Us"
              className="underline text-primary"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
