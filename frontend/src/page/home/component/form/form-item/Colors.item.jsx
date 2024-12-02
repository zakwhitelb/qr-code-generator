function Colors({ dataQRCode, handleChange }) {
    const COLORBG = ["transparent", "black", "white", "red", "gray", "blue"];
    const COLORQR = ["red", "black", "white", "gray", "blue"];
    const COLORS = {
        transparent: "transparent",
        black: "black",
        white: 'white',
        red: "red",
        gray: "gray",
        blue: "blue"
    };
    return (
        <div>
            <div>
                <p style={{ fontSize: `var(--20)` }} className="font-[pt-sans-regular] text-[var(--black2white)]">Background Color</p>
                <div className="flex items-center justify-center px-[10px] mt-[5px] gap-[25px]">
                    {COLORBG.map((item) => (
                        <div
                            key={item}
                            onClick={() => handleChange("back_color", COLORS[item])}
                            style={{ backgroundColor: COLORS[item] }}
                            className={`w-[34px] h-[34px] rounded-[7px] border-[2px] border-[var(--skyBlue2white)] cursor-pointer shadow-md ${
                                dataQRCode["back_color"] === COLORS[item] && "w-[45px] h-[45px]"
                            }`}
                        ></div>
                    ))}
                </div>
            </div>

            <div>
                <p style={{ fontSize: `var(--20)` }} className="font-[pt-sans-regular] text-[var(--black2white)]">QR Code Color</p>
                <div className="flex items-center justify-center px-[10px] mt-[5px] gap-[25px]">
                    {COLORQR.map((item) => (
                        <div
                            key={item}
                            onClick={() => handleChange("fill_color", COLORS[item])}
                            style={{ backgroundColor: COLORS[item] }}
                            className={`w-[34px] h-[34px] rounded-[7px] border-[2px] border-[var(--skyBlue2white)] cursor-pointer shadow-md ${
                                dataQRCode["fill_color"] === COLORS[item] && "w-[45px] h-[45px]"
                            }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export { Colors };
