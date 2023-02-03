const BurgerMenu = ({isOpen}: any) => {
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-indigo-${
        isOpen ? "300" : "900"
    } transition ease transform duration-300`;

    return (
        <button
            className={`flex flex-col h-12 w-12 rounded justify-center items-center group`}
        >
            <div
                className={`${genericHamburgerLine} ${
                    isOpen && `rotate-45 translate-y-3 `
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${isOpen && "opacity-0"}`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen && `-rotate-45 -translate-y-3 `
                }`}
            />
        </button>
    );
};

export default BurgerMenu;
