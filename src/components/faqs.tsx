import { useState } from "react";
import faqs1 from "../assets/faqs1.jpg";
import { faqs } from "../data";
import { ArrowLeft } from "./icons-social";

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full my-20">
            <h3 className="text-[40px] text-center text-[#FCA311]">FAQs</h3>
            <p className="mt-3 text-center">
                We’ve compiled responses to the questions we hear most{" "}
                <br className="hidden md:block" /> often to help you better understand our approach
                and <br className="hidden md:block" /> offerings.
            </p>
            <div className="mt-5 flex justify-between lg:space-x-10 space-x-0">
                <div className="grid grid-rows-1 hover:cursor-poiter">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            onClick={() => setActiveIndex(index)}
                            className={
                                activeIndex === index
                                    ? "border-[#FCA311] border-l-4 border-b-gray-300 bg-[#FFFDF9] transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-3d hover:cursor-pointer"
                                    : "border-[#E5E5E5] border-l-4 border-b-gray-300 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-3d hover:cursor-pointer"
                            }
                        >
                            <div className="pl-5 py-2 flex space-x-3 items-start">
                                <h4 className="md:text-[32px] text-xl md:leading-10 leading-7 font-bold">
                                    {faq.id}.{" "}
                                </h4>
                                <div className=" w-full">
                                    <h4 className="md:text-[32px] text-xl md:leading-10 leading-7 font-bold">
                                        {faq.question}
                                    </h4>
                                    {activeIndex === index && (
                                        <p className="transition delay-100 duration-300 ease-in-out translate-y-1 scale-3d">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                                <button
                                    className={`bg-[#FCA311] rounded-full p-2 hover:cursor-pointer hover:opacity-80 transition-opacity delay-100 duration-300 ease-in-out ${
                                        activeIndex === index ? "rotate-90" : "-rotate-90"
                                    } `}
                                >
                                    <ArrowLeft />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <img
                    src={faqs1}
                    alt="faqs 1"
                    className="hidden lg:block aspect-auto object-cover"
                />
            </div>
        </section>
    );
}
