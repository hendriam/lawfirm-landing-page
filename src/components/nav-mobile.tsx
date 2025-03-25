import { menus } from "../data.ts";

interface Props {
    position: string;
}

export default function NavbarMobile(props: Props) {
    return (
        <nav
            className={`md:hidden ${props.position} top-20 right-5 w-xs px-5 py-5 bg-white shadow-xl shadow-slate-900 rounded-md transition delay-100 duration-300 ease-in-out`}
        >
            <ul className="flex flex-col space-y-1 ">
                {menus.map((menu) => (
                    <li
                        className="hover:bg-amber-400 text-black py-2 px-3 rounded-md font-normal text-[17px]"
                        key={menu.id}
                    >
                        <a href={menu.link}>{menu.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
