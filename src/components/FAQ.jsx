import React, { useState } from "react";
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";

function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            id: "01",
            question: "How much time does it take?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: "02",
            question: "What is your class naming convention?",
            answer: "We follow BEM or utility-first Tailwind naming for consistency and clarity.",
        },
        {
            id: "03",
            question: "How do you communicate?",
            answer:"We communicate via email, Slack, or project management tools like Trello or Asana.",
        },
        {
            id: "04",
            question: "I have a bigger project. Can you handle it?",
            answer:"Absolutely! Our team can scale according to your project needs and timeline.",
        },
        {
            id: "05",
            question: "What is your class naming convention?",
            answer: "We use consistent, readable, and scalable naming conventions for every project.",
        },
    ];

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }

    };

    return (
        <div className="py-32 bg-[#f9fafc]">
            <div className="container grid md:grid-cols-3 font-poppins ">
                <div>
                    <h2 className="text-[38px] font-semibold leading-14 mb-4">
                        Frequently <br /> asked questions
                    </h2>
                    <a href="#" className="text-[#2405F2] text-[18px] hover:underline font-medium" >  Contact us for more info  </a>
                </div>
                <div className="md:col-span-2 ">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className='border-b border-gray-200 py-4 transition-all duration-300'>
                            <div
                                className="flex items-start justify-between cursor-pointer" onClick={() => toggleFAQ(index)} >
                                <div className="flex gap-4">
                                    <span className="text-[#2405F2] text-[24px] font-normal ">  {faq.id} </span>
                                    <h3 className="font-medium text-[#282938] text-[24px]">
                                        {faq.question}
                                    </h3>
                                </div>
                                {openIndex === index ? (
                                    <IoCloseOutline className="text-gray-500 text-xl" />
                                ) : (
                                    <IoAddOutline className="text-gray-500 text-xl" />
                                )}
                            </div>
                            {openIndex === index && (
                                <p className="mt-3 ml-10 text-gray-500 text-[18px] font-medium ">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
