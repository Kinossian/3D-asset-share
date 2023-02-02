import Link from "next/link";
import React, {useState} from "react";

const Navbar = () => {
    const [isNav, setIsNav] = useState<Boolean>(false);
    return (
        <>
            <span
                onClick={() => setIsNav(!isNav)}
                className={`${isNav && "text-indigo-100"}
                fixed right-8 top-2 cursor-pointer z-50 text-6xl duration-700
                lg:-right-10
                `}
            >
                =
            </span>
            <nav
                className={`
            bg-indigo-900 text-indigo-50 drop-shadow-md
            flex flex-col w-20 fixed overflow-hidden h-16 rounded
            duration-300
            ${isNav && "w-screen"}
            ${isNav && "h-56"}
            lg:flex-row lg:justify-between lg:items-center lg:px-10 lg:w-full lg:static lg:rounded-none
        `}
            >
                <h2
                    onClick={() => setIsNav(false)}
                    className="
            hover:text-indigo-100
            mt-3 mx-auto text-4xl flex
            lg:mx-0 lg:mt-0
            "
                >
                    <Link className="" href="/">
                        S3D
                    </Link>
                </h2>
                <ul
                    className="
            flex flex-col pr-1 lg:py-1 mt-5
            lg:flex-row lg:mt-0
            "
                >
                    <li className="py-1">
                        <Link
                            onClick={() => setIsNav(false)}
                            className="li-nav"
                            href="/pc"
                        >
                            pc
                        </Link>
                    </li>
                    <li className="py-1">
                        <Link
                            onClick={() => setIsNav(false)}
                            className="li-nav"
                            href="/console"
                        >
                            console
                        </Link>
                    </li>
                    <li className="py-1">
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
