const BurgerMenu = ({isOpen}: any) => {
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-indigo-900 transition ease transform duration-300`;

    return (
        <button className="flex flex-col h-12 w-12 border-none border-indigo-900 rounded justify-center items-center group">
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100 bg-indigo-50"
                        : "opacity-100 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? "opacity-0 bg-indigo-opacity-100"
                        : "opacity-100 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100 bg-indigo-50"
                        : "opacity-100 group-hover:opacity-100"
                }`}
            />
        </button>
    );
};

export default BurgerMenu;
