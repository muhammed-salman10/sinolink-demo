//src/components/home/Faq.jsx
"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
const faqs = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
    answer:
      "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultricies consectetur consequat tellus massa. Nec aliquam eros sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam."
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    answer:
      "Curabitur gravida arcu Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultricies ac tortor dignissim Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultricies convallis. Phasellus vestibulum lorem sed risus ultricies."
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    answer:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    answer:
      "Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor."
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    answer:
      "Et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi."
  }
];

function Faq() {
const [activeId, setActiveId] = useState();

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
   <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 lg:py-20 text-white mb-10 mt-10 lg:mt-0"
      style={{
        backgroundImage: `url('/assets/images/home/faq.webp')`, // your background image path
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#081733]/90 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full lg:mt-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          FREQUENTLY ASKED <span className="text-blue-300">QUESTIONS</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-500 ${
                activeId === faq.id ? "bg-white/10" : "bg-white/5"
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center px-4 py-4 text-left"
              >
                <span className="flex items-center gap-3 font-medium">
                  <span className="text-sm font-semibold opacity-80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </span>
                <div className="bg-blue-500/40 hover:bg-blue-500 text-white rounded-md p-2 transition-colors">
                  {activeId === faq.id ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </button>

              {/* Smooth transition for open/close */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  activeId === faq.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 text-sm text-gray-200">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
