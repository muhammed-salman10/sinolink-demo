// src/app/(client)/company/terms-and-condition/Details.jsx

import Link from "next/link";
import React from "react";

const Details = () => {
  return (
    <section className="text-black bg-white border-b border-white/20">
      <div className="container py-10 lg:mb-14  mt-10">
        <h1 className="text-[20px] md:text-[40px] font-bold mb-10 md:mb-16 text-primary text-center lg:mt-10 mt-6">
          Terms & Conditions
        </h1>

        <div className="font-primary text-black">
          <p className="mb-4 md:text-[18px]">
            By accessing and using <strong>Sinolink</strong> services, you agree
            to these terms:
          </p>

          <h2 className="text-[16px] md:text-[18px] text-primary font-semibold mt-6 mb-2">
            1. Services
          </h2>
          <p className="mb-4 md:text-[16px]">
            Sinolink provides freight forwarding, customs brokerage,
            multi-modal transport, auto logistics, warehousing, and related
            logistics services as described on our website.
          </p>

          <h2 className="text-[16px] md:text-[18px] text-primary font-semibold mt-6 mb-2">
            2. Bookings
          </h2>
          <p className="mb-4 md:text-[16px]">
            All service requests must be confirmed in writing. Rates are subject
            to change based on cargo details and market conditions.
          </p>

          <h2 className="text-[16px] md:text-[18px] text-primary font-semibold mt-6 mb-2">
            3. Compliance
          </h2>
          <p className="mb-4 md:text-[16px]">
            Customers must ensure all shipments comply with applicable laws and
            provide accurate documentation. Sinolink is not responsible for
            delays caused by incorrect or missing documents.
          </p>

          <h2 className="text-[16px] md:text-[18px] text-primary font-semibold mt-6 mb-2">
            4. Liability
          </h2>
          <p className="mb-4 md:text-[16px]">
            Sinolink is not liable for delays or losses due to factors beyond
            our control, such as customs inspections, weather, or transport
            disruptions.
          </p>

          <h2 className="text-[16px] md:text-[18px] text-primary font-semibold mt-6 mb-2">
            5. Payments
          </h2>
          <p className="mb-4 md:text-[16px]">
            All charges are payable as agreed in the quotation or invoice. Late
            payments may result in service suspension.
          </p>

          <p className="mt-6 text-[16px]">
            If you have any questions about these Terms & Conditions, please{" "}
            <Link
              href="/contact-us"
              className="underline text-primary"
              title="Contact Us"
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
