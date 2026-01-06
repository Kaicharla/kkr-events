"use client";

import { useState, useRef } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);

    // Scroll to the FAQ smoothly when opening
    const container = containerRef.current;
    if (container) {
      const faqElement = container.children[index] as HTMLElement;
      faqElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-24 px-6 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--brand)] mb-12">
          Frequently Asked Questions
        </h2>

        <div ref={containerRef} className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-black/80 rounded-xl transition-all duration-500 shadow-md overflow-hidden
                ${openIndex === index ? "ring-2 ring-[var(--brand)]" : "ring-0"}
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-left focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[var(--brand)]" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-[500px] py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
