"use client";
import React from "react";
import { TbSettingsCog } from "react-icons/tb";
import { RiGlobalFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";

function WhyChooseUs() {
  const data = [
    {
      id: 1,
      title: "End-to-End Solutions",
      description:
        "From pickup to final delivery we manage every stage of the logistics process ensuring your cargo arrives safely efficiently and on time every time.",
      icon: <TbSettingsCog />,
      bgColor: "#B4D1FF", // ✅ Light Blue
      textColor: "text-black",
    },
    {
      id: 2,
      title: "Global Network",
      description:
      "Global Network With strategic hubs across China, the Middle East, Africa, and Asia, we deliver seamless cross-border connectivity and trusted international partnerships.",
      icon: <RiGlobalFill />,
      bgColor: "#071F45", // ✅ Dark Blue
      textColor: "text-white",
    },
    {
      id: 3,
      title: "On-Time, Every Time",
      description:
      "On-Time, Every Time We prioritize punctuality through real-time tracking, efficient routing, and dedicated teams focused on keeping your shipments on schedule.",
      icon: <FaClock />,
      bgColor: "#071F45", // ✅ Dark Blue
      textColor: "text-white",
    },
    {
      id: 4,
      title: "Built for Growth",
      description:
      "Built for Growth Designed to scale with your business, SinoLink offers flexible logistics solutions that adapt to changing markets and global demand.",
      icon: <BsGraphUp />,
      bgColor: "#B4D1FF", // ✅ Light Blue
      textColor: "text-black",
    },
  ];

  return (
    <section className="why-choose w-full bg-white h-auto lg:pt-10 pt-4">
      <div className="why-choose__container container">
        {/* Title */}
        <div className="why-choose__title">
          <h4 className="font-primary text-[24px] lg:text-5xl md:text-[55px] text-black font-[600] md:text-start text-center leading-[1.12] lg:mb-6 mt-10 lg:mt-0">
            Where Reliability <br />
            Meets Global Reach.
          </h4>
        </div>

        <div className="why-choose__contents w-full grid lg:grid-cols-12 grid-cols-1 gap-0 lg:gap-6 py-6">
          {/* Left Image Card */}
          <div
            style={{
              background:
                "url('/assets/images/services/why-choose-us.webp') no-repeat center center/cover",
            }}
            className="relative lg:col-span-4 col-span-1 md:rounded-[30px] rounded-[20px] lg:h-[680px] md:h-[200px] h-[340px] overflow-hidden md:p-6 p-4 mb-4"
          >
            <div className="absolute inset-0 w-full h-full bg-black/30"></div>

            <div className="relative w-full h-full flex flex-col items-start justify-between z-10">
              <h5 className="text-white font-primary text-[20px] md:text-[30px] lg:text-[40px] md:font-[400] font-[700] leading-[1.12] uppercase">
                Why Choose Us
              </h5>
              <p className="text-white font-primary md:text-[30px] text-[28px] font-[400] leading-[1.2] pt-2">
                Delivering more than logistics.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-8 md:col-span-7 col-span-1 h-auto">
            <div className="w-full flex flex-wrap gap-4 md:gap-3">
              {data.map((item, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: item.bgColor }}
                  className="lg:h-[335px] h-[300px] w-full md:w-[49%] rounded-[30px] flex items-center transition-all duration-500"
                >
                  <div className="flex flex-col items-start justify-evenly p-6 gap-2 w-full h-full">
                    <div>
                      <span
                        className={`w-[60px] h-[60px] flex items-center justify-center rounded-full text-[28px] ${item.textColor}`}
                      >
                        {item.icon}
                      </span>
                      <h6
                        className={`font-primary text-[30px] lg:text-[38px] font-[500] leading-[1.2] lg:py-2 ${item.textColor}`}
                      >
                        {item.title}
                      </h6>
                    </div>
                    <p
                      className={`font-secondary text-[15px] lg:text-[16px] font-[400] leading-[1.6] ${item.textColor}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
