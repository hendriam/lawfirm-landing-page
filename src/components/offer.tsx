import teamwork from "../assets/teamwork.png";
import Services from "./services";

export default function Offer() {
    return (
        <section className="my-12">
            <div className="flex flex-col md:flex-row gap-6 transition-all duration-200">
                <img
                    src={teamwork}
                    className="xl:w-xl lg:w-lg md:w-md w-fit transition-all duration-200 md:order-1 order-2 self-center"
                    alt="teamwork"
                />
                <div className="order-1 md:order-2 text-center md:text-start">
                    <h3 className="text-2xl text-[#FCA311]">What We Offer</h3>
                    <p className="md:text-2xl lg:text-[40px] text-[20px] lg:leading-12 leading-normal mt-5 md:text-justify text-center">
                        We provide tailored legal solutions to meet your unique needs, ensuring your
                        rights are protected and justice is served.
                    </p>
                    <button className="bg-[#FCA311] md:mt-8 mt-5 hover:opacity-80 hover:cursor-pointer py-2 px-3.5 text-center font-bold">
                        See more
                    </button>
                </div>
            </div>

            <Services />
        </section>
    );
}
