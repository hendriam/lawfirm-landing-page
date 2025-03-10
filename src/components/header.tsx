import Hero from "./hero";
import Navbar from "./navbar";

export default function Header() {
    return (
        // <header className="bg-[url(./assets/bg-header.svg)] bg-no-repeat bg-cover py-8">
        <header className="bg-[#14213D] py-8">
            <Navbar />
            <Hero />
        </header>
    );
}
