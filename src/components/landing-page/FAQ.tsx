
"use client"
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: 'How to join our team?', answer: 'You can join our team by filling out the application form on our website.' },
  { question: 'Is there any membership fee?', answer: 'No, joining our team is completely free of charge.' },
  { question: 'How to build a product or start a business?', answer: 'We offer mentorship and resources to guide you in building your product or starting your business.' },
  { question: 'What are the benefits of taking membership?', answer: 'Members gain access to exclusive resources, events, and networking opportunities.' },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[90%] mx-auto mt-10 p-6 border-2 shadow-lg bg-white mb-6">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <div
              className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{item.question}</span>
              <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-white border-t">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
