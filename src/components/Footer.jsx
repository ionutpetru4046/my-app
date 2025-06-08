import { useState } from "react";

const faqs = [
  {
    question: "What documents do I need to travel?",
    answer:
      "It depends on your destination. Always carry your passport, and check visa requirements for your specific country.",
  },
  {
    question: "Can I cancel or change my tour booking?",
    answer:
      "Most of our partners offer free cancellations within 24 hours. Check the tour details or contact support.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes, we offer custom pricing for groups of 5 or more. Contact us for more info!",
  },
];

const FooterFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white px-6 py-10 rounded-t-3xl mt-16">
      <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left text-lg font-medium hover:text-blue-400 transition"
            >
              {faq.question}
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-300 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterFAQ;