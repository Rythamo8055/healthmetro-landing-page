"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Health Metro?",
    answer: "Health Metro is a global healthcare connectivity platform that bridges the gap between patients and world-class specialists using ultra-reliable digital infrastructure."
  },
  {
    question: "How does Health Metro connect health globally?",
    answer: "We utilize a decentralized network of medical servers and secure data pipelines to ensure that patient records and consultations are available in 330+ cities worldwide without latency."
  },
  {
    question: "Is Health Metro reliable for emergency medical records?",
    answer: "Yes. Health Metro is built with 99.9% uptime reliability and end-to-end encryption, ensuring that emergency responders can access life-saving data instantly and securely."
  },
  {
    question: "Who can use Health Metro?",
    answer: "Health Metro is designed for everyone—from individual patients and families to healthcare providers and global medical organizations seeking seamless connectivity."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground opacity-70">
            Everything you need to know about the Health Metro ecosystem.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-primary/10 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-bold text-foreground">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 py-6 px-8 border-t border-primary/5' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <p className="text-foreground opacity-80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
