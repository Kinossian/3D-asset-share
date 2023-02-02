const BurgerMenu = ({isOpen}: any) => {
    const colorDark = "indigo-900";
    const colorClair = "indigo-50";

    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-${colorDark} transition ease transform duration-300`;

    return (
        <button
            className={`flex flex-col h-12 w-12 border-none border-${colorDark} rounded justify-center items-center group`}
        >
            <div
                className={`${genericHamburgerLine} ${
                    isOpen && `rotate-45 translate-y-3 bg-${colorClair}`
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${isOpen && "opacity-0 "}`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen && `-rotate-45 -translate-y-3 bg-${colorClair}`
                }`}
            />
        </button>
    );
};

export default BurgerMenu;
