import logo from "../assets/logo.png";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    Location,
    Mail,
    Phone,
    TwitterIcon,
} from "./icons-social.tsx";

export default function Footer() {
    return (
        <footer className="bg-[url(./assets/bg-header.svg)] bg-center bg-cover text-white">
            <div className="container mx-0 lg:mx-auto py-10 px-5 xl:px-0 lg:w-full max-w-6xl flex flex-col md:flex-row justify-between md:space-y-0 space-y-10">
                <div className="">
                    <a href="/">
                        <img src={logo} width={150} />
                    </a>
                    <p className="text-sm font-thin mt-5">
                        We stand by your side, providing expert legal{" "}
                        <br className="hidden md:block" /> guidance and unwavering support to
                        protect <br className="hidden md:block" /> your rights and ensure justice is
                        served
                    </p>
                    <div className="flex space-x-2 mt-5">
                        <button className="bg-[#FCA311] rounded-full text-black p-2 hover:cursor-pointer hover:opacity-80">
                            <FacebookIcon />
                        </button>
                        <button className="bg-[#FCA311] rounded-full text-black p-2 hover:cursor-pointer hover:opacity-80">
                            <TwitterIcon />
                        </button>
                        <button className="bg-[#FCA311] rounded-full text-black p-2 hover:cursor-pointer hover:opacity-80">
                            <InstagramIcon />
                        </button>
                        <button className="bg-[#FCA311] rounded-full text-black p-2 hover:cursor-pointer hover:opacity-80">
                            <LinkedInIcon />
                        </button>
                    </div>
                    <div className="mt-5">
                        <h5 className="text-amber-400">Open hour</h5>
                        <p className="text-sm font-thin">Monday - Friday : 9:00 AM - 4:00 PM</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl">Contact Us</h3>
                    <div className="flex items-center space-x-3 mt-5">
                        <Phone />
                        <p className="text-sm font-thin">
                            +1 234 567 890 <br />
                            +1 234 567 890
                        </p>
                    </div>

                    <div className="flex items-center space-x-3 mt-5">
                        <Mail />
                        <p className="text-sm font-thin">
                            yourlawyer@gmail.com <br />
                            support@gmail.com
                        </p>
                    </div>

                    <div className="flex items-center space-x-3 mt-5">
                        <Location />
                        <p className="text-sm font-thin">
                            yourlawyer@gmail.com <br />
                            support@gmail.com
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl">Services</h3>
                    <ul className="mt-3 text-sm list-inside list-image-[url(./assets/dot.svg)] text-white text-[14px] font-light leading-8">
                        <li>Litigation and Dispute Resolution</li>
                        <li>Real Estate and Property Law</li>
                        <li>Human Rights and Advocacy</li>
                        <li>Taxation and Financial Law</li>
                        <li>Immigration Law</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700">
                <div className="container mx-0 lg:mx-auto py-5 px-5 xl:px-0 lg:w-full max-w-6xl flex flex-col md:flex-row justify-between items-center md:space-y-0 space-y-3">
                    <p className="font-extralight text-xs text-gray-200">
                        &#169; 2024 yourlawyer. Alrights reserved.
                    </p>{" "}
                    <p className="font-extralight text-xs text-gray-200">
                        Privacy Policy & Terms of Use
                    </p>
                </div>
            </div>
        </footer>
    );
}
