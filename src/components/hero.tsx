import imgHero from "../assets/img-hero.jpg";
import vector1 from "../assets/vector-1.svg";

export default function Hero() {
    return (
        <div className="container flex justify-between items-center pt-5 pb-20 space-x-5 mx-0 lg:mx-auto px-5 xl:px-0 lg:w-full max-w-6xl">
            <div className="flex flex-col items-start lg:space-y-11 space-y-5">
                <h1 className="text-white lg:text-7xl md:text-6xl sm:text-5xl text-5xl lg:leading-23 md:leading-20 sm:leading-17 leading-16 transition-all delay-75 duration-300 ease-in-out">
                    Your Partner on the{" "}
                    <span>
                        Path to Justice.{" "}
                        <img
                            src={vector1}
                            alt="vector1"
                            className="lg:w-lg sm:w-sm w-xs transition-all duration-200"
                        />
                    </span>
                </h1>
                <p className="text-white font-thin md:text-lg text-base md:leading-8 leading-6 transition-all duration-200">
                    We stand by your side, providing expert legal guidance{" "}
                    <br className="hidden lg:flex transition-all delay-75 duration-300 ease-in-out" />{" "}
                    and unwavering support to protect your rights and{" "}
                    <br className="hidden lg:flex transition-all delay-75 duration-300 ease-in-out" />
                    ensure justice is served
                </p>
                <button className="bg-[#FCA311] hover:opacity-80 hover:cursor-pointer md:py-3 py-2 md:px-5 px-3.5 xl:text-2xl md:text-xl text-lg text-center font-bold transition-opacity delay-100 duration-300 ease-in-out">
                    Schedule a Consultation
                </button>
            </div>
            <img
                src={imgHero}
                alt="img-hero"
                className="hidden md:flex lg:w-[400px] md:w-[300px] w-[250px] transition-all delay-75 duration-300 ease-in-out rotate-0 hover:rotate-3"
            />
        </div>
    );
}
