function Menu({ isClicked, setButtonClicked }) {

    const MENUITEMS = ["Link", "Color", "File format"];

    return (
        <div className="flex items-center justify-center gap-[20px]">
            {MENUITEMS.map((item) => (
                <div
                    key={item}
                    onClick={() => setButtonClicked(item)}
                    className={`cursor-pointer flex flex-col items-center transition-all duration-500`}
                > 
                    <p style={{ fontSize: `var(--24)` }} className={`font-[noto-sans-medium] text-[var(--black2white)]`}>
                        {item}
                    </p>
                    <div
                        className={`w-full h-[2px] bg-[var(--black2white)] transition-all duration-500 ${
                            isClicked === item ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                        }`}
                    ></div>
                </div>
            ))}
        </div>
    );
}

export { Menu };
