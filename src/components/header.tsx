import Hero from "./hero";
import Navbar from "./navbar";

export default function Header() {
    return (
        <header className="bg-[url(./assets/bg-header.svg)] bg-center bg-cover">
            <Navbar />
            <Hero />
        </header>
    );
}
