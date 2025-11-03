import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
// import emailjs from "@emailjs/browser";

function NewsLetterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="title">
          <h5 className="lg:text-[20px] text-[16px] text-white font-primary font-[400]">
            Subscribe to our newsletter
          </h5>
        </div>
        <div className="form">
          <form action={""} className="w-full flex items-center justify-start">
            <div className="w-full flex items-center justify-between gap-4 border-b border-white/20">
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder={
                  isSubmitted
                    ? "Thanks for subscribing!"
                    : "Enter E-Mail Address"
                }
                className={`w-full font-primary pb-3 text-white text-[16px] border-none outline-none 
                  placeholder:text-[16px] placeholder:font-[300]`}
              />

              <button type="button" className="mb-2">
                <FaArrowUp className="rotate-45 text-white" size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsLetterForm;
