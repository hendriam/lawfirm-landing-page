import logo from "../assets/logo.png";
import { menus } from "../data.ts";
import { SquareMenu } from "./icons-social.tsx";

interface Props {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Navbar(props: Props) {
    return (
        <nav className="container flex justify-between items-center py-8 mx-0 lg:mx-auto px-5 xl:px-0 lg:w-full max-w-6xl">
            <a href="/">
                <img src={logo} width={150} />
            </a>
            <ul className="hidden md:flex items-center space-x-6 text-white font-normal text-[17px]">
                {menus.map((menu) => (
                    <li className="hover:underline" key={menu.id}>
                        <a href={menu.link}>{menu.name}</a>
                    </li>
                ))}
            </ul>
            <button className="hidden md:flex bg-[#FCA311] hover:opacity-80 py-1.5 px-3 text-center font-bold text-[17px] hover:cursor-pointer ">
                Contact
            </button>
            <button
                className="block md:hidden hover:cursor-pointer hover:opacity-85"
                onClick={props.onClick}
            >
                <SquareMenu />
            </button>
        </nav>
    );
}
