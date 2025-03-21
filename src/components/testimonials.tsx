import client1 from "../assets/client-1.jpg";
import doubleQuote from "../assets/double-quote.svg";
import { ArrowLeft, ArrowRight } from "./icons-social.tsx";
export default function Testimonials() {
    return (
        <section className="my-22 ">
            <div className="grid grid-rows-1 lg:grid-cols-3 gap-5 lg:gap-18 transition-all duration-200 ">
                <div className="text-center lg:text-start ">
                    <h3 className="text-2xl text-[#FCA311]">Client Testimonials</h3>
                    <p className="md:text-xl lg:text-[40px] text-[20px] lg:leading-12 leading-normal mt-3 lg:text-start text-center">
                        Hear from our clients about their <br className="block lg:hidden" />{" "}
                        experiences.
                    </p>
                </div>
                <figure className="flex  flex-col md:flex-row col-span-1 lg:col-span-2 md:space-x-6 space-x-0 space-y-6 md:space-y-0 ">
                    <img
                        src={client1}
                        className="lg:w-[400px] md:w-[300px] w-[250px] transition-all duration-200 self-center"
                        alt="client1"
                    />
                    <figcaption className="flex flex-col md:justify-center justify-start items-center md:items-start">
                        <img src={doubleQuote} alt="double quote" className="w-fit" />
                        <p className="md:text-start text-center mt-4">
                            "The team provided exceptional legal guidance for our business
                            restructuring. Their professionalism and attention to detail gave us the
                            confidence to move forward seamlessly. Truly a partner we can rely on!""
                        </p>
                        <h5 className="text-[20px] font-bold lg:mt-10 mt-3">Sarah</h5>
                        <span className="text-sm font-light">Manager Director</span>

                        <div className="mt-5 w-fit flex space-x-2 items-center">
                            <button className="bg-[#FCA311] text- rounded-full p-1 hover:cursor-pointer hover:opacity-80">
                                <ArrowLeft />
                            </button>

                            <button className="bg-[#FCA311] rounded-full p-1 hover:cursor-pointer hover:opacity-80">
                                <ArrowRight />
                            </button>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}
