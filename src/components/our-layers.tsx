import { lawyers } from "../data.ts";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./icons-social.tsx";

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
                        className={`bg-[url(${lawyer.image})] bg-cover bg-center bg-no-repeat w-auto lg:h-96 md:h-72 h-96 flex items-end justify-center shadow-[inset_0px_-10px_70px_0px_#1a202c] hover:shadow-[inset_0px_-10px_90px_10px_#1a202c] transition-all duration-200 group`}
                    >
                        <figcaption className="mb-4 ">
                            <h5 className="text-center text-xl text-white">{lawyer.name}</h5>
                            <p className="text-center text-sm text-[#FCA311]">{lawyer.title}</p>

                            <div className="bg-[#FCA311] px-5 group-hover:flex mt-2 hidden justify-center space-x-2 py-2 transition-all duration-200">
                                <InstagramIcon />
                                <LinkedInIcon />
                                <TwitterIcon />
                                <FacebookIcon />
                            </div>
                        </figcaption>
                    </figure>

                    // <div className="w-full relative flex items-center justify-center h-[500px]">
                    //     <div
                    //         className="group bg-white shadow-lg shadow-gray-200 rounded-xl relative transition-all duration-500 w-2/3 h-96 flex items-center justify-center hover:shadow-gray-300"
                    //         style="background-image: url(https://pagedone.io/asset/uploads/1688029384.png);"
                    //     >
                    //         <div className="flex flex-col items-center justify-between w-full h-full py-6 gap-4 text-center relative z-10">
                    //             <h4 className="font-manrope font-bold text-3xl text-white text-center leading-snug">
                    //                 How We Made <br />
                    //                 Best Sport Shoes{" "}
                    //             </h4>
                    //             <div className="flex items-center justify-center w-full gap-4">
                    //                 <img
                    //                     className="w-10 h-10 rounded-full"
                    //                     src="https://pagedone.io/asset/uploads/1704275541.png"
                    //                     alt="Rounded Avatar"
                    //                 />
                    //                 <h6 className="text-xl font-medium text-white ">
                    //                     Antonio Roberto
                    //                 </h6>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                ))}
            </div>
        </section>
    );
}
