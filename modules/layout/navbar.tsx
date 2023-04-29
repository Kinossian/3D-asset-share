import BurgerMenu from "@/components/burger_menu";
import Link from "next/link";
import React, {useState} from "react";

const Navbar = () => {
    const [isNav, setIsNav] = useState<Boolean>(false);
    return (
        <>
            <span
                onClick={() => setIsNav(!isNav)}
                className={`
                    fixed right-4 top-7 cursor-pointer z-50
                    lg:-right-20
                `}
            >
                <div
                    className={`space-y-2 duration-300 ${
                        isNav ? "rotate-180" : ""
                    }`}
                >
                    <BurgerMenu isOpen={isNav} />
                </div>
            </span>
            <nav
                className={`
                    bg-indigo-900 text-indigo-50 drop-shadow-md
                    flex flex-col w-20 fixed overflow-hidden h-16 rounded
                    m-5
                    duration-300
                    ${isNav && "w-full m-0 rounded-none"} ${isNav && "h-64"}
                    lg:flex-row lg:justify-between lg:items-center
                    lg:px-10 lg:m-0
                    lg:w-full lg:static lg:rounded-none
                `}
            >
                <h2
                    onClick={() => setIsNav(false)}
                    className={`
                        hover:text-indigo-100
                        mt-3 mx-auto text-4xl flex
                        lg:mx-0 lg:mt-0
                    `}
                >
                    <Link className="" href="/">
                        S3D
                    </Link>
                </h2>
                <ul
                    className={`
                        flex flex-col pr-1 pt-5 mt-10
                        lg:flex-row lg:mt-0 lg:py-1 lg:mt-0
                    `}
                >
                    <li className="">
                        <Link
                            onClick={() => setIsNav(false)}
                            className="li-nav"
                            href="/pc"
                        >
                            pc
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            onClick={() => setIsNav(false)}
                            className="li-nav"
                            href="/console"
                        >
                            console
                        </Link>
                    </li>
                    <li className="">
                        <Link
                            onClick={() => setIsNav(false)}
                            className="li-nav"
                            href="/tech"
                        >
                            tech
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
