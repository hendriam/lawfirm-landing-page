import Hero from "./hero";
import NavbarMobile from "./nav-mobile";
import Navbar from "./navbar";
import { useState } from "react";

export default function Header() {
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const handleToggle = () => setIsToggle(!isToggle);
    let position = isToggle ? "absolute" : "hidden";

    return (
        <header className="bg-[url(./assets/bg-header.svg)] bg-center bg-cover">
            <Navbar onClick={handleToggle} />
            <NavbarMobile position={position} />
            <Hero />
        </header>
    );
}
