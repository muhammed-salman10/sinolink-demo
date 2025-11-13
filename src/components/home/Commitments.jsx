import Image from "next/image";
import React from "react";

function Commitments() {
  return (
    <section className=" lg:pb-26 pb-10">
      <div className="container">
        {/* border-box */}
        <div className="border w-full lg:h-[450px] h-full bg-[#071F45] flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-10 lg:py-30">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center md:text-left space-y-6 pb-10 lg:pb-0">
            <h6 className="text-2xl md:text-4xl font-extrabold leading-tight text-white">
              Global Logistcs, Smart. <br /> Fast. Reliable.
            </h6>
            <p className="text-white text-[16px] md:text-[20px]">
              At SinoLink Logistics, we provide fast, reliable, efficient and
              cost effective freight soulutions world wide. Our extensive
              network and strong partnerships ensure smooth cargo movement by
              air,sea and land - connecting China with Middle East, Africa and
              Asia seamlessly
            </p>
            {/* <button className="bg-[#B4D1FF]  text-[#071F45] transition-all font-semibold px-4 py-2 rounded-lg shadow-md">
              Learn more
            </button> */}
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center md:justify-end relative h-[400px] w-full md:h-[530px] lg:translate-y-[40px] translate-y-[-1px] md:translate-y-[-1px]">
            <Image
              src="/assets/images/home/commitments.webp"
              alt="Shipping Container"
              fill
              className="object-cover md:object-contain drop-shadow-lg rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Commitments;
