//src/components/home/Faq.jsx
"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
const faqs = [
  {
    id: 1,
    question: "What Service does SinoLink Logistics provide?",
    answer:
      "we offer sea, air and land freight services, including customs clearance, warehousing, cargo consolidation, and door-door delivery. ",
  },
  {
    id: 2,
    question: "Do you handle both import and export shipments?",
    answer:
      "Yes. We manage both import and export shipments from China to the Middle East, Africa and Asia. ",
  },
  {
    id: 3,
    question: "What is the difference between FCL & LCL ?",
    answer:
    " FCL (Full Container Load) : A full container for your goods only. LCL (Less than Container Load) : Your goods share space in a container with others - ideal for small shipments. "
  },
  {
    id: 4,
    question: "How long does shipment from China take? ",
    answer:
    ". Middle East - 18-25 days. Africa: 25-40 days. Asia : 7 - 15 days "
  },
  {
    id: 5,
    question: "Can u arrange pickup from multiple suppliers ? ",
    answer:
    "Yes. we can collect goods from different suppliers across major cities like Guanzhou,Yiwu and Shanghai. "
  },
  {
    id: 6,
    question: "Do you provide door - to- door services ? ",
    answer:
    "Yes. we take care of the full process - from supplier pickup to delivery and your destination"
  },
  {
    id: 7,
    question: "Can i track Shipment ?  ",
    answer:
    "Yes. you will receive regular tracking updates by email or WhatsApp."
  },
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
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#081733]/90 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full lg:mt-10 py-10 lg:py-0">
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
