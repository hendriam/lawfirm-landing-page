import { lawyers } from "../data.ts";
import {
    ArrowLeft,
    ArrowRight,
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    TwitterIcon,
} from "./icons-social.tsx";

export default function OurLawyers() {
    return (
        <section className="w-full my-12">
            <h3 className="text-[40px] text-center text-[#FCA311]">Our Lawyers</h3>
            <p className="mt-5 text-center">
                Meet our team of dedicated legal professionals, committed to <br /> providing expert
                advice and tailored solutions to meet your legal <br /> needs.
            </p>
            <div className="mt-10 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                {lawyers.map((lawyer) => (
                    <figure
                        key={lawyer.id}
                        className={`bg-[url(${lawyer.image})] bg-cover relative bg-center bg-no-repeat w-auto lg:h-96 md:h-72 h-96 flex items-end justify-center shadow-[inset_0px_-40px_60px_0px_#1a202c] hover:shadow-[inset_0px_-60px_90px_0px_#1a202c] transition-all delay-100 duration-300 ease-in-out group`}
                    >
                        <figcaption className="mb-4 absolute">
                            <h5 className="text-center text-xl text-white">{lawyer.name}</h5>
                            <p className="text-center text-sm text-[#FCA311]">{lawyer.title}</p>

                            <div className="bg-[#FCA311] px-5 group-hover:flex delay-100 duration-300 ease-in-out mt-2 hidden justify-center space-x-2 py-2">
                                <InstagramIcon />
                                <LinkedInIcon />
                                <TwitterIcon />
                                <FacebookIcon />
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>

            <div className="mt-5 w-fit flex space-x-2 mx-auto">
                <button className="bg-[#FCA311] rounded-full p-2 hover:cursor-pointer hover:opacity-80">
                    <ArrowLeft />
                </button>

                <button className="bg-[#FCA311] rounded-full p-2 hover:cursor-pointer hover:opacity-80">
                    <ArrowRight />
                </button>
            </div>
        </section>
    );
}
