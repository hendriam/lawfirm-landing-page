import { useRef } from "react";
import { lawyers } from "../data.ts";
import {
    ArrowLeft,
    ArrowRight,
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
} from "./icons-social.tsx";
import { motion } from "motion/react";

const fadeInUpVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
    },
};

export default function OurLawyers() {
    const scrollRef = useRef(null);

    return (
        <section ref={scrollRef} className="w-full my-20">
            <h3 className="text-[40px] text-center text-[#FCA311]">Our Lawyers</h3>
            <p className="mt-3 text-center">
                Meet our team of dedicated legal professionals, committed to{" "}
                <br className="hidden md:block" /> providing expert advice and tailored solutions to
                meet your legal <br className="hidden md:block" /> needs.
            </p>
            <div className="mt-10 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                {lawyers.map((lawyer) => (
                    <motion.figure
                        key={lawyer.id}
                        className={`
                             w-auto lg:h-96 md:h-72 h-96 flex items-end justify-center group relative overflow-hidden`}
                        variants={fadeInUpVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                    >
                        <img
                            src={lawyer.image}
                            alt={lawyer.name}
                            className="w-full h-full object-cover brightness-100 group-hover:brightness-50 transition-all delay-0 duration-300 ease-in-out"
                        />

                        <figcaption className="mb-4 absolute">
                            <h5 className="text-center text-xl text-white">{lawyer.name}</h5>
                            <p className="text-center text-sm text-[#FCA311]">{lawyer.title}</p>

                            <div className="bg-[#FCA311] px-5 group-hover:flex transitiondelay-0 duration-300 ease-in-out mt-2 hidden justify-center space-x-2 py-2">
                                <InstagramIcon />
                                <LinkedInIcon />
                                <TwitterIcon />
                                <FacebookIcon />
                            </div>
                        </figcaption>
                    </motion.figure>
                ))}
            </div>

            <div className="mt-5 w-fit flex space-x-2 mx-auto">
                <button className="bg-[#FCA311] rounded-full p-2 hover:cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out">
                    <ArrowLeft />
                </button>

                <button className="bg-[#FCA311] rounded-full p-2 hover:cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out">
                    <ArrowRight />
                </button>
            </div>
        </section>
    );
}
